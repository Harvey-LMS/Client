"use client";

import { Button, useDisclosure } from "@nextui-org/react";
import { Reorder } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { BiCustomize } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { IoIosAdd, IoIosPricetags, IoMdAddCircleOutline } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { useState } from "react";
import { Item } from "@/components/reorder/item-drag";
import { MdOutlineSource } from "react-icons/md";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import { FiTrash } from "react-icons/fi";
import ModalCreate from "@/components/modal-create";

const CreateCoursePage = () => {
  const [initialItems, setInitialItems] = useState<string[]>(["Chapter 0"]);
  const [items, setItems] = useState(initialItems);

  const [isShowTitle, setIsShowTitle] = useState(false);
  const [isShowDescription, setIsShowDescription] = useState(false);
  const [ísShowPrice, setIsShowPrice] = useState(false);
  const [isShowDiscount, setIsShowDiscount] = useState(false);
  const [isShowTags, setIsShowTags] = useState(false);
  const [isShowLanguage, setIsShowLanguage] = useState(false);
  const [isShowLevel, setIsShowLevel] = useState(false);
  const [isShowCategory, setIsShowCategory] = useState(false);

  const [titleInput, setTitleInput] = useState("");
  const [title, setTitle] = useState("This is title");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [description, setDescription] = useState("This is description");
  const [priceInput, setPriceInput] = useState("");
  const [price, setPrice] = useState(32);
  const [discountInput, setDiscountInput] = useState("");
  const [discount, setDiscount] = useState(32);
  const [languageInput, setLanguageInput] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [levelInput, setLevelInput] = useState("");
  const [level, setLevel] = useState("Easy");

  const [listLanguage, setListLanguage] = useState<string[]>(["English"]);
  const [listCategory, setListCategory] = useState<string[]>(["TOEIC"]);

  const { isOpen, onOpenChange } = useDisclosure();

  const handleShowModalCreate = () => {
    onOpenChange();
  };
  const handleSaveLesson = (lessonName: string) => {
    setItems([...items, lessonName]);
    // localStorage.setItem("items", JSON.stringify([...items, lessonName]));
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

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceInput(e.target.value);
  };
  const handleSavePrice = () => {
    setPrice(Number.parseInt(priceInput));
    setIsShowPrice(false);
  };

  const handleChangeDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountInput(e.target.value);
  };
  const handleSaveDiscount = () => {
    setDiscount(Number.parseInt(discountInput));
    setIsShowDiscount(false);
  };

  const handleChangeTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagsInput(e.target.value);
  };

  const handleSaveTags = () => {};

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageInput(e.target.value);
  };

  const handleSaveLanguage = () => {
    setListLanguage((prevList) => [...prevList, languageInput]);
    setIsShowLanguage(false);
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryInput(e.target.value);
  };

  const handleSaveCategory = () => {
    setListCategory((prevList) => [...prevList, categoryInput]);
    setIsShowCategory(false);
  };

  const handleChangeLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevelInput(e.target.value);
  };
  const handleSaveLevel = () => {
    setLevel(levelInput);
    setIsShowLevel(false);
  };

  const handleDropLanguage = (indexRemove: number) => {
    setListLanguage((prevList) =>
      prevList.filter((_, index) => index !== indexRemove)
    );
  };

  const handleDropCategory = (indexRemove: number) => {
    setListCategory((prevList) =>
      prevList.filter((_, index) => index !== indexRemove)
    );
  };

  const handleDeleteItem = (item: string) => {
    setItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  return (
    <div className="flex flex-col gap-0 w-full">
      <div className="flex flex-col gap-2 m-6">
        <div>
          <span className="text-2xl font-bold">Create Course</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="">Complete all fields (0/6)</span>
          <Button variant={"light"} disabled={true}>
            Not active
          </Button>
        </div>
      </div>
      <div className="flex flex-row">
        {/* Left */}
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
                  <span className="text-md font-semibold">Courses title</span>
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
                      placeholder={"Enter to course title"}
                      variant={"bordered"}
                      className="w-full"
                      onChange={handleChangeTitle}
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
                    Courses description
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

            <div className="m-2">
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <span className="text-md font-semibold">
                    Courses thumbnail
                  </span>
                </div>
                <Link
                  href=""
                  className="h-64 border-2 border-gray-200 p-4 rounded-lg bg-white flex justify-center items-center"
                >
                  <IoMdAddCircleOutline className="w-10 h-10" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 border rounded-lg shadow-lg p-4 border-solid m-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-1">
                <BiCustomize className="w-10 h-10" />
                <span className="flex justify-center items-center text-2xl font-semibold">
                  Option your
                </span>
              </div>
              <div className="border border-gray-200 bg-white"></div>
            </div>

            <div className="m-2">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                  <span className="text-md font-semibold">Courses tags</span>
                  {isShowTags ? (
                    <Button
                      onClick={() => handleShowEdit(setIsShowTags)}
                      className="flex flex-row gap-2"
                      variant={"light"}
                    >
                      <span>Cancel</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleShowEdit(setIsShowTags)}
                      className="flex flex-row gap-2"
                      variant={"light"}
                    >
                      <div>
                        <FaEdit />
                      </div>
                      <span>Edit tags</span>
                    </Button>
                  )}
                </div>
                {isShowTags ? (
                  <div className="flex flex-col gap-2">
                    <Input
                      variant={"bordered"}
                      className="w-full"
                      onChange={handleChangeTags}
                      placeholder="Enter to course tags"
                    ></Input>
                    <Button
                      color={"primary"}
                      onClick={handleSaveTags}
                      className="w-20"
                    >
                      Save
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-row gap-1">
                    {/* {listLanguage.map((item: string, index: number) => (
                      <div
                        key={index}
                        className="flex flex-row justify-between items-center pl-2 border border-gray-300 w-1/5 rounded-lg"
                      >
                        <span className="text-md">{item}</span>
                        <Button
                          onClick={() => handleDropLanguage(index)}
                          variant={"light"}
                        >
                          <FiTrash />
                        </Button>
                      </div>
                    ))} */}
                  </div>
                )}
              </div>
            </div>

            <div className="m-2">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                  <span className="text-md font-semibold">
                    Courses language
                  </span>
                  {isShowLanguage ? (
                    <Button
                      onClick={() => handleShowEdit(setIsShowLanguage)}
                      className="flex flex-row gap-2"
                      variant={"light"}
                    >
                      <span>Cancel</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleShowEdit(setIsShowLanguage)}
                      className="flex flex-row gap-2"
                      variant={"light"}
                    >
                      <div>
                        <FaEdit />
                      </div>
                      <span>Edit language</span>
                    </Button>
                  )}
                </div>
                {isShowLanguage ? (
                  <div className="flex flex-col gap-2">
                    <Select
                      onChange={handleChangeLanguage}
                      label="Select a language"
                      className="max-w-xs"
                    >
                      <SelectItem key={"Vietnamese"}>Vietnamese</SelectItem>
                      <SelectItem key={"France"}>France</SelectItem>
                      <SelectItem key={"Chinese"}>Chinese</SelectItem>
                    </Select>
                    <Button
                      color={"primary"}
                      onClick={handleSaveLanguage}
                      className="w-20"
                    >
                      Save
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-row gap-1">
                    {listLanguage.map((item: string, index: number) => (
                      <div
                        key={index}
                        className="flex flex-row justify-between items-center pl-2 border border-gray-300 w-1/5 rounded-lg"
                      >
                        <span className="text-md">{item}</span>
                        <Button
                          onClick={() => handleDropLanguage(index)}
                          variant={"light"}
                        >
                          <FiTrash />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="m-2">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                  <span className="text-md font-semibold">
                    Courses category
                  </span>
                  {isShowCategory ? (
                    <Button
                      onClick={() => handleShowEdit(setIsShowCategory)}
                      className="flex flex-row gap-2"
                      variant={"light"}
                    >
                      <span>Cancel</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleShowEdit(setIsShowCategory)}
                      className="flex flex-row gap-2"
                      variant={"light"}
                    >
                      <div>
                        <FaEdit />
                      </div>
                      <span>Edit category</span>
                    </Button>
                  )}
                </div>
                {isShowCategory ? (
                  <div className="flex flex-col gap-2">
                    <Select
                      onChange={handleChangeCategory}
                      label="Select a level"
                      className="max-w-xs"
                    >
                      <SelectItem key={"Skills"}>Skills</SelectItem>
                      <SelectItem key={"Practice"}>Practice</SelectItem>
                      <SelectItem key={"Others"}>Others</SelectItem>
                    </Select>
                    <Button
                      color={"primary"}
                      onClick={handleSaveCategory}
                      className="w-20"
                    >
                      Save
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-row gap-1">
                    {listCategory.map((item: string, index: number) => (
                      <div
                        key={index}
                        className="flex flex-row justify-between items-center pl-2 border border-gray-300 w-1/6 rounded-lg"
                      >
                        <span className="">{item}</span>
                        <Button
                          className="w-1/5"
                          onClick={() => handleDropCategory(index)}
                          variant={"light"}
                        >
                          <FiTrash />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="m-2">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                  <span className="text-md font-semibold">Courses level</span>
                  {isShowLevel ? (
                    <Button
                      onClick={() => handleShowEdit(setIsShowLevel)}
                      className="flex flex-row gap-2"
                      variant={"light"}
                    >
                      <span>Cancel</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleShowEdit(setIsShowLevel)}
                      className="flex flex-row gap-2"
                      variant={"light"}
                    >
                      <div>
                        <FaEdit />
                      </div>
                      <span>Edit level</span>
                    </Button>
                  )}
                </div>
                {isShowLevel ? (
                  <div className="flex flex-col gap-2">
                    <Select
                      onChange={handleChangeLevel}
                      label="Select a level"
                      className="max-w-xs"
                    >
                      <SelectItem key={"Easy"}>Easy</SelectItem>
                      <SelectItem key={"Medium"}>Medium</SelectItem>
                      <SelectItem key={"Hard"}>Hard</SelectItem>
                    </Select>
                    <Button
                      color={"primary"}
                      onClick={handleSaveLevel}
                      className="w-20"
                    >
                      Save
                    </Button>
                  </div>
                ) : (
                  <div className="flex justify-center items-center border border-gray-300 w-1/6 rounded-lg">
                    <span className="text-md">{level}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-1/2">
          <div className="flex flex-col gap-1 border rounded-lg shadow-lg p-4 border-solid m-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <CiViewList className="w-10 h-10" />
                  <span className="flex justify-center items-center text-2xl font-semibold">
                    Option chapter
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
                      nameCreate={"Chapter"}
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

          <div className="flex flex-col gap-1 border rounded-lg shadow-lg p-4 border-solid m-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-1">
                <IoIosPricetags className="w-10 h-10" />
                <span className="flex justify-center items-center text-2xl font-semibold">
                  Price
                </span>
              </div>
              <div className="border border-gray-200 bg-white"></div>
            </div>

            <div className="m-2">
              <div className="flex flex-col gap-0">
                <div className="flex flex-row justify-between">
                  <span className="text-md font-semibold">Courses price</span>
                  {ísShowPrice ? (
                    <Button
                      onClick={() => handleShowEdit(setIsShowPrice)}
                      className="flex flex-row gap-2"
                      variant={"light"}
                    >
                      <span>Cancel</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleShowEdit(setIsShowPrice)}
                      className="flex flex-row gap-2"
                      variant={"light"}
                    >
                      <div>
                        <FaEdit />
                      </div>
                      <span>Edit price</span>
                    </Button>
                  )}
                </div>
                {ísShowPrice ? (
                  <div className="flex flex-col gap-2">
                    <Input
                      variant={"bordered"}
                      className="w-full"
                      onChange={handleChangePrice}
                      placeholder="Enter to course price"
                    ></Input>
                    <Button
                      color={"primary"}
                      onClick={handleSavePrice}
                      className="w-20"
                    >
                      Save
                    </Button>
                  </div>
                ) : (
                  <span className="text-sm">{price}$</span>
                )}
              </div>
            </div>

            <div className="m-2">
              <div className="flex flex-col gap-0">
                <div className="flex flex-row justify-between">
                  <span className="text-md font-semibold">
                    Courses discount
                  </span>
                  {isShowDiscount ? (
                    <Button
                      onClick={() => handleShowEdit(setIsShowDiscount)}
                      className="flex flex-row gap-2"
                      variant={"light"}
                    >
                      <span>Cancel</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleShowEdit(setIsShowDiscount)}
                      className="flex flex-row gap-2"
                      variant={"light"}
                    >
                      <div>
                        <FaEdit />
                      </div>
                      <span>Edit discount</span>
                    </Button>
                  )}
                </div>
                {isShowDiscount ? (
                  <div className="flex flex-col gap-2">
                    <Input
                      variant={"bordered"}
                      className="w-full"
                      onChange={handleChangeDiscount}
                      placeholder="Enter to course discount"
                    ></Input>
                    <Button
                      color={"primary"}
                      onClick={handleSaveDiscount}
                      className="w-20"
                    >
                      Save
                    </Button>
                  </div>
                ) : (
                  <span className="text-sm">{discount}$</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 border rounded-lg shadow-lg p-4 border-solid m-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-1">
                <MdOutlineSource className="w-10 h-10" />
                <span className="flex justify-center items-center text-2xl font-semibold">
                  Source
                </span>
              </div>
              <div className="border border-gray-200 bg-white"></div>
            </div>

            <div className="m-2 flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                  <span className="text-md font-semibold">Source content</span>
                  <Button className="flex flex-row gap-2" variant={"light"}>
                    <div>
                      <FaEdit />
                    </div>
                    <span>Edit source content</span>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold">English</span>
                  <span className="text-sm opacity-70">
                    Learning skill to get a job for future, some thing bla bla
                    bla, I can kill you, You suck, Yo yo what’s happing man
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold">English</span>
                  <span className="text-sm opacity-70">
                    Learning skill to get a job for future, some thing bla bla
                    bla, I can kill you, You suck, Yo yo what’s happing man
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCoursePage;
