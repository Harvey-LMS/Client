'use client';

import { useEffect, useState } from 'react';
import Lesson from './unit-lesson';
import { Item } from '@/components/reorder/item-drag';
import { Reorder } from 'framer-motion';
import { Input } from '@nextui-org/input';
import { Button, Skeleton, useDisclosure } from '@nextui-org/react';
import { IoIosAdd } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import ModalCreate from './modal-create';

import axios from 'axios';
import dotenv from 'dotenv';
import { IChapter } from '@/types/course';

dotenv.config();

const Chapter = () => {
   const [data, setData] = useState<IChapter[]>([]);
   const [openChapters, setOpenChapters] = useState<string | null>(null);
   const [titleInput, setTitleInput] = useState<string>('');
   const [descriptionInput, setDescriptionInput] = useState<string>('');

   const [isShowEditTitle, setIsShowEditTitle] = useState<string | null>(null);
   const [isShowEditDescription, setIsShowEditDescription] = useState<string | null>(null);

   const [isFetching, setIsFetching] = useState<boolean>(false);

   const { isOpen, onOpenChange } = useDisclosure();

   const handleShowModalCreate = () => {
      onOpenChange();
   };

   const handleShowEditTitle = (chapterId: string, currentTitle: string, description: string) => {
      setTitleInput(currentTitle);
      setIsShowEditTitle((prev) => (prev === chapterId ? null : chapterId));
      if (isShowEditDescription) {
         handleUpdateDescription(chapterId, description);
         setIsShowEditDescription(null);
      }
   };

   const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitleInput(e.target.value);
   };

   const handleShowEditDescription = (
      chapterId: string,
      currentDescription: string,
      title: string,
   ) => {
      setDescriptionInput(currentDescription);
      setIsShowEditDescription((prev) => (prev === chapterId ? null : chapterId));

      if (isShowEditTitle) {
         handleUpdateTitle(chapterId, title);
         setIsShowEditTitle(null);
      }
   };

   const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescriptionInput(e.target.value);
   };

   const apiUrl = process.env.NEXT_PUBLIC_API_ENDPOINT_CHAPTER;

   const handleSaveChapter = async (chapterName: string) => {
      const dataGet = await axios.get(apiUrl as string);
      const newChapter = {
         id: (dataGet.data.length + 1).toString(),
         title: chapterName,
         // title: `Chapter ${dataGet.data.length + 1}: ` + chapterName,
         description: 'This is default description',
         lessons: [],
         orderIndex: dataGet.data.length + 1,
      };

      try {
         const response = await axios.post(apiUrl as string, newChapter);
         if (response.status === 201) {
            setData((prevData) => [...prevData, response.data]);
            onOpenChange();
         } else {
            console.error('Failed to create new chapter');
         }
      } catch (error) {
         console.error('Error creating new chapter:', error);
      }
   };

   const handleUpdateTitle = async (chapterId: string, newTitle: string) => {
      try {
         const currentDataResponse = await axios.get(`${apiUrl}/${chapterId}`);
         if (currentDataResponse.status !== 200) {
            console.error('Failed to fetch current chapter data');
            return;
         }

         const currentData = currentDataResponse.data;
         const updatedData = {
            ...currentData,
            title: newTitle,
         };
         const response = await axios.put(`${apiUrl}/${chapterId}`, updatedData);
         if (response.status === 200) {
            setData((prevData) =>
               prevData.map((item) => (item.id === chapterId ? updatedData : item)),
            );
         } else {
            console.error('Failed to update lesson content');
         }
         setIsShowEditTitle(null);
      } catch (error) {
         console.error('Error updating lesson content:', error);
         throw error;
      }
   };

   const handleUpdateDescription = async (chapterId: string, newDescription: string) => {
      try {
         const currentDataResponse = await axios.get(`${apiUrl}/${chapterId}`);
         if (currentDataResponse.status !== 200) {
            console.error('Failed to fetch current chapter data');
            return;
         }

         const currentData = currentDataResponse.data;
         const updatedData = {
            ...currentData,
            description: newDescription,
         };
         const response = await axios.put(`${apiUrl}/${chapterId}`, updatedData);
         if (response.status === 200) {
            setData((prevData) =>
               prevData.map((item) => (item.id === chapterId ? updatedData : item)),
            );
         } else {
            console.error('Failed to update lesson content');
         }
         setIsShowEditDescription(null);
      } catch (error) {
         console.error('Error updating lesson content:', error);
         throw error;
      }
   };

   const handleDeleteItem = async (itemId: string) => {
      try {
         const response = await axios.delete(`${apiUrl}/${itemId}`);

         if (response.status === 200) {
            // setData((prevData) => prevData.filter((item) => item.id !== itemId));
            const newData = data.filter((item) => item.id !== itemId);
            const updatedChapters = updateChaptersIndex(newData);
            setData(updatedChapters);
         } else {
            alert('Failed to delete item');
         }
      } catch (error) {
         console.error('Error deleting item:', error);
      }
   };

   const updateChaptersIndex = (chapters: IChapter[]) => {
      return chapters.map((chapter, index) => ({
         ...chapter,
         // id: (index + 1).toString(),
         title: chapter.title,
         orderIndex: index + 1,
      }));
   };

   const handleReorder = async (newData: IChapter[]) => {
      const updatedChapters = updateChaptersIndex(newData);
      setData(updatedChapters);

      try {
         const updatePromises = updatedChapters.map((chapter) =>
            axios.put(`${apiUrl}/${chapter.id}`, chapter, {
               headers: { 'Content-Type': 'application/json' },
            }),
         );

         const responses = await Promise.all(updatePromises);

         if (responses.every((response) => response.status === 200)) {
            console.log('Chapters updated successfully');
         } else {
            console.error('Failed to update some chapters.');
            responses.forEach((response) => {
               if (response.status !== 200) {
                  console.error(
                     `Failed to update chapter ${response.data.id}. Status:`,
                     response.status,
                  );
                  console.error('Response data:', response.data);
               }
            });
         }
      } catch (error) {
         console.error('Error updating chapters:', error);
      }
   };

   const handleDropdown = (itemId: string) => {
      setOpenChapters((prev) => (prev === itemId ? null : itemId));
   };

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(apiUrl as string);
            const data = [...response.data].sort((a, b) => a.orderIndex - b.orderIndex);
            setData(data);
            if (data) setIsFetching(true);
         } catch (error) {
            console.error('Error: ', error);
         }
      };
      fetchData();
   }, []);

   return (
      <div className="w-full p-2 shadow-md">
         <div className="m-2">
            <Reorder.Group
               className="flex flex-col gap-4 p-2"
               axis="y"
               onReorder={handleReorder}
               values={data}
            >
               {data.map((item) => (
                  <Reorder.Item
                     as="div"
                     value={item}
                     key={item.id}
                     className={`flex flex-col gap-4 p-2
                        ${
                           openChapters === item.id
                              ? 'border-4 border-solid bg-[#F7F7F7] shadow-sm rounded-md'
                              : 'bg-white border-1 border-solid border-[#DBDBDB] rounded-md'
                        }`}
                  >
                     <Item
                        item={item}
                        handleDelete={() => handleDeleteItem(item.id)}
                        handleDropdown={() => handleDropdown(item.id)}
                        type="chapter"
                        isDropdown={openChapters === item.id}
                        fileType=""
                        isFetching={isFetching}
                     ></Item>
                     {openChapters === item.id && (
                        <div className="">
                           <div className="flex flex-col mx-4">
                              <div className="m-5">
                                 <div
                                    className={`flex flex-col p-2 ${
                                       isShowEditTitle ? 'gap-2' : 'gap-0'
                                    } border-1 border-solid rounded-md bg-[#F3F3F3]`}
                                 >
                                    <div className="flex flex-row gap-2 justify-between">
                                       <span className="text-md font-semibold">Title</span>
                                       {isShowEditTitle === item.id ? (
                                          <></>
                                       ) : (
                                          <Button
                                             onClick={() =>
                                                handleShowEditTitle(
                                                   item.id,
                                                   item.title,
                                                   descriptionInput,
                                                )
                                             }
                                             className="flex flex-row gap-2 "
                                             variant={'light'}
                                          >
                                             <div>
                                                <FaEdit />
                                             </div>
                                             <span>Edit title</span>
                                          </Button>
                                       )}
                                    </div>
                                    {isShowEditTitle === item.id ? (
                                       <Input
                                          onChange={handleChangeTitle}
                                          variant={'faded'}
                                          className="w-full"
                                          value={titleInput}
                                       />
                                    ) : (
                                       <span className="text-sm">{item.title}</span>
                                    )}
                                    <div className="">
                                       {isShowEditTitle === item.id ? (
                                          <div className="flex flex-row gap-6 justify-end">
                                             <Button
                                                onClick={() => setIsShowEditTitle(null)}
                                                variant={'light'}
                                                className="text-red-600"
                                             >
                                                Cancel
                                             </Button>
                                             <Button
                                                onClick={() =>
                                                   handleUpdateTitle(item.id, titleInput)
                                                }
                                                color={'primary'}
                                             >
                                                Save
                                             </Button>
                                          </div>
                                       ) : (
                                          <div className="flex flex-row gap-6 justify-end"></div>
                                       )}
                                    </div>
                                 </div>
                              </div>
                              <div className="mx-5">
                                 <div
                                    className={`flex flex-col p-2 ${
                                       isShowEditDescription ? 'gap-2' : 'gap-0'
                                    } border-1 border-solid rounded-md bg-[#F3F3F3]`}
                                 >
                                    <div className="flex flex-row gap-2 justify-between">
                                       <span className="text-md font-semibold">Description</span>
                                       {isShowEditDescription === item.id ? (
                                          <></>
                                       ) : (
                                          <Button
                                             onClick={() =>
                                                handleShowEditDescription(
                                                   item.id,
                                                   item.description,
                                                   titleInput,
                                                )
                                             }
                                             className="flex flex-row gap-2 "
                                             variant={'light'}
                                          >
                                             <div>
                                                <FaEdit />
                                             </div>
                                             <span>Edit description</span>
                                          </Button>
                                       )}
                                    </div>
                                    {isShowEditDescription === item.id ? (
                                       <Input
                                          onChange={handleChangeDescription}
                                          placeholder={'Enter chapter description'}
                                          variant={'faded'}
                                          className="w-full"
                                          value={descriptionInput}
                                       />
                                    ) : (
                                       <span className="text-sm">{item.description}</span>
                                    )}
                                    <div className="">
                                       {isShowEditDescription === item.id ? (
                                          <div className="flex flex-row gap-6 justify-end">
                                             <Button
                                                onClick={() => setIsShowEditDescription(null)}
                                                variant={'light'}
                                                className="text-red-600"
                                             >
                                                Cancel
                                             </Button>
                                             <Button
                                                onClick={() =>
                                                   handleUpdateDescription(
                                                      item.id,
                                                      descriptionInput,
                                                   )
                                                }
                                                color={'primary'}
                                             >
                                                Save
                                             </Button>
                                          </div>
                                       ) : (
                                          <></>
                                       )}
                                    </div>
                                 </div>
                                 <div className="border border-gray-300 bg-white mt-2"></div>
                              </div>

                              <Lesson
                                 chapterId={item.id}
                                 lessons={item.lessons}
                                 setLessons={() => console.log('setLessons')}
                              />
                           </div>
                        </div>
                     )}
                  </Reorder.Item>
               ))}
            </Reorder.Group>
            <div className="flex items-center justify-center">
               <Button
                  onPress={handleShowModalCreate}
                  variant={'light'}
                  className="flex flex-row items-center justify-center"
               >
                  <IoIosAdd className="text-3xl" />
                  <span className="font-semibold">Add </span>
                  <ModalCreate
                     isOpen={isOpen}
                     onOpenChange={onOpenChange}
                     onSave={handleSaveChapter}
                     name="chapter"
                  ></ModalCreate>
               </Button>
            </div>
         </div>
      </div>
   );
};

export default Chapter;
