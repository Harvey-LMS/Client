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

import { useLocation } from "react-router-dom";
import { Router } from "react-router-dom";

import { useState } from "react";

interface Props {
  item: string;
}

interface ButtonProps {
  variant: string;
  onPress?: () => void;
  className: string;
}

export const Item = ({ item }: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();
  const { isOpen, onOpenChange } = useDisclosure();

  const [status, setStatus] = useState(false);

  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const [currentItem, setCurrentItem] = useState<string | null>("");
  const handleEdit = () => {
    setCurrentItem(item);
    onOpenChange();
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
          </Reorder.Item>
        </div>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center">
        <Button color="primary" className="h-2/3">
          {status ? "Done" : "Yet"}
        </Button>
        <Button variant={"light"} className="h-2/3">
          <FiTrash />
        </Button>
        {!(currentPath === "/instructor/course/create") ? (
          <Button variant={"light"} onPress={handleEdit} className="h-2/3">
            <MdEdit />
            <ModalCourse
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              text={currentItem || ""}
            />
          </Button>
        ) : (
          <Button variant={"light"} className="h-2/3">
            <MdEdit />
            <ModalCourse
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              text={currentItem || ""}
            />
          </Button>
        )}
      </div>
    </div>
  );
};
