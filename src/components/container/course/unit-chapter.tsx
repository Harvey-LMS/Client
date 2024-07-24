"use client";

import { useState } from "react";
import Lesson from "./unit-lesson";
import { Item } from "@/components/reorder/item-drag";
import { Reorder } from "framer-motion";
import { Input } from "@nextui-org/input";

const Chapter = () => {
  const initialItemsChapter = ["Chapter 1: Getting started chapter"];
  const [items, setItems] = useState(initialItemsChapter);

  const [isShowEdit, setIsShowEdit] = useState(false);

  const [descriptionInput, setDescriptionInput] = useState("");
  const [description, setDescription] = useState("This is content");

  const [isShowEditLesson, setIsShowEditLesson] = useState(false);

  const handleShowEdit = (
    stateSetter: (prevState: React.SetStateAction<boolean>) => void
  ) => {
    stateSetter((prevState: boolean) => !prevState);
  };
  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionInput(e.target.value);
  };
  const handleSaveDescription = () => {
    setDescription(descriptionInput);
    setIsShowEdit(false);
  };

  const handleDeleteItem = (item: string) => {
    setItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  const handleDropdown = () => {
    setIsShowEditLesson(!isShowEditLesson);
  };

  return (
    <div className="w-full p-2">
      <div>
        <Reorder.Group
          className="flex flex-col gap-4 p-2"
          axis="y"
          onReorder={setItems}
          values={items}
        >
          {items.map((item) => (
            <div className="flex flex-col gap-4">
              <Item
                key={item}
                item={item}
                handleDelete={handleDeleteItem}
                handleEdit={() => handleShowEdit(setIsShowEdit)}
                handleDropdown={handleDropdown}
              />
              <div className="ml-10">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-4">
                    <span className="text-md font-semibold">Description</span>
                    <span className="text-sm">This is description</span>
                  </div>
                </div>
              </div>
              <Lesson></Lesson>
            </div>
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
};

export default Chapter;
