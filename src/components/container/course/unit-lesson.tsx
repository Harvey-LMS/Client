"use client";

import { Item } from "@/components/reorder/item-drag";
import { Button, Input } from "@nextui-org/react";
import { Reorder } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";

import NotFound from "@/assets/404_Not_Found.svg";

const Lesson = () => {
  const initialItemsLesson = ["Getting started"];
  const [items, setItems] = useState(initialItemsLesson);

  const [isShowEdit, setIsShowEdit] = useState(false);

  const [contentInput, setContentInput] = useState("");
  const [content, setContent] = useState(
    "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask,  Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to"
  );

  const [isShowEditLesson, setIsShowEditLesson] = useState(false);

  const handleShowEdit = (
    stateSetter: (prevState: React.SetStateAction<boolean>) => void
  ) => {
    stateSetter((prevState: boolean) => !prevState);
  };
  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContentInput(e.target.value);
  };
  const handleSaveContent = () => {
    setContent(contentInput);
    setIsShowEdit(false);
  };

  const handleDeleteItem = (item: string) => {
    setItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  const handleDropdown = () => {
    setIsShowEditLesson(!isShowEditLesson);
  };

  return (
    <div className="flex flex-col w-full pl-6">
      <div className="m-2">
        <Reorder.Group
          className="flex flex-col gap-4 p-2"
          axis="y"
          onReorder={setItems}
          values={items}
        >
          {items.map((item) => (
            <div>
              <Item
                key={item}
                item={item}
                handleDelete={handleDeleteItem}
                handleEdit={() => handleShowEdit(setIsShowEdit)}
                handleDropdown={handleDropdown}
              />
              {isShowEditLesson && (
                <div className="p-2">
                  <div className="m-2">
                    <div className="flex flex-col gap-0">
                      <div className="flex flex-col gap-4">
                        <span className="text-md font-semibold">Content</span>
                        {isShowEdit ? (
                          <Input
                            onChange={handleChangeContent}
                            placeholder={"Enter to lesson content"}
                            variant={"faded"}
                            className="w-full"
                          ></Input>
                        ) : (
                          <span className="text-sm">{content}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="m-2">
                    {isShowEdit ? (
                      <div className="flex flex-col gap-4">
                        <span className="text-md font-semibold">Upload</span>
                        <Link
                          href=""
                          className="w-full h-64 border-2 border-gray-700 p-4 rounded-lg bg-white flex justify-center items-center"
                        >
                          <IoMdAddCircleOutline className="w-10 h-10" />
                        </Link>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4">
                        <span className="text-md font-semibold">Upload</span>
                        <Image
                          src={NotFound}
                          alt={"img"}
                          width={400}
                          height={400}
                        />
                      </div>
                    )}
                  </div>

                  <div className="m-2">
                    {isShowEdit ? (
                      <div className="flex flex-row gap-6 justify-end">
                        <Button
                          onClick={() => setIsShowEdit(false)}
                          variant={"light"}
                          className="text-red-600"
                        >
                          Cancel
                        </Button>
                        <Button onClick={handleSaveContent} color={"primary"}>
                          Save
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-row gap-6 justify-end"></div>
                    )}
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

export default Lesson;
