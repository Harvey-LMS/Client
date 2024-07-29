import React, { useState } from 'react';
import { Item } from '@/components/reorder/item-drag';
import { Button, Input } from '@nextui-org/react';
import { Reorder } from 'framer-motion';
import Image from 'next/image';
import { IoIosAdd } from 'react-icons/io';
import UploadFile from './upload';
import { FaEdit } from 'react-icons/fa';

interface Props {
   chapter: string;
   lessons: string[];
   setLessons: React.Dispatch<React.SetStateAction<{ [key: string]: string[] }>>;
}

const Lesson = ({ chapter, lessons, setLessons }: Props) => {
   const initialItems = ['Lesson 1: Basic', 'Lesson 2: Listening'];
   const [items, setItems] = useState(initialItems);
   const [contentInput, setContentInput] = useState('');
   const [content, setContent] = useState(
      'Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask,  Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to',
   );
   const [lessonNameInput, setLessonNameInput] = useState('');
   const [isShowEditContent, setIsShowEditContent] = useState<string | null>(null);
   const [isShowEditUpload, setIsShowEditUpload] = useState<string | null>(null);
   const [openLessons, setOpenLessons] = useState<string | null>(null);
   const [isEditTitle, setIsEditTitle] = useState<string | null>(null);
   const [isShowCreate, setIsShowCreate] = useState(false);
   const [fileUrl, setFileUrl] = useState<string>('');
   const [fileType, setFileType] = useState<string | null>(null);

   const handleShowEditContent = (lesson: string) => {
      setIsShowEditContent((prev) => (prev === lesson ? null : lesson));
   };

   const handleShowEditUpload = (lesson: string) => {
      setIsShowEditUpload((prev) => (prev === lesson ? null : lesson));
   };

   const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
      setContentInput(e.target.value);
   };

   const handleSaveContent = (lesson: string) => {
      setContent(contentInput);
      setIsShowEditContent(null);
   };

   const handleSaveUpload = (lesson: string) => {
      renderFileContent(fileUrl, fileType);
      setIsShowEditUpload(null);
   };

   const handleDeleteItem = (lesson: string) => {
      setItems((prevItems) => prevItems.filter((i) => i !== lesson));
      setLessons((prev) => ({
         ...prev,
         [chapter]: prev[chapter].filter((i) => i !== lesson),
      }));
   };

   const handleDropdown = (lesson: string) => {
      setOpenLessons((prev) => (prev === lesson ? null : lesson));
   };

   const handleChangeLesson = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLessonNameInput(e.target.value);
   };

   const handleCreateLesson = () => {
      setLessons((prev) => ({
         ...prev,
         [chapter]: [...prev[chapter], lessonNameInput],
      }));
      setLessonNameInput('');
      setIsShowCreate(false);
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
            return <div>File not valid (include PDF, Video, Audio)</div>;
      }
   };

   return (
      <div className="flex flex-col w-full">
         <div className="m-2">
            <Reorder.Group
               className="flex flex-col gap-4 p-2"
               axis="y"
               onReorder={(newOrder) => setLessons((prev) => ({ ...prev, [chapter]: newOrder }))}
               values={lessons}
            >
               {lessons.map((lesson) => (
                  <Reorder.Item
                     key={lesson}
                     value={lesson}
                     className={`p-2 ${
                        openLessons === lesson
                           ? 'border-4 border-primary border-solid rounded-md -m-1'
                           : 'border-1 border-solid border-[#E9E9E9] bg-[#F2F2F2] rounded-md'
                     }`}
                  >
                     <Item
                        item={lesson}
                        handleDelete={handleDeleteItem}
                        handleEdit={() => handleShowEditContent(lesson)}
                        handleDropdown={() => handleDropdown(lesson)}
                        type="lesson"
                        isEditTitle={isEditTitle === lesson}
                        handleChangeTitleChapter={() => console.log('')}
                     />
                     {openLessons === lesson && (
                        <div>
                           <div className="border border-gray-300 bg-white m-2"></div>
                           <div className="p-2">
                              <div className="my-2">
                                 <div className="flex flex-col gap-0">
                                    <div className="flex flex-col gap-4 bg-[#F3F3F3] border-1 border-solid rounded-md p-2">
                                       <div className="flex flex-row gap-2 justify-between">
                                          <span className="text-md font-semibold">Content</span>
                                          {isShowEditContent === lesson ? (
                                             <Button
                                                onClick={() => handleShowEditContent(lesson)}
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
                                                onClick={() => handleShowEditContent(lesson)}
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
                                       {isShowEditContent === lesson ? (
                                          <Input
                                             onChange={handleChangeContent}
                                             placeholder="Enter lesson content"
                                             variant="faded"
                                             className="w-full"
                                             value={contentInput}
                                          />
                                       ) : (
                                          <span className="text-sm">{content}</span>
                                       )}
                                    </div>
                                    <div className="my-2">
                                       {isShowEditContent === lesson ? (
                                          <div className="flex flex-row gap-6 justify-end">
                                             <Button
                                                onClick={() => setIsShowEditContent(null)}
                                                variant="light"
                                                className="text-red-600"
                                             >
                                                Cancel
                                             </Button>
                                             <Button
                                                onClick={() => handleSaveContent(lesson)}
                                                color="primary"
                                             >
                                                Save
                                             </Button>
                                          </div>
                                       ) : null}
                                    </div>
                                 </div>
                              </div>
                              <div className="my-2">
                                 <div className="flex flex-col gap-4 bg-gray-50 border-1 border-solid rounded-md p-2">
                                    <div className="flex flex-row justify-between">
                                       <span className="text-md font-semibold">Upload</span>
                                       {isShowEditUpload === lesson ? (
                                          <UploadFile
                                             isShowEdit={isShowEditUpload === lesson}
                                             value={fileUrl}
                                             onFileUpload={(file, type) => {
                                                setFileUrl(file);
                                                setFileType(type);
                                             }}
                                          />
                                       ) : (
                                          <Button
                                             onClick={() => handleShowEditUpload(lesson)}
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
                                    <div className="flex justify-center items-center">
                                       {fileUrl &&
                                          !isShowEditUpload &&
                                          renderFileContent(fileUrl, fileType)}
                                    </div>
                                 </div>
                                 <div className="my-2">
                                    {isShowEditUpload === lesson ? (
                                       <div className="flex flex-row gap-6 justify-end">
                                          <Button
                                             onClick={() => setIsShowEditUpload(null)}
                                             variant="light"
                                             className="text-red-600"
                                          >
                                             Cancel
                                          </Button>
                                          <Button
                                             onClick={() => handleSaveUpload(lesson)}
                                             color="primary"
                                          >
                                             Save
                                          </Button>
                                       </div>
                                    ) : null}
                                 </div>
                              </div>
                           </div>
                        </div>
                     )}
                  </Reorder.Item>
               ))}
            </Reorder.Group>
            <div className="flex items-center justify-center mt-4">
               {isShowCreate ? (
                  <div className="flex flex-col gap-4">
                     <Input
                        placeholder="Enter new lesson name"
                        variant="faded"
                        value={lessonNameInput}
                        onChange={handleChangeLesson}
                     />
                     <div className="flex justify-end gap-4">
                        <Button
                           onClick={() => setIsShowCreate(false)}
                           variant="light"
                           className="text-red-600"
                        >
                           Cancel
                        </Button>
                        <Button onClick={handleCreateLesson} color="primary">
                           Create Lesson
                        </Button>
                     </div>
                  </div>
               ) : (
                  <Button
                     onClick={() => setIsShowCreate(true)}
                     variant="light"
                     className="flex flex-row items-center justify-center"
                  >
                     <IoIosAdd className="text-3xl" />
                     <span className="font-semibold">Add Lesson</span>
                  </Button>
               )}
            </div>
         </div>
      </div>
   );
};

export default Lesson;
