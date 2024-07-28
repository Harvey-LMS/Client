"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { BiCustomize } from "react-icons/bi";

interface Props {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSaveLesson: (lessonName: string) => void;
  nameCreate: string;
}

export default function ModalCreate({
  isOpen,
  onOpenChange,
  onSaveLesson,
  nameCreate,
}: Props) {
  const [lessonNameInput, setLessonNameInput] = useState("");

  const handleChangeLessonName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLessonNameInput(e.target.value);
  };

  const handleCreateLesson = () => {
    onSaveLesson(lessonNameInput);
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
                    Create {nameCreate}
                  </span>
                </div>
                <div className="border border-gray-200 bg-white"></div>
              </ModalHeader>
              <ModalBody>
                <div className="m-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between">
                      <span className="text-md font-semibold">
                        {nameCreate} name
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Input
                        variant={"bordered"}
                        className="w-full"
                        onChange={handleChangeLessonName}
                      ></Input>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateLesson}
                  color="primary"
                  onPress={onClose}
                >
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
