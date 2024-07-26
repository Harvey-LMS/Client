import React, { useState } from "react";
import { Item } from "@/components/reorder/item-drag";
import { Button, Input } from "@nextui-org/react";
import { Reorder } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoIosAdd, IoMdAddCircleOutline } from "react-icons/io";
import NotFound from "@/assets/404_Not_Found.svg";

const Lesson = () => {
  const [initialItems, setInitialItems] = useState<string[]>([
    "Lesson 1: Basic",
    "Lesson 2: Listening",
  ]);
  const [items, setItems] = useState(initialItems);
  const [contentInput, setContentInput] = useState("");
  const [content, setContent] = useState(
    "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask,  Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to"
  );
  const [lessonName, setLessonName] = useState("");

  const [isShowEdit, setIsShowEdit] = useState<string | null>(null);
  // const [openLessons, setOpenLessons] = useState<string[]>([]);
  const [openLessons, setOpenLessons] = useState<string | null>(null);
  const [isEditTitle, setIsEditTitle] = useState<string | null>(null);

  const [isShowCreate, setIsShowCreate] = useState(false);

  // const handleShowEdit = (
  //   stateSetter: (prevState: React.SetStateAction<boolean>) => void
  // ) => {
  //   stateSetter((prevState: boolean) => !prevState);
  // };

  const handleShowEdit = (item: string) => {
    setIsEditTitle(item);
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
    // setOpenLessons((prev) =>
    //   prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    // );
    setOpenLessons((prev) => (prev === item ? null : item));
  };

  const handleCancelEdit = () => {
    setIsShowEdit(null);
  };

  const handleChangeLesson = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLessonName(e.target.value);
  };

  const handleCreateLesson = () => {
    setItems([...items, lessonName]);
  };

  const handleChangeTitleChapter = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {};

  return (
    <div className="flex flex-col w-full">
      <div className="m-2">
        <Reorder.Group
          className="flex flex-col gap-4 p-2"
          axis="y"
          onReorder={setItems}
          values={items}
        >
          {items.map((item) => (
            <div
              className={`${
                openLessons === item
                  ? "border-4 border-primary border-solid rounded-md -m-1"
                  : ""
              }`}
              key={item}
            >
              <Item
                item={item}
                handleDelete={handleDeleteItem}
                handleEdit={() => handleShowEdit(item)}
                handleDropdown={() => handleDropdown(item)}
                type="lesson"
                isEditTitle={isEditTitle === item}
                handleChangeTitleChapter={handleChangeTitleChapter}
              />
              {openLessons === item && (
                <div>
                  <div className="border border-gray-300 bg-white m-2"></div>
                  <div className="p-2">
                    <div className="my-2">
                      <div className="flex flex-col gap-0">
                        <div className="flex flex-col gap-4 bg-[#F3F3F3] border-1 border-solid rounded-md p-2">
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

                    <div className="my-2">
                      {isShowEdit === item ? (
                        <div className="flex flex-col gap-4 bg-[#F3F3F3] border-1 border-solid rounded-md p-2">
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

                    <div className="my-2">
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
                </div>
              )}
            </div>
          ))}
        </Reorder.Group>
        <div className="flex items-center justify-center">
          <Button
            onClick={() => setIsShowCreate(!isShowCreate)}
            color="primary"
            className="flex flex-row items-center justify-center"
          >
            <IoIosAdd className="text-3xl" />
            <span>Add lesson</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
