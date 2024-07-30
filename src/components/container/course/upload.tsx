'use client';

import { CiCloudOn } from 'react-icons/ci';
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

interface Props {
   value: string | null;
   isShowEdit: boolean;
   onFileUpload: (fileUrl: string, fileType: string) => void;
}

const UploadFile = ({ value, isShowEdit, onFileUpload }: Props) => {
   const fileTypes = ['MP3', 'MP4', 'PDF'];
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
            console.log('File URL: ', result);
         }
      };

      reader.readAsDataURL(file);
   };

   const renderContent = () => {
      switch (fileType) {
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
      <div className="flex flex-row gap-3 w-full mt-3 justify-center items-center">
         {isShowEdit ? (
            <div className="w-full ">
               <div className="flex w-full justify-center items-center">
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
                                    <CiCloudOn className="text-2xl" color="gray" />
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
            <div className="items-center flex justify-center w-full">
               {<div className="flex justify-center items-center">{renderContent()}</div>}
            </div>
         ) : (
            <div>Please upload a file</div>
         )}
      </div>
   );
};

export default UploadFile;
