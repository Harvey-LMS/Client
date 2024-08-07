'use client';

import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { FileUploader } from 'react-drag-drop-files';

import './fileUploader.css';
import Image from 'next/image';

interface ThumnailCourseProps {
   title: string | '';
   value: string | null;
}

const ThumbnailCourseField = ({ title, value }: ThumnailCourseProps) => {
   const fileTypes = ['JPG', 'PNG', 'GIF'];
   const [editMode, setEditMode] = useState<boolean>(false);
   const [valueInput, setValueInput] = useState<string | null>(value);

   const [data, setData] = useState<string | null>(value);

   const handleSave = () => {
      setData(valueInput);
      setEditMode(false);
   };

   const handleCancel = () => {
      setValueInput(data);
      setEditMode(false);
   };

   const handleFileChange = (file: File) => {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
         if (e.target && e.target.result) {
            setValueInput(e.target.result as string);
         }
      };
      reader.readAsDataURL(file);
   };

   return (
      <div className="my-3 flex flex-col justify-start items-start w-full px-3 py-2 pb-3 border rounded-lg bg-slate-50 dark:bg-stone-950">
         <div className="flex flex-row justify-between items-center gap-3 w-full">
            <p className="font-bold text-lg text-foreground">Course {title}</p>
            <div
               className="flex flex-row gap-3 justify-center items-center p-3 2xl:px-3 2xl:py-0 rounded-md text-md font-semibold text-black dark:text-white cursor-pointer hover:bg-hover"
               onClick={() => {
                  setEditMode(!editMode);
               }}
            >
               <div>
                  <FiEdit />
               </div>

               <p className="hidden 2xl:block">
                  Edit {title.toLowerCase()}
               </p>
            </div>
         </div>

         <div className="flex flex-row justify-between items-center gap-3 w-full mt-3">
            {editMode ? (
               <div className="w-full">
                  <div className="flex w-full items-center justify-center">
                     <FileUploader
                        handleChange={handleFileChange}
                        name="file"
                        types={fileTypes}
                        className="w-full"
                     >
                        <div className="flex w-full items-center justify-center">
                           <div className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-large border-dashed border-gray-300 bg-gray-50 hover:border-gray-400 dark:border-gray-800 dark:bg-stone-950 dark:hover:border-gray-700 dark:hover:bg-stone-900">
                              <div className="flex flex-col items-center justify-center p-5 w-full bg-[#F1F1F1]">
                                 {valueInput ? (
                                    <Image
                                       className="border rounded-lg object-cover w-[680px] h-[400px] "
                                       width={500}
                                       height={50}
                                       alt="thumbnail"
                                       src={valueInput as string}
                                    ></Image>
                                 ) : (
                                    <div className="flex flex-col items-center justify-center w-full">
                                       <svg
                                          className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 20 16"
                                       >
                                          <path
                                             stroke="currentColor"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                          />
                                       </svg>
                                       <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                          <span className="font-semibold">Click to upload</span> or
                                          drag and drop
                                       </p>
                                       <p className="text-xs text-gray-500 dark:text-gray-400">
                                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                                       </p>
                                    </div>
                                 )}
                              </div>
                           </div>
                        </div>
                     </FileUploader>
                  </div>
               </div>
            ) : valueInput ? (
               <div className="items-center flex justify-center w-full">
                  <Image
                     className="border rounded-lg object-cover w-[680px] h-full max-h-[400px] "
                     width={500}
                     height={50}
                     alt="thumbnail"
                     src={valueInput as string}
                  ></Image>
               </div>
            ) : (
               <div>Please upload image</div>
            )}
         </div>

         {editMode ? (
            <div className="flex flex-row justify-end items-center gap-3 w-full mt-3">
               <Button variant="light" color="danger" onClick={handleCancel}>
                  Cancel
               </Button>
               <Button
                  variant="solid"
                  color="primary"
                  className="min-w-0 px-16"
                  onClick={handleSave}
               >
                  Save
               </Button>
            </div>
         ) : (
            <></>
         )}
      </div>
   );
};

export default ThumbnailCourseField;
