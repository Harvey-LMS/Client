import React, { useState } from "react";
import { Item } from "@/components/reorder/item-drag";
import { Button, Input } from "@nextui-org/react";
import { Reorder } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoMdAddCircleOutline } from "react-icons/io";
import NotFound from "@/assets/404_Not_Found.svg";

const Lesson = () => {
  const initialItemsLesson = [
    "Lesson 1: Getting started",
    "Lesson 2: Listening",
    "Lesson 3: Reading",
    "Lesson 4: Practice",
  ];
  const [items, setItems] = useState(initialItemsLesson);
  const [isShowEdit, setIsShowEdit] = useState<string | null>(null);
  const [contentInput, setContentInput] = useState("");
  const [content, setContent] = useState("This is content");
  const [openLessons, setOpenLessons] = useState<string[]>([]);

  // const handleShowEdit = (
  //   stateSetter: (prevState: React.SetStateAction<boolean>) => void
  // ) => {
  //   stateSetter((prevState: boolean) => !prevState);
  // };

  const handleShowEdit = (item: string) => {
    setIsShowEdit((prev) => (prev === item ? null : item));
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContentInput(e.target.value);
  };

  const handleSaveContent = (item: string) => {
    setContent(contentInput);
    setIsShowEdit((prev) => (prev === item ? null : item));
  };

  const handleDeleteItem = (item: string) => {
    setItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  const handleDropdown = (item: string) => {
    setOpenLessons((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleCancelEdit = () => {
    setIsShowEdit(null);
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
            <div key={item}>
              <Item
                item={item}
                handleDelete={handleDeleteItem}
                handleEdit={() => handleShowEdit(item)}
                handleDropdown={() => handleDropdown(item)}
              />
              {openLessons.includes(item) && (
                <div className="p-2">
                  <div className="m-2">
                    <div className="flex flex-col gap-0">
                      <div className="flex flex-col gap-4 bg-gray-50 border-1 border-solid rounded-md p-2">
                        <span className="text-md font-semibold">Content</span>
                        {isShowEdit === item ? (
                          <Input
                            onChange={handleChangeContent}
                            placeholder={"Enter to lesson content"}
                            variant={"faded"}
                            className="w-full"
                          />
                        ) : (
                          <span className="text-sm">{content}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="m-2">
                    {isShowEdit === item ? (
                      <div className="flex flex-col gap-4 bg-gray-50 border-1 border-solid rounded-md p-2">
                        <span className="text-md font-semibold">Upload</span>
                        <Link
                          href=""
                          className="w-full h-64 border-2 border-gray-700 p-4 rounded-lg bg-white flex justify-center items-center"
                        >
                          <IoMdAddCircleOutline className="w-10 h-10" />
                        </Link>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4 bg-gray-50 border-1 border-solid rounded-md p-2">
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
                    {isShowEdit === item ? (
                      <div className="flex flex-row gap-6 justify-end">
                        <Button
                          onClick={handleCancelEdit}
                          // onClick={() => handleShowDropdown(item)}
                          variant={"light"}
                          className="text-red-600"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={() => handleSaveContent(item)}
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
              )}
            </div>
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
};

export default Lesson;
