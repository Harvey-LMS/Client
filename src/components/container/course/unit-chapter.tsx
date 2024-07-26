"use client";

import { useState } from "react";
import Lesson from "./unit-lesson";
import { Item } from "@/components/reorder/item-drag";
import { Reorder } from "framer-motion";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";

const Chapter = () => {
  const initialItemsChapter = [
    "Chapter 1: Getting started chapter",
    "Chapter 2: Basic",
    "Chapter 3: Practice",
    "Chapter 4: Test",
  ];
  const initialDescription: { [key: string]: string } = {
    "Chapter 1: Getting started chapter": "This is the first chapter",
    "Chapter 2: Basic": "This is the second chapter",
    "Chapter 3: Practice": "This is the third chapter",
    "Chapter 4: Test": "This is the fourth chapter",
  };

  const [items, setItems] = useState(initialItemsChapter);
  const [descriptions, setDescriptions] = useState(initialDescription);

  // const [openChapters, setOpenChapters] = useState<string[]>([]);
  const [openChapters, setOpenChapters] = useState<string | null>(null);

  const [titleInput, setTitleInput] = useState("");

  const [descriptionInput, setDescriptionInput] = useState("");
  const [description, setDescription] = useState("This is description");

  const [isEditTitle, setIsEditTitle] = useState<string | null>(null);
  const [isShowEdit, setIsShowEdit] = useState<string | null>(null);

  const handleShowEdit = (item: string) => {
    setTitleInput(item);
    setDescriptionInput(descriptions[item] || "");
    if (isEditTitle === item) {
      setIsEditTitle(null);
      setIsShowEdit((prev) => (prev === item ? null : item));
      // setIsShowEdit(null)
    } else {
      setIsEditTitle(item);
      setIsShowEdit(item);
    }
  };

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionInput(e.target.value);
  };

  const handleDeleteItem = (items: string) => {
    setItems((prevItems) => prevItems.filter((i) => i !== items));
  };

  const handleDropdown = (item: string) => {
    // setOpenChapters((prev) =>
    //   prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    // );
    setOpenChapters((prev) => (prev === item ? null : item));
  };

  const handleCancelEdit = (item: string) => {
    handleShowEdit(item);
  };

  const handleChangeTitleChapter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(e.target.value);
  };

  const handleSaveEditChapter = (item: string) => {
    setDescription(descriptionInput);
    setItems((prevItems) =>
      prevItems.map((i) => (i === item ? titleInput : i))
    );
    setDescriptions((prevDescriptions) => ({
      ...prevDescriptions,
      [titleInput]: descriptionInput,
    }));
    handleShowEdit(item);
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
              className={`flex flex-col gap-4 p-2
                ${
                  openChapters === item
                    ? "border-4 border-solid bg-[#F7F7F7] shadow-sm rounded-md"
                    : "bg-white border-1 border-solid border-[#DBDBDB] rounded-md"
                }
              `}
            >
              <Item
                item={item}
                handleDelete={handleDeleteItem}
                handleEdit={() => handleShowEdit(item)}
                handleDropdown={() => handleDropdown(item)}
                type="chapter"
                isEditTitle={isEditTitle === item}
                handleChangeTitleChapter={handleChangeTitleChapter}
              />

              {openChapters === item && (
                <div className="">
                  <div className="border border-gray-300 bg-white mb-2"></div>

                  <div className="flex flex-col mx-4">
                    <div className="mx-5">
                      <div className="flex flex-col p-2 gap-4 border-1 border-solid rounded-md bg-[#F3F3F3]">
                        <span className="text-md font-semibold">
                          Description
                        </span>
                        {isShowEdit === item ? (
                          <Input
                            onChange={handleChangeDescription}
                            placeholder={"Enter to chapter description"}
                            variant={"faded"}
                            className="w-full"
                          />
                        ) : (
                          <span className="text-sm">{descriptions[item]}</span>
                        )}
                      </div>
                      <div className="border border-gray-300 bg-white mt-2"></div>
                    </div>

                    <Lesson></Lesson>
                    <div className="m-2">
                      {isShowEdit === item ? (
                        <div className="flex flex-row gap-6 justify-end">
                          <Button
                            onClick={() => handleCancelEdit(item)}
                            // onClick={() => handleShowDropdown(item)}
                            variant={"light"}
                            className="text-red-600"
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={() => handleSaveEditChapter(item)}
                            color={"primary"}
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
            </div>
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
};

export default Chapter;
