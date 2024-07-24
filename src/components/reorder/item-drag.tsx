// item-drag.tsx
"use client";

import * as React from "react";
import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { useRaisedShadow } from "@/components/reorder/use-raised-shadow";
import { ReorderIcon } from "@/components/reorder/icon";
import { Button, Input } from "@nextui-org/react";

import { FiTrash } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegFilePdf, FaVideo } from "react-icons/fa6";

interface Props {
  item: string;
  handleDelete: (item: string) => void;
  handleEdit: () => void;
  handleDropdown: () => void;
  type: string;
  isEditTitle: boolean;
}

export const Item = ({
  item,
  handleDelete,
  handleEdit,
  handleDropdown,
  type,
  isEditTitle,
}: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  return (
    <div className="flex flex-row">
      <div className="flex flex-row gap-4 w-full">
        <ReorderIcon dragControls={dragControls} />
        <div className="w-full flex justify-center items-center">
          <Reorder.Item
            className="w-full"
            value={item}
            id={item}
            style={{ boxShadow, y }}
            dragListener={false}
            dragControls={dragControls}
          >
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-4 items-center">
                {/* <FaRegFilePdf className="w-8 h-6" /> */}
                {type === "chapter" ? "" : <FaVideo className="w-7 h-5" />}
                {isEditTitle ? (
                  <Input
                    placeholder={"Enter to chapter title"}
                    variant={"faded"}
                    className="w-full"
                  />
                ) : (
                  <span
                    className={`flex justify-center items-center ${
                      type === "chapter" ? "text-md font-semibold " : "text-sm"
                    }`}
                  >
                    {item}
                  </span>
                )}
              </div>
              <div className="flex flex-row gap-4 justify-center items-center">
                <Button
                  variant={"light"}
                  className="h-2/3"
                  onPress={() => handleDelete(item)}
                >
                  <FiTrash />
                </Button>
                <Button
                  variant={"light"}
                  onPress={handleEdit}
                  className="h-2/3"
                >
                  <MdEdit />
                </Button>
                <Button
                  variant={"light"}
                  onPress={handleDropdown}
                  className="h-2/3"
                >
                  <RiArrowDropDownLine className="" size={"lg"} />
                </Button>
              </div>
            </div>
          </Reorder.Item>
        </div>
      </div>

      {/* {!(currentPath === "/instructor/course/create") ? (
        <div className="flex flex-row gap-4 justify-center items-center">
          <Button
            variant={"light"}
            className="h-2/3"
            onPress={() => handleDelete(item)}
          >
            <FiTrash />
          </Button>
          <Button variant={"light"} onPress={handleEdit} className="h-2/3">
            <MdEdit />
            <ModalCourse isOpen={isOpen} onOpenChange={onOpenChange} />
          </Button>
        </div>
      ) : (
        <div className="flex flex-row gap-4 justify-center items-center">
          <Button
            variant={"light"}
            className="h-2/3"
            onPress={() => handleDelete(item)}
          >
            <FiTrash />
          </Button>
          <Button onClick={directChapter} variant={"light"} className="h-2/3">
            <MdEdit />
            <ModalCourse isOpen={isOpen} onOpenChange={onOpenChange} />
          </Button>
        </div>
      )} */}
    </div>
  );
};
