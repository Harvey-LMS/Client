import * as React from "react";
import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { useRaisedShadow } from "@/components/drag-trigger/use-raised-shadow";
import { ReorderIcon } from "@/components/drag-trigger/icon";
import { Button } from "../ui/button";
import { FiTrash } from "react-icons/fi";
import { MdEdit } from "react-icons/md";

interface Props {
  item: string;
}

export const Item = ({ item }: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

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
        <Button className="h-1/3">Raw</Button>
        <FiTrash />
        <MdEdit />
      </div>
    </div>
  );
};
