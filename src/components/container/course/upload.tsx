'use client';

import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { FileUploader } from 'react-drag-drop-files';
import Image from 'next/image';

interface Props {
   value: string | null;
   isShowEdit: boolean;
   onFileUpload: (fileUrl: string, fileType: string) => void;
}

const UploadFile = ({ value, isShowEdit, onFileUpload }: Props) => {
   const fileTypes = ['PNG', 'MP3', 'MP4', 'PDF'];
   const [valueInput, setValueInput] = useState<string | null>(value);
   const [fileType, setFileType] = useState<string | null>(null);

   const [uploaderKey, setUploaderKey] = useState<number>(0);

   const handleFileChange = (file: File) => {
      const reader = new FileReader();
      const type = file.type.split('/')[1].toUpperCase();
      setFileType(type);
      console.log('File Type: ', type);

      reader.onload = (e: ProgressEvent<FileReader>) => {
         if (e.target && e.target.result) {
            const result = e.target.result as string;
            setValueInput(result);
            setUploaderKey((prevKey) => prevKey + 1);
            onFileUpload(result, type);
         }
      };

      reader.readAsDataURL(file);
   };

   const renderContent = () => {
      switch (fileType) {
         case 'PNG':
            return (
               <Image
                  className="border rounded-lg object-cover w-[680px] h-[400px]"
                  width={500}
                  height={50}
                  alt="thumbnail"
                  src={valueInput as string}
               />
            );
         case 'MP4':
            return (
               <video className="border rounded-lg object-cover w-[680px] h-[400px]" controls>
                  <source src={valueInput as string} type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
            );
         case 'MPEG':
            return (
               <audio className="border rounded-lg size-120" controls>
                  <source src={valueInput as string} type="audio/mpeg" />
                  Your browser does not support the audio element.
               </audio>
            );
         case 'PDF':
            return (
               <iframe
                  className="border rounded-lg object-cover w-[680px] h-[400px]"
                  src={valueInput as string}
                  title="PDF Preview"
               />
            );
         default:
            return <div>File not valid (include PDF, Video, Audio)</div>;
      }
   };

   return (
      <div className="my-3 flex flex-col justify-start items-start w-full px-3 py-2 pb-3 border rounded-lg bg-slate-50 dark:bg-stone-950">
         <div className="flex flex-row justify-between items-center gap-3 w-full">
            <span className="text-md font-semibold">Upload</span>
         </div>

         <div className="flex flex-row gap-3 w-full mt-3">
            {isShowEdit ? (
               <div className="w-full">
                  <div className="flex w-full ">
                     <FileUploader
                        key={uploaderKey}
                        types={fileTypes}
                        name="file"
                        handleChange={handleFileChange}
                        className="w-full"
                     >
                        <div className="flex w-full items-center justify-center">
                           <div className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-large border-dashed border-gray-300 bg-gray-50 hover:border-gray-400 dark:border-gray-800 dark:bg-stone-950 dark:hover:border-gray-700 dark:hover:bg-stone-900">
                              <div className="flex flex-col items-center justify-center p-5 w-full bg-[#F1F1F1]">
                                 {valueInput ? (
                                    renderContent()
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
                                             d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                          />
                                       </svg>
                                       <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                          <span className="font-semibold">Click to upload</span> or
                                          drag and drop
                                       </p>
                                       <p className="text-xs text-gray-500 dark:text-gray-400">
                                          Audio, Video, or PDF
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
               <div className="items-center flex justify-center w-full">{renderContent()}</div>
            ) : (
               <div>Please upload a file</div>
            )}
         </div>
      </div>
   );
};

export default UploadFile;
