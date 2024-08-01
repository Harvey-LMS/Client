import React, { useState } from 'react';
import { Item } from '@/components/reorder/item-drag';
import { Button, Input, useDisclosure } from '@nextui-org/react';
import { Reorder } from 'framer-motion';
import Image from 'next/image';
import { IoIosAdd } from 'react-icons/io';
import UploadFile from './upload';
import { FaEdit } from 'react-icons/fa';
import ModalCreate from './modal-create';
import { ILesson } from '@/types/course';
import axios from 'axios';

interface Props {
   chapterId: string;
   lessons: ILesson[];
   setLessons: React.Dispatch<React.SetStateAction<{ [key: string]: ILesson[] }>>;
}

const Lesson = ({ chapterId, lessons, setLessons }: Props) => {
   const [data, setData] = useState(lessons);

   const [contentInput, setContentInput] = useState('');
   const [lessonNameInput, setLessonNameInput] = useState('');
   const [isShowEditContent, setIsShowEditContent] = useState<string | null>(null);
   const [isShowEditUpload, setIsShowEditUpload] = useState<string | null>(null);
   const [openLessons, setOpenLessons] = useState<string | null>(null);
   const [isEditTitle, setIsEditTitle] = useState<string | null>(null);
   const [isShowCreate, setIsShowCreate] = useState(false);
   const [fileUrl, setFileUrl] = useState<string>('');
   const [fileType, setFileType] = useState<string | null>(null);

   const { isOpen, onOpenChange } = useDisclosure();

   const handleShowModalCreate = () => {
      onOpenChange();
   };

   const apiUrl = 'http://localhost:8000/chapters';

   const handleSaveLesson = async (title: string) => {
      try {
         const currentChapterResponse = await axios.get(`${apiUrl}/${chapterId}`);
         const currentChapter = currentChapterResponse.data;

         const newLesson = {
            id: currentChapter.lessons.length + 1,
            title: `Lesson ${currentChapter.lessons.length + 1}: ` + title,
            content: 'This is default content',
         };

         const updatedLessons = [...currentChapter.lessons, newLesson];

         const updatedChapter = {
            ...currentChapter,
            lessons: updatedLessons,
         };

         const response = await axios.put(`${apiUrl}/${chapterId}`, updatedChapter);

         if (response.status === 200) {
            setLessons((prev) => ({
               ...prev,
               [chapterId]: updatedLessons,
            }));
            setData(updatedLessons);
            onOpenChange();
         } else {
            console.error('Failed to create new lesson');
         }
      } catch (error) {
         console.error('Error creating new lesson:', error);
      }
   };

   const handleUpdateContent = async (lessonId: string, newContent: string) => {
      try {
         const chapterResponse = await axios.get(`${apiUrl}/${chapterId}`);
         const chapterData = chapterResponse.data;

         const updatedLessons = chapterData.lessons.map((lesson: any) => {
            if (lesson.id === lessonId) {
               setData((prev) => {
                  const updatedItems = prev.map((item) => {
                     if (item.id === lessonId) {
                        return { ...item, content: newContent };
                     }
                     return item;
                  });
                  return updatedItems;
               });
               return { ...lesson, content: newContent };
            }

            return lesson;
         });

         const response = await axios.patch(`${apiUrl}/${chapterId}`, {
            ...chapterData,
            lessons: updatedLessons,
         });

         setIsShowEditContent(null);
         return response.data;
      } catch (error) {
         console.error('Error updating lesson content:', error);
         throw error;
      }
   };

   const handleDeleteItem = async (lessonId: string) => {
      try {
         const currentChapterResponse = await axios.get(`${apiUrl}/${chapterId}`);
         const currentChapter = currentChapterResponse.data;

         const updatedLessons = currentChapter.lessons.filter(
            (lesson: ILesson) => lesson.id !== lessonId,
         );

         const renumberedLesson = updatedLessons.map((lesson: ILesson, index: number) => ({
            ...lesson,
            title: `Lesson ${index + 1}: ${lesson.title.split(': ')[1]}`,
            orderIndex: index + 1,
         }));

         const updatedChapter = {
            ...currentChapter,
            lessons: renumberedLesson,
         };

         const response = await axios.put(`${apiUrl}/${chapterId}`, updatedChapter);

         if (response.status === 200) {
            setData(response.data.lessons);
         } else {
            console.error('Failed to delete the lesson');
         }
      } catch (error) {
         console.error('Error deleting the lesson:', error);
      }
   };
   const updateLessonsOrder = async (updatedLessons: ILesson[]) => {
      try {
         const currentChapterResponse = await axios.get(`${apiUrl}/${chapterId}`);
         const currentChapter = currentChapterResponse.data;

         const updatedChapter = {
            ...currentChapter,
            lessons: updatedLessons,
         };

         await axios.put(`${apiUrl}/${chapterId}`, updatedChapter);
      } catch (error) {
         console.error('Error updating lessons order:', error);
      }
   };

   const handleReorder = (newItems: ILesson[]) => {
      const updatedItems = newItems.map((item, index) => ({
         ...item,
         title: `Lesson ${index + 1}: ${item.title.split(': ')[1]}`,
         orderIndex: index + 1,
      }));
      setData(updatedItems);
      setLessons((prev) => ({
         ...prev,
         [chapterId]: updatedItems,
      }));
      updateLessonsOrder(updatedItems);
   };

   const handleShowEditContent = (lesson: string, currentContent: string) => {
      setContentInput(currentContent);
      setIsShowEditContent((prev) => (prev === lesson ? null : lesson));
   };

   const handleShowEditUpload = (lesson: string, currentUrl: string, currentType: string) => {
      setFileUrl(currentUrl);
      setFileType(currentType);
      setIsShowEditUpload((prev) => (prev === lesson ? null : lesson));
   };

   const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
      setContentInput(e.target.value);
   };

   const handleSaveUpload = () => {
      renderFileContent(fileUrl, fileType);
      setIsShowEditUpload(null);
   };

   const handleDropdown = (lesson: string) => {
      setOpenLessons((prev) => (prev === lesson ? null : lesson));
   };

   const handleChangeLesson = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLessonNameInput(e.target.value);
   };

   const renderFileContent = (file: string, type: string | null) => {
      switch (type) {
         case 'PNG':
            return <Image src={file} alt="thumbnail" width={500} height={400} />;
         case 'MP4':
            return (
               <video className="border rounded-lg object-cover w-[680px] h-[400px]" controls>
                  <source src={file} type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
            );
         case 'MPEG':
            return (
               <audio className="border rounded-lg size-120" controls>
                  <source src={file} type="audio/mpeg" />
                  Your browser does not support the audio element.
               </audio>
            );
         case 'PDF':
            return (
               <iframe
                  className="border rounded-lg object-cover w-[680px] h-[400px]"
                  src={file}
                  title="PDF Preview"
               />
            );
         default:
            return <div>There is not thing</div>;
      }
   };

   return (
      <div className="flex flex-col w-full">
         <div className="m-2">
            <Reorder.Group
               className="flex flex-col gap-4 p-2"
               axis="y"
               onReorder={handleReorder}
               values={data}
            >
               {data.map((lesson) => (
                  <Reorder.Item
                     key={lesson.id}
                     value={lesson}
                     className={`p-2 ${
                        openLessons === lesson.title
                           ? 'border-4 border-primary border-solid rounded-md -m-1'
                           : 'border-1 border-solid border-[#E9E9E9] bg-[#F2F2F2] rounded-md'
                     }`}
                  >
                     <Item
                        item={lesson}
                        handleDelete={() => handleDeleteItem(lesson.id)}
                        handleDropdown={() => handleDropdown(lesson.title)}
                        type="lesson"
                        isEditTitle={isEditTitle === lesson.title}
                        handleChangeTitleChapter={() => console.log('')}
                        isDropdown={openLessons === lesson.title}
                     />
                     {openLessons === lesson.title && (
                        <div>
                           <div className="border border-gray-300 bg-white m-2"></div>
                           <div className="p-2">
                              <div className="my-2">
                                 <div className="flex flex-col gap-0">
                                    <div
                                       className={`flex flex-col ${
                                          isShowEditContent === lesson.title ? 'gap-2' : 'gap-0'
                                       }bg-[#F3F3F3] border-1 border-solid rounded-md p-2`}
                                    >
                                       <div className="flex flex-row gap-2 justify-between">
                                          <span className="text-md font-semibold">Content</span>
                                          {isShowEditContent === lesson.title ? (
                                             <Button
                                                onClick={() =>
                                                   handleShowEditContent(
                                                      lesson.title,
                                                      lesson.content,
                                                   )
                                                }
                                                className="flex flex-row gap-2"
                                                variant="light"
                                             >
                                                <div>
                                                   <FaEdit />
                                                </div>
                                                <span>Edit content</span>
                                             </Button>
                                          ) : (
                                             <Button
                                                onClick={() =>
                                                   handleShowEditContent(
                                                      lesson.title,
                                                      lesson.content,
                                                   )
                                                }
                                                className="flex flex-row gap-2"
                                                variant="light"
                                             >
                                                <div>
                                                   <FaEdit />
                                                </div>
                                                <span>Edit content</span>
                                             </Button>
                                          )}
                                       </div>
                                       {isShowEditContent === lesson.title ? (
                                          <Input
                                             onChange={handleChangeContent}
                                             placeholder="Enter lesson content"
                                             variant="faded"
                                             className="w-full"
                                             value={contentInput}
                                          />
                                       ) : (
                                          <span className="text-sm">{lesson.content}</span>
                                       )}
                                    </div>
                                    <div className="my-2">
                                       {isShowEditContent === lesson.title ? (
                                          <div className="flex flex-row gap-6 justify-end">
                                             <Button
                                                onClick={() => setIsShowEditContent(null)}
                                                variant="light"
                                                className="text-red-600"
                                             >
                                                Cancel
                                             </Button>
                                             <Button
                                                onClick={() =>
                                                   handleUpdateContent(lesson.id, contentInput)
                                                }
                                                color="primary"
                                             >
                                                Save
                                             </Button>
                                          </div>
                                       ) : (
                                          ''
                                       )}
                                    </div>
                                 </div>
                              </div>

                              <div className="my-2">
                                 <div className="flex flex-col gap-4 bg-gray-50 border-1 border-solid rounded-md p-2">
                                    <div className="flex flex-row justify-between">
                                       <span className="text-md font-semibold">Upload</span>
                                       {/* <UploadFile
                                          isShowEdit={isShowEditUpload === lesson.title}
                                          value={fileUrl}
                                          onFileUpload={(file, type) => {
                                             setFileUrl(file);
                                             setFileType(type);
                                          }}
                                       /> */}
                                       {isShowEditUpload === lesson.title ? (
                                          <UploadFile
                                             isShowEdit={isShowEditUpload === lesson.title}
                                             value={fileUrl}
                                             onFileUpload={(file, type) => {
                                                setFileUrl(file);
                                                setFileType(type);
                                             }}
                                          />
                                       ) : (
                                          <Button
                                             onClick={() =>
                                                handleShowEditUpload(lesson.title, '', '')
                                             }
                                             className="flex flex-row gap-2"
                                             variant="light"
                                          >
                                             <div>
                                                <FaEdit />
                                             </div>
                                             <span>Edit upload</span>
                                          </Button>
                                       )}
                                    </div>
                                    {isShowEditUpload === lesson.title ? (
                                       <div className="mt-2 flex flex-row gap-6 justify-end">
                                          <Button
                                             onClick={() => setIsShowEditUpload(null)}
                                             variant="light"
                                             className="text-red-600"
                                          >
                                             Cancel
                                          </Button>
                                          <Button
                                             onClick={() => handleSaveUpload()}
                                             color="primary"
                                          >
                                             Save
                                          </Button>
                                       </div>
                                    ) : (
                                       <div className="flex justify-center items-center">
                                          {renderFileContent(fileUrl, fileType)}
                                       </div>
                                    )}
                                 </div>
                              </div>
                           </div>
                        </div>
                     )}
                  </Reorder.Item>
               ))}
            </Reorder.Group>
         </div>
         <div className="p-2 flex justify-center items-center">
            <Button
               onPress={handleShowModalCreate}
               onClick={() => setIsShowCreate(true)}
               color="primary"
               size="md"
            >
               <IoIosAdd className="text-3xl" />
               Add new lesson
            </Button>
            <ModalCreate
               isOpen={isOpen}
               onOpenChange={onOpenChange}
               onSave={(lessonName) => handleSaveLesson(lessonName)}
               name="lesson"
            />
         </div>
      </div>
   );
};

export default Lesson;
