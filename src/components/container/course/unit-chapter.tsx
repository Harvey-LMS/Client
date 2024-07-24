"use client";

import { useState } from "react";
import Lesson from "./unit-lesson";
import { Item } from "@/components/reorder/item-drag";
import { Reorder } from "framer-motion";
import { FaRegFilePdf } from "react-icons/fa";

const Chapter = () => {
  const initialItemsChapter = [
    "Chapter 1: Getting started chapter",
    "Chapter 2: Basic",
    "Chapter 3: Practice",
  ];
  const [items, setItems] = useState(initialItemsChapter);
  const [openChapters, setOpenChapters] = useState<string[]>([]);

  const [isShowEdit, setIsShowEdit] = useState<string | null>(null);

  // const handleShowEdit = (
  //   stateSetter: (prevState: React.SetStateAction<boolean>) => void
  // ) => {
  //   stateSetter((prevState: boolean) => !prevState);
  // };

  const handleShowEdit = (item: string) => {
    setIsShowEdit((prev) => (prev === item ? null : item));
  };

  const handleDeleteItem = (items: string) => {
    setItems((prevItems) => prevItems.filter((i) => i !== items));
  };

  const handleDropdown = (item: string) => {
    setOpenChapters((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
    console.log(openChapters);
  };

  return (
    <div className="w-full p-2">
      <div className="m-2">
        <Reorder.Group
          className="flex flex-col gap-4 p-2"
          axis="y"
          onReorder={setItems}
          values={items}
        >
          {items.map((item) => (
            <div
              key={item}
              className={`
                ${
                  openChapters.includes(item)
                    ? "flex flex-col gap-4"
                    : "flex flex-col gap-4 bg-gray-50 border-1 border-solid rounded-md p-2"
                }
              `}
            >
              <Item
                item={item}
                handleDelete={handleDeleteItem}
                handleEdit={() => handleShowEdit(item)}
                handleDropdown={() => handleDropdown(item)}
              />

              {openChapters.includes(item) && (
                <div>
                  <div className="ml-10">
                    <div className="flex flex-col">
                      <div className="flex flex-col p-2 gap-4 border-1 border-solid rounded-md bg-gray-50">
                        <span className="text-md font-semibold">
                          Description
                        </span>
                        <span className="text-sm">This is description</span>
                      </div>
                    </div>
                  </div>
                  <Lesson></Lesson>
                </div>
              )}
            </div>
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
};

export default Chapter;
