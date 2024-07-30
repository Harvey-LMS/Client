'use client';

import { useEffect, useState } from 'react';
import Lesson from './unit-lesson';
import { Item } from '@/components/reorder/item-drag';
import { Reorder } from 'framer-motion';
import { Input } from '@nextui-org/input';
import { Button, useDisclosure } from '@nextui-org/react';
import { IoIosAdd } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import ModalCreate from './modal-create';

import axios from 'axios';
import dotenv from 'dotenv';
import { IChapter } from '@/types/course';
import ModalNotify from './modal-notify';
dotenv.config();

const Chapter = () => {
   const [data, setData] = useState<IChapter[]>([]);
   const [openChapters, setOpenChapters] = useState<string | null>(null);
   const [titleInput, setTitleInput] = useState('');
   const [descriptionInput, setDescriptionInput] = useState('');
   const [isEditTitle, setIsEditTitle] = useState<string | null>(null);

   const [isShowEditDescription, setIsShowEditDescription] = useState<string | null>(null);

   const { isOpen, onOpenChange } = useDisclosure();

   const handleShowModalCreate = () => {
      onOpenChange();
   };

   const handleShowEditDescription = (chapter: string) => {
      setIsShowEditDescription((prev) => (prev === chapter ? null : chapter));
   };

   const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescriptionInput(e.target.value);
   };

   const handleSaveChapter = async (chapterName: string) => {
      const dataGet = await axios.get('http://localhost:8000/chapters');
      const newChapter = {
         id: dataGet.data.length + 1,
         title: `Chapter ${dataGet.data.length + 1}: ` + chapterName,
         description: '',
         lessons: [],
      };

      try {
         const response = await axios.post('http://localhost:8000/chapters', newChapter);
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

   const handleUpdateDescription = async (chapterId: number, newDescription: string) => {
      try {
         const currentDataResponse = await axios.get(`http://localhost:8000/chapters/${chapterId}`);
         if (currentDataResponse.status !== 200) {
            console.error('Failed to fetch current chapter data');
            return;
         }

         const currentData = currentDataResponse.data;
         const updatedData = {
            ...currentData,
            description: newDescription,
         };
         const response = await axios.put(
            `http://localhost:8000/chapters/${chapterId}`,
            updatedData,
         );
         if (response.status === 200) {
            alert('Lesson content updated successfully');
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
         const response = await axios.delete(`http://localhost:8000/chapters/${itemId}`);
         if (response.status === 200) {
            alert('Item deleted successfully');
            setData((prevData) => prevData.filter((item) => item.id.toString() !== itemId));
         } else {
            alert('Failed to delete item');
         }
      } catch (error) {
         console.error('Error deleting item:', error);
      }
   };

   const handleDropdown = (item: string) => {
      setOpenChapters((prev) => (prev === item ? null : item));
   };

   const handleChangeTitleChapter = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitleInput(e.target.value);
   };

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get('http://localhost:8000/chapters');
            setData(response.data);
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
               onReorder={setData}
               values={data}
            >
               {data.map((item) => (
                  <Reorder.Item
                     as="div"
                     value={item}
                     key={item.id}
                     className={`flex flex-col gap-4 p-2
                        ${
                           openChapters === item.title
                              ? 'border-4 border-solid bg-[#F7F7F7] shadow-sm rounded-md'
                              : 'bg-white border-1 border-solid border-[#DBDBDB] rounded-md'
                        }`}
                  >
                     <Item
                        item={item}
                        handleDelete={() => handleDeleteItem(item.id.toString())}
                        handleDropdown={() => handleDropdown(item.title)}
                        type="chapter"
                        isEditTitle={isEditTitle === item.title}
                        handleChangeTitleChapter={handleChangeTitleChapter}
                     ></Item>
                     {openChapters === item.title && (
                        <div className="">
                           <div className="border border-gray-300 bg-white mb-2"></div>

                           <div className="flex flex-col mx-4">
                              <div className="mx-5">
                                 <div
                                    className={`flex flex-col p-2 ${
                                       isShowEditDescription ? 'gap-2' : 'gap-0'
                                    } border-1 border-solid rounded-md bg-[#F3F3F3]`}
                                 >
                                    <div className="flex flex-row gap-2 justify-between">
                                       <span className="text-md font-semibold">Description</span>
                                       {isShowEditDescription === item.title ? (
                                          <></>
                                       ) : (
                                          <Button
                                             onClick={() => handleShowEditDescription(item.title)}
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
                                    {isShowEditDescription === item.title ? (
                                       <Input
                                          onChange={handleChangeDescription}
                                          placeholder={'Enter chapter description'}
                                          variant={'faded'}
                                          className="w-full"
                                       />
                                    ) : (
                                       <span className="text-sm">{item.description}</span>
                                    )}
                                 </div>
                                 <div className="border border-gray-300 bg-white mt-2"></div>
                              </div>

                              <Lesson
                                 chapterId={item.id}
                                 lessons={item.lessons}
                                 setLessons={() => console.log('setLessons')}
                              />
                              <div className="m-2">
                                 {isShowEditDescription === item.title ? (
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
                                             handleUpdateDescription(item.id, descriptionInput)
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
