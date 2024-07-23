// item-drag.tsx
"use client";

import * as React from "react";
import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { useRaisedShadow } from "@/components/reorder/use-raised-shadow";
import { ReorderIcon } from "@/components/reorder/icon";
import { Button } from "@nextui-org/react";
import { FiTrash } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { useDisclosure } from "@nextui-org/react";
import ModalCourse from "../modal-course";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  item: string;
  itemLesson: string;
  handleDelete: (item: string) => void;
}

export const Item = ({ item, itemLesson, handleDelete }: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();
  const { isOpen, onOpenChange } = useDisclosure();

  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const [currentItem, setCurrentItem] = useState<string | null>("");
  const [currentItemLesson, setCurrentItemLesson] = useState<string | null>("");

  const [isShowLesson, setIsShowLesson] = useState(false);

  const router = useRouter();
  const handleEdit = () => {
    setCurrentItem(item);
    onOpenChange();
  };

  const handleShowEditLesson = () => {
    setIsShowLesson(!isShowLesson);
  };

  const directChapter = () => {
    router.push("/instructor/course/chapter");
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row gap-4">
        <div>
          <ReorderIcon dragControls={dragControls} />
        </div>
        <div className="flex justify-center items-center">
          <Reorder.Item
            value={item}
            id={item}
            style={{ boxShadow, y }}
            dragListener={false}
            dragControls={dragControls}
          >
            <span className="text-sm">{item}</span>
            <div className="flex flex-row gap-4 justify-center items-center">
              <Button
                variant={"light"}
                className="h-2/3"
                onPress={() => handleDelete(item)}
              >
                <FiTrash />
              </Button>
              <Button
                onClick={handleShowEditLesson}
                variant={"light"}
                onPress={handleEdit}
                className="h-2/3"
              >
                <MdEdit />
              </Button>
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
