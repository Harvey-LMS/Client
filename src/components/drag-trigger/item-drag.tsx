import * as React from "react";
import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { useRaisedShadow } from "@/components/drag-trigger/use-raised-shadow";
import { ReorderIcon } from "@/components/drag-trigger/icon";

interface Props {
  item: string;
}

export const Item = ({ item }: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  return (
    <div className="flex flex-row justify-between">
      <div className="">
        <Reorder.Item
          value={item}
          id={item}
          style={{ boxShadow, y }}
          dragListener={false}
          dragControls={dragControls}
        >
          <span>{item}</span>
        </Reorder.Item>
      </div>
      <div>
        <ReorderIcon dragControls={dragControls} />
      </div>
    </div>
  );
};
