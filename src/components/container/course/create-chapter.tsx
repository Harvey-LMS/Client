"use client";

import { Button } from "@/components/ui/button";
import { Reorder } from "framer-motion";

import { BiCustomize } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

import { useState } from "react";
import { Item } from "@/components/reorder/item-drag";
import { MdPreview } from "react-icons/md";
import { Input, Textarea } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/react";

const CreateChapterPage = () => {
  const initialItems = [
    "Listening P1",
    "Listening P2",
    "Practice 1",
    "Practice 2",
  ];
  const [items, setItems] = useState(initialItems);

  const [isShowTitle, setIsShowTitle] = useState(false);
  const [isShowDescription, setIsShowDescription] = useState(false);
  const [isShowAccessSetting, setIsShowAccessSetting] = useState(false);

  const [titleInput, setTitleInput] = useState("");
  const [title, setTitle] = useState("This is title");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [description, setDescription] = useState("This is description");

  const handleShowEdit = (
    stateSetter: (prevState: React.SetStateAction<boolean>) => void
  ) => {
    stateSetter((prevState: boolean) => !prevState);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(e.target.value);
  };
  const handleSaveTitle = () => {
    setTitle(titleInput);
    setIsShowTitle(false);
  };

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionInput(e.target.value);
  };
  const handleSaveDescription = () => {
    setDescription(descriptionInput);
    setIsShowDescription(false);
  };

  return (
    <div className="flex flex-col gap-0 w-full">
      <div className="flex flex-col gap-2 m-6">
        <div>
          <span className="text-2xl font-bold">Chapter Details</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="">Complete all fields (0/3)</span>
          <Button variant={"ghost"} disabled={true}>
            Not active
          </Button>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="w-1/2">
          <div className="flex flex-col gap-1 border rounded-lg shadow-lg p-4 border-solid m-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-1">
                <BiCustomize className="w-10 h-10" />
                <span className="flex justify-center items-center text-2xl font-semibold">
                  Customize your
                </span>
              </div>
              <div className="border border-gray-200 bg-white"></div>
            </div>

            <div className="m-2">
              <div className="flex flex-col gap-0">
                <div className="flex flex-row justify-between">
                  <span className="text-md font-semibold">Chapter title</span>
                  {isShowTitle ? (
                    <Button
                      onClick={() => handleShowEdit(setIsShowTitle)}
                      className="flex flex-row gap-2"
                      variant={"ghost"}
                    >
                      <span>Cancel</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleShowEdit(setIsShowTitle)}
                      className="flex flex-row gap-2"
                      variant={"ghost"}
                    >
                      <div>
                        <FaEdit />
                      </div>
                      <span>Edit title</span>
                    </Button>
                  )}
                </div>
                {isShowTitle ? (
                  <div className="flex flex-col gap-2">
                    <Input
                      variant={"bordered"}
                      className="w-full"
                      onChange={handleChangeTitle}
                      placeholder="Enter to course title"
                    ></Input>
                    <Button onClick={handleSaveTitle} className="w-20">
                      Save
                    </Button>
                  </div>
                ) : (
                  <span className="text-sm">{title}</span>
                )}
              </div>
            </div>

            <div className="m-2">
              <div className="flex flex-col gap-0">
                <div className="flex flex-row justify-between">
                  <span className="text-md font-semibold">
                    Chapter description
                  </span>
                  {isShowDescription ? (
                    <Button
                      onClick={() => handleShowEdit(setIsShowDescription)}
                      className="flex flex-row gap-2"
                      variant={"ghost"}
                    >
                      <span>Cancel</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleShowEdit(setIsShowDescription)}
                      className="flex flex-row gap-2"
                      variant={"ghost"}
                    >
                      <div>
                        <FaEdit />
                      </div>
                      <span>Edit description</span>
                    </Button>
                  )}
                </div>
                {isShowDescription ? (
                  <div className="flex flex-col gap-2">
                    <Textarea
                      variant={"bordered"}
                      className="w-full"
                      onChange={handleChangeDescription}
                      placeholder="Enter to course description"
                    ></Textarea>
                    <Button onClick={handleSaveDescription} className="w-20">
                      Save
                    </Button>
                  </div>
                ) : (
                  <span className="text-sm">{description}</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 border rounded-lg shadow-lg p-4 border-solid m-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-1">
                <MdPreview className="w-10 h-10" />
                <span className="flex justify-center items-center text-2xl font-semibold">
                  Access settings
                </span>
              </div>
              <div className="border border-gray-200 bg-white"></div>
            </div>

            <div className="m-2">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                  <span className="text-md font-semibold">
                    Free Preview Chapter
                  </span>
                  {isShowAccessSetting ? (
                    <Button
                      onClick={() => handleShowEdit(setIsShowAccessSetting)}
                      className="flex flex-row gap-2"
                      variant={"ghost"}
                    >
                      <span>Cancel</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleShowEdit(setIsShowAccessSetting)}
                      className="flex flex-row gap-2"
                      variant={"ghost"}
                    >
                      <div>
                        <FaEdit />
                      </div>
                      <span>Edit access setting</span>
                    </Button>
                  )}
                </div>
                {isShowAccessSetting ? (
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-0">
                      <Checkbox size="sm" />
                      <span className="text-sm opacity-80 italic">
                        Check this box if you want to make this chapter free for
                        preview
                      </span>
                    </div>
                    <Button className="w-20">Save</Button>
                  </div>
                ) : (
                  <span className="text-sm opacity-70 italic">
                    This chapter is not for free preview
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col gap-1 border rounded-lg shadow-lg p-4 border-solid m-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-1">
                <BiCustomize className="w-10 h-10" />
                <span className="flex justify-center items-center text-2xl font-semibold">
                  Option chapter
                </span>
              </div>
              <div className="border border-gray-200 bg-white"></div>
            </div>

            <div className="m-2">
              <Reorder.Group
                className=" flex flex-col gap-4"
                axis="y"
                onReorder={setItems}
                values={items}
              >
                {items.map((item) => (
                  <Item key={item} item={item} />
                ))}
              </Reorder.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateChapterPage;