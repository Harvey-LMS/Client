'use client';

import * as React from 'react';
import { useMotionValue, Reorder, useDragControls } from 'framer-motion';
import { useRaisedShadow } from '@/components/reorder/use-raised-shadow';
import { ReorderIcon } from '@/components/reorder/icon';
import { Button, useDisclosure } from '@nextui-org/react';

import { MdDeleteOutline, MdOutlineAudioFile, MdOutlineEdit } from 'react-icons/md';
import { FaRegFilePdf, FaVideo } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import { ImFileEmpty } from 'react-icons/im';

import ConfirmDeleteModal from '../container/course/modal-confirm';
import { IChapter, ILesson } from '@/types/course';

interface Props {
   item: IChapter | ILesson;
   handleDelete: (itemId: string) => void;
   handleDropdown: () => void;
   type: string;
   isDropdown: boolean;
   fileType: string;
}

export const Item = ({ item, handleDelete, handleDropdown, type, isDropdown, fileType }: Props) => {
   const y = useMotionValue(0);
   const boxShadow = useRaisedShadow(y);
   const dragControls = useDragControls();

   const { isOpen, onOpenChange } = useDisclosure();

   const handleShowModalConfirm = () => {
      onOpenChange();
   };

   // const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
   //    setValue(e.target.value);
   //    handleChangeTitleChapter(e);
   // };

   return (
      <div className="flex flex-row">
         <div className="group flex flex-row gap-2 w-full h-6">
            <div onClick={handleDropdown} className="group w-full flex justify-center items-center">
               <Reorder.Item
                  className="w-full"
                  value={item}
                  style={{ boxShadow, y }}
                  dragListener={false}
                  dragControls={dragControls}
               >
                  <div className="flex flex-row justify-between">
                     <div className="flex flex-col w-full">
                        <div className="flex flex-row gap-4 items-center w-full">
                           <div className=" flex justify-center items-center">
                              {type === 'chapter' ? (
                                 <div onClick={handleDropdown} className="">
                                    <IoIosArrowDown className="text-xl" />
                                 </div>
                              ) : (
                                 <div>
                                    <ReorderIcon dragControls={dragControls} />
                                 </div>
                              )}
                           </div>

                           {type !== 'chapter' && fileType === 'MP4' && (
                              <FaVideo className="w-7 h-5" />
                           )}
                           {type !== 'chapter' && fileType === 'PDF' && (
                              <FaRegFilePdf className="w-7 h-5" />
                           )}
                           {type !== 'chapter' && fileType === 'MPEG' && (
                              <MdOutlineAudioFile className="w-7 h-5" />
                           )}
                           {type !== 'chapter' && fileType === '' && (
                              <ImFileEmpty className="w-7 h-5" />
                           )}
                           <div className="flex flex-row justify-between w-full min-h-10">
                              <span
                                 className={`flex justify-center items-center select-none ${
                                    type === 'chapter' ? 'text-md font-semibold ' : 'text-sm'
                                 }`}
                              >
                                 {type === 'chapter'
                                    ? `Chapter ${item.orderIndex}: ` + item.title
                                    : `Lesson ${item.orderIndex}: ` + item.title}
                              </span>
                              {type === 'chapter' ? (
                                 <div className="flex flex-row gap-1 justify-center items-center">
                                    <Button
                                       variant={'light'}
                                       className="min-w-10 h-2/3 p-0"
                                       onPress={handleShowModalConfirm}
                                    >
                                       <MdDeleteOutline className="text-2xl" />
                                       <ConfirmDeleteModal
                                          isOpen={isOpen}
                                          onOpenChange={onOpenChange}
                                          onConfirmDelete={() => handleDelete(item.id.toString())}
                                       ></ConfirmDeleteModal>
                                    </Button>
                                    <ReorderIcon dragControls={dragControls} />
                                 </div>
                              ) : (
                                 <div className="flex flex-row gap-1 justify-center items-center">
                                    <Button
                                       variant={'light'}
                                       className="min-w-10 h-2/3 p-0"
                                       onPress={handleShowModalConfirm}
                                    >
                                       <MdDeleteOutline className="text-2xl" />
                                       <ConfirmDeleteModal
                                          isOpen={isOpen}
                                          onOpenChange={onOpenChange}
                                          onConfirmDelete={() => handleDelete(item.id.toString())}
                                       ></ConfirmDeleteModal>
                                    </Button>
                                    <Button
                                       variant={'light'}
                                       onPress={handleDropdown}
                                       className="min-w-10 h-2/3 p-0"
                                    >
                                       <IoIosArrowDown className="" size={'sm'} />
                                    </Button>
                                 </div>
                              )}
                           </div>
                        </div>
                        {type === 'chapter' && isDropdown && (
                           <div className="border border-gray-300 bg-white mb-2 h-2/3"></div>
                        )}
                     </div>
                  </div>
               </Reorder.Item>
            </div>
         </div>
      </div>
   );
};
