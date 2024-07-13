"use client";

import { Button } from "@/components/ui/button";
import { Reorder } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { BiCustomize } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import {
  IoIosOptions,
  IoIosPricetags,
  IoMdAddCircleOutline,
} from "react-icons/io";

import { useState } from "react";
import { Item } from "@/components/reorder/item-drag";
import { MdOutlineSource } from "react-icons/md";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";

const CreateCoursePage = () => {
  const initialItems = [
    "Listening Part 1,2",
    "Listening Part 3,4",
    "Practice Test 1",
    "Writing",
  ];
  const [items, setItems] = useState(initialItems);

  const [isShowTitle, setIsShowTitle] = useState(false);
  const [isShowDescription, setIsShowDescription] = useState(false);
  const [ísShowPrice, setIsShowPrice] = useState(false);
  const [isShowDiscount, setIsShowDiscount] = useState(false);
  const [isShowLevel, setIsShowLevel] = useState(false);

  const [titleInput, setTitleInput] = useState("");
  const [title, setTitle] = useState("This is title");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [description, setDescription] = useState("This is description");
  const [priceInput, setPriceInput] = useState("");
  const [price, setPrice] = useState(32);
  const [discountInput, setDiscountInput] = useState("");
  const [discount, setDiscount] = useState(32);
  const [levelInput, setLevelInput] = useState("");
  const [level, setLevel] = useState("Easy");

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

  const handleChangeLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevelInput(e.target.value);
  };
  const handleSaveLevel = () => {
    setLevel(levelInput);
    setIsShowLevel(false);
  };

  return (
    <div className="flex flex-col gap-0 w-full">
      <div className="flex flex-col gap-2 m-6">
        <div>
          <span className="text-2xl font-bold">Create Course</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="">Complete all fields (0/6)</span>
          <Button variant={"ghost"} disabled={true}>
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
                      placeholder={"Enter to course title"}
                      variant={"bordered"}
                      className="w-full"
                      onChange={handleChangeTitle}
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
                    Courses description
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

            <div className="m-2">
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <span className="text-md font-semibold">Courses image</span>
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
                <IoIosOptions className="w-10 h-10" />
                <span className="flex justify-center items-center text-2xl font-semibold">
                  Option your
                </span>
              </div>
              <div className="border border-gray-200 bg-white"></div>
            </div>

            <div className="m-2">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                  <span className="text-md font-semibold">
                    Courses language
                  </span>
                  <Button className="flex flex-row gap-2" variant={"ghost"}>
                    <div>
                      <FaEdit />
                    </div>
                    <span>Edit language</span>
                  </Button>
                </div>
                <div className="flex flex-row gap-1">
                  <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                    <span className="flex justify-center items-center">
                      English
                    </span>
                  </div>
                  <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                    <span className="flex justify-center items-center">
                      Chinese
                    </span>
                  </div>
                  <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                    <span className="flex justify-center items-center">
                      Chinese
                    </span>
                  </div>
                  <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                    <span className="flex justify-center items-center">
                      ...
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="m-2">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                  <span className="text-md font-semibold">
                    Courses category
                  </span>
                  <Button className="flex flex-row gap-2" variant={"ghost"}>
                    <div>
                      <FaEdit />
                    </div>
                    <span>Edit category</span>
                  </Button>
                </div>
                <div className="flex flex-row gap-1">
                  <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                    <span className="flex justify-center items-center">
                      Skills
                    </span>
                  </div>
                  <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                    <span className="flex justify-center items-center">
                      Vocabulary
                    </span>
                  </div>

                  <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                    <span className="flex justify-center items-center">
                      ...
                    </span>
                  </div>
                </div>
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
                      variant={"ghost"}
                    >
                      <span>Cancel</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleShowEdit(setIsShowLevel)}
                      className="flex flex-row gap-2"
                      variant={"ghost"}
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
                    <Button onClick={handleSaveLevel} className="w-20">
                      Save
                    </Button>
                  </div>
                ) : (
                  <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                    <span className="text-md flex justify-center items-center">
                      {level}
                    </span>
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
                      variant={"ghost"}
                    >
                      <span>Cancel</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleShowEdit(setIsShowPrice)}
                      className="flex flex-row gap-2"
                      variant={"ghost"}
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
                    <Button onClick={handleSavePrice} className="w-20">
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
                      variant={"ghost"}
                    >
                      <span>Cancel</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleShowEdit(setIsShowDiscount)}
                      className="flex flex-row gap-2"
                      variant={"ghost"}
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
                    <Button onClick={handleSaveDiscount} className="w-20">
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
                  <Button className="flex flex-row gap-2" variant={"ghost"}>
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
