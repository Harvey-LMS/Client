import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { BiCustomize } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

export default function ModalCourse({
  isOpen,
  onOpenChange,
  title,
}: {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  title: string;
}) {
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
                      <Button className="flex flex-row gap-2" variant={"light"}>
                        <div>
                          <FaEdit />
                        </div>
                        <span>Edit title</span>
                      </Button>
                    </div>
                    <span className="text-sm">{title}</span>
                  </div>
                </div>

                <div className="m-2">
                  <div className="flex flex-col gap-0">
                    <div className="flex flex-row justify-between">
                      <span className="text-md font-semibold">
                        Lesson content
                      </span>
                      <Button className="flex flex-row gap-2" variant={"light"}>
                        <div>
                          <FaEdit />
                        </div>
                        <span>Edit content</span>
                      </Button>
                    </div>
                    <span className="text-sm">Content</span>
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
