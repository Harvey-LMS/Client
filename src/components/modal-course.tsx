"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { BiCustomize } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

export default function ModalCourse({
  isOpen,
  onOpenChange,
}: // title,
{
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  // title: string;
}) {
  const [isShowTitle, setIsShowTitle] = useState(false);
  const [isShowContent, setIsShowContent] = useState(false);

  const [titleInput, setTitleInput] = useState("");
  const [title, setTitle] = useState("This is title");
  const [contentInput, setContentInput] = useState("");
  const [content, setContent] = useState("This is content");

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

  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContentInput(e.target.value);
  };
  const handleSaveContent = () => {
    setContent(contentInput);
    setIsShowContent(false);
  };

  return (
    <div>
      <Modal size={"3xl"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <div className="flex flex-col gap-1 p-4 border-solid m-4">
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex flex-row gap-1">
                  <BiCustomize className="w-10 h-10" />
                  <span className="flex justify-center items-center text-2xl font-semibold">
                    Customize your
                  </span>
                </div>
                <div className="border border-gray-200 bg-white"></div>
              </ModalHeader>
              <ModalBody>
                <div className="m-2">
                  <div className="flex flex-col gap-0">
                    <div className="flex flex-row justify-between">
                      <span className="text-md font-semibold">
                        Lesson title
                      </span>
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
                        ></Input>
                        <Button
                          color="primary"
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
                        Lesson content
                      </span>
                      {isShowContent ? (
                        <Button
                          onClick={() => handleShowEdit(setIsShowContent)}
                          className="flex flex-row gap-2"
                          variant={"ghost"}
                        >
                          <span>Cancel</span>
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleShowEdit(setIsShowContent)}
                          className="flex flex-row gap-2"
                          variant={"ghost"}
                        >
                          <div>
                            <FaEdit />
                          </div>
                          <span>Edit content</span>
                        </Button>
                      )}
                    </div>
                    {isShowContent ? (
                      <div className="flex flex-col gap-2">
                        <Input
                          variant={"bordered"}
                          className="w-full"
                          onChange={handleChangeContent}
                        ></Input>
                        <Button
                          color="primary"
                          onClick={handleSaveContent}
                          className="w-20"
                        >
                          Save
                        </Button>
                      </div>
                    ) : (
                      <span className="text-sm">{content}</span>
                    )}
                  </div>
                </div>

                <div className="m-2">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-1">
                      <span className="text-md font-semibold">
                        Lesson video
                      </span>
                      <span className="text-sm opacity-70 italic">
                        Add a lesson video
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
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
