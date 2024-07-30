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
dotenv.config();

const Chapter = () => {
   const initialItemsChapter = [
      'Chapter 1: Getting started chapter',
      'Chapter 2: Basic',
      'Chapter 3: Practice',
      'Chapter 4: Test',
   ];

   const initialLessons: { [key: string]: string[] } = {
      'Chapter 1: Getting started chapter': ['Lesson 1: Introduction'],
      'Chapter 2: Basic': ['Lesson 1: Basics Reading', 'Lesson 2: Basics Writing'],
      'Chapter 3: Practice': [
         'Lesson 1: Exercises',
         'Lesson 2: Practice 1',
         'Lesson 3: Practice 2',
      ],
      'Chapter 4: Test': ['Lesson 1: Practice Test', 'Lesson 2: Final Test'],
   };

   const initialDescription: { [key: string]: string } = {
      'Chapter 1: Getting started chapter': 'This is the first chapter',
      'Chapter 2: Basic': 'This is the second chapter',
      'Chapter 3: Practice': 'This is the third chapter',
      'Chapter 4: Test': 'This is the fourth chapter',
   };

   const [items, setItems] = useState<string[]>(initialItemsChapter);
   const [lessons, setLessons] = useState<{ [key: string]: string[] }>(initialLessons);
   const [descriptions, setDescriptions] = useState<{ [key: string]: string }>(initialDescription);

   const [openChapters, setOpenChapters] = useState<string | null>(null);
   const [titleInput, setTitleInput] = useState('');
   const [descriptionInput, setDescriptionInput] = useState('');
   const [isEditTitle, setIsEditTitle] = useState<string | null>(null);
   const [isShowEdit, setIsShowEdit] = useState<string | null>(null);
   const [data, setData] = useState(null);

   const { isOpen, onOpenChange } = useDisclosure();

   const handleShowModalCreate = () => {
      onOpenChange();
   };

   const handleSaveChapter = (chapterName: string) => {
      setItems((prev) => [...prev, chapterName]);
      // setDescriptions((prev) => ({ ...prev, [chapterName]: description }));
      setLessons((prev) => ({ ...prev, [chapterName]: [] }));
   };

   const handleShowEdit = (item: string) => {
      setTitleInput(item);
      setDescriptionInput(descriptions[item] || '');
      setIsEditTitle((prev) => (prev === item ? null : item));
      setIsShowEdit((prev) => (prev === item ? null : item));
   };

   const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescriptionInput(e.target.value);
   };

   const handleDeleteItem = (item: string) => {
      setItems((prevItems) => prevItems.filter((i) => i !== item));
   };

   const handleDropdown = (item: string) => {
      setOpenChapters((prev) => (prev === item ? null : item));
   };

   const handleCancelEdit = () => {
      setIsEditTitle(null);
      setIsShowEdit(null);
   };

   const handleChangeTitleChapter = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitleInput(e.target.value);
   };

   const handleSaveEditChapter = (item: string) => {
      const newTitleChapter = titleInput;
      setItems((prevItems) => prevItems.map((i) => (i === item ? newTitleChapter : i)));

      setDescriptions((prevDescriptions) => ({
         ...prevDescriptions,
         [newTitleChapter]: descriptionInput,
      }));

      setLessons((prev) => {
         const { [item]: lessonsForItem, ...restLessons } = prev;
         return { ...restLessons, [newTitleChapter]: lessonsForItem };
      });

      setIsEditTitle(null);
      setIsShowEdit(null);
      setOpenChapters(newTitleChapter);
   };

   return (
      <div className="w-full p-2 shadow-md">
         <div className="m-2">
            <Reorder.Group
               className="flex flex-col gap-4 p-2"
               axis="y"
               onReorder={setItems}
               values={items}
            >
               {items.map((item) => (
                  <Reorder.Item
                     as="div"
                     id={item}
                     value={item}
                     key={item}
                     className={`flex flex-col gap-4 p-2
                        ${
                           openChapters === item
                              ? 'border-4 border-solid bg-[#F7F7F7] shadow-sm rounded-md'
                              : 'bg-white border-1 border-solid border-[#DBDBDB] rounded-md'
                        }`}
                  >
                     <Item
                        item={item}
                        handleDelete={handleDeleteItem}
                        handleEdit={() => handleShowEdit(item)}
                        handleDropdown={() => handleDropdown(item)}
                        type="chapter"
                        isEditTitle={isEditTitle === item}
                        handleChangeTitleChapter={handleChangeTitleChapter}
                     ></Item>
                     {openChapters === item && (
                        <div className="">
                           <div className="border border-gray-300 bg-white mb-2"></div>

                           <div className="flex flex-col mx-4">
                              <div className="mx-5">
                                 <div
                                    className={`flex flex-col p-2 ${
                                       isShowEdit === item ? 'gap-2' : 'gap-0'
                                    } border-1 border-solid rounded-md bg-[#F3F3F3]`}
                                 >
                                    <div className="flex flex-row gap-2 justify-between">
                                       <span className="text-md font-semibold">Description</span>
                                       {isShowEdit === item ? (
                                          <></>
                                       ) : (
                                          <Button
                                             onClick={() => handleShowEdit(item)}
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
                                    {isShowEdit === item ? (
                                       <Input
                                          onChange={handleChangeDescription}
                                          placeholder={'Enter chapter description'}
                                          variant={'faded'}
                                          className="w-full"
                                          value={descriptionInput}
                                       />
                                    ) : (
                                       <span className="text-sm">{descriptions[item]}</span>
                                    )}
                                 </div>
                                 <div className="border border-gray-300 bg-white mt-2"></div>
                              </div>

                              <Lesson
                                 chapter={item}
                                 lessons={lessons[item]}
                                 setLessons={setLessons}
                              />
                              <div className="m-2">
                                 {isShowEdit === item ? (
                                    <div className="flex flex-row gap-6 justify-end">
                                       <Button
                                          onClick={handleCancelEdit}
                                          variant={'light'}
                                          className="text-red-600"
                                       >
                                          Cancel
                                       </Button>
                                       <Button
                                          onClick={() => handleSaveEditChapter(item)}
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
