"use client";

import { Button } from "@nextui-org/react";
import { Reorder } from "framer-motion";

import { BiCustomize } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";

import { useEffect, useState } from "react";
import { Item } from "@/components/reorder/item-drag";
import { Input, Textarea } from "@nextui-org/input";
import { useDisclosure } from "@nextui-org/react";
import ModalCreate from "@/components/modal-create";
import { IoIosAdd } from "react-icons/io";

import axios from "axios";

const CreateChapterPage = () => {
  // const chapterName = localStorage.getItem("items")
  //   ? JSON.parse(localStorage.getItem("items") || "[]")
  //   : "";

  const [initialItems, setInitialItems] = useState<string[]>(["Introduction"]);
  const [items, setItems] = useState(initialItems);

  const [isShowTitle, setIsShowTitle] = useState(false);
  const [isShowDescription, setIsShowDescription] = useState(false);

  const [titleInput, setTitleInput] = useState("");
  // const [title, setTitle] = useState<string | undefined>(chapterName);
  const [title, setTitle] = useState<string | undefined>("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [description, setDescription] = useState("This is description");

  const { isOpen, onOpenChange } = useDisclosure();

  const [data, setData] = useState(null);

  const handleShowModalCreate = () => {
    onOpenChange();
  };

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

  const handleSaveLesson = (lessonName: string) => {
    setItems([...items, lessonName]);
  };
  const handleDeleteItem = (item: string) => {
    setItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  useEffect(() => {
    const apiEndpoint = process.env.API_COURSE_URL || "";
    const getUser = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setData(response.data);
       
        console.log("data", data);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);

  return (
    <div className="flex flex-col gap-0 w-full">
      <div className="flex flex-col gap-2 m-6">
        <div>
          <span className="text-2xl font-bold">Chapter Details</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="">Complete all fields (0/3)</span>
          <Button variant={"light"} disabled={true}>
            Not active
          </Button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-full">
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
                      variant={"light"}
                    >
                      <span>Cancel</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleShowEdit(setIsShowTitle)}
                      className="flex flex-row gap-2"
                      variant={"light"}
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
                    <Button
                      color={"primary"}
                      onClick={handleSaveTitle}
                      className="w-20"
                    >
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
                      variant={"light"}
                    >
                      <span>Cancel</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleShowEdit(setIsShowDescription)}
                      className="flex flex-row gap-2"
                      variant={"light"}
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
                    <Button
                      color={"primary"}
                      onClick={handleSaveDescription}
                      className="w-20"
                    >
                      Save
                    </Button>
                  </div>
                ) : (
                  <span className="text-sm">{description}</span>
                )}
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-1 border rounded-lg shadow-lg p-4 border-solid m-4">
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
                      variant={"light"}
                    >
                      <span>Cancel</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleShowEdit(setIsShowAccessSetting)}
                      className="flex flex-row gap-2"
                      variant={"light"}
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
          </div> */}
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-1 border rounded-lg shadow-lg p-4 border-solid m-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <CiViewList className="w-10 h-10" />
                  <span className="flex justify-center items-center text-2xl font-semibold">
                    Option lesson
                  </span>
                </div>
                <div>
                  <Button color={"primary"} onPress={handleShowModalCreate}>
                    <IoIosAdd />
                    <span>Create</span>
                    <ModalCreate
                      isOpen={isOpen}
                      onOpenChange={onOpenChange}
                      onSaveLesson={handleSaveLesson}
                      nameCreate={"Lesson"}
                    ></ModalCreate>
                  </Button>
                </div>
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
                  <Item
                    key={item}
                    item={item}
                    handleDelete={handleDeleteItem}
                  />
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
