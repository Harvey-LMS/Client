"use client";

import * as React from "react";
import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { useRaisedShadow } from "@/components/reorder/use-raised-shadow";
import { ReorderIcon } from "@/components/reorder/icon";
import { Button, Input } from "@nextui-org/react";

import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  item: string;
  handleDelete: (item: string) => void;
  handleEdit: () => void;
  handleDropdown: () => void;
  type: string;
  isEditTitle: boolean;
  handleChangeTitleChapter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Item = ({
  item,
  handleDelete,
  handleEdit,
  handleDropdown,
  type,
  isEditTitle,
  handleChangeTitleChapter,
}: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  const [value, setValue] = React.useState<string>(item);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    handleChangeTitleChapter(e);
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-row gap-2 w-full h-6">
        <div className="flex justify-center items-center">
          {type === "chapter" ? (
            <Button
              variant={"light"}
              onPress={handleDropdown}
              className="min-w-10 h-2/3 p-0"
            >
              <IoIosArrowDown className="text-xl" />
            </Button>
          ) : (
            <ReorderIcon dragControls={dragControls} />
          )}
        </div>
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
              <div className="flex flex-row gap-4 items-center w-full">
                {/* <FaRegFilePdf className="w-8 h-6" /> */}
                {type === "chapter" ? "" : <FaVideo className="w-7 h-5" />}
                {isEditTitle && type === "chapter" ? (
                  <div className="w-full">
                    <Input
                      // onChange={(e) => setValue(e.target.value)}
                      onChange={handleChangeInput}
                      variant={"bordered"}
                      className="w-full mt-1"
                      value={value}
                    />
                  </div>
                ) : (
                  <span
                    className={`flex justify-center items-center select-none ${
                      type === "chapter" ? "text-md font-semibold " : "text-sm"
                    }`}
                  >
                    {item}
                  </span>
                )}
              </div>
              {type === "chapter" ? (
                <div className="flex flex-row gap-1 justify-center items-center">
                  {!isEditTitle ? (
                    <>
                      <Button
                        variant={"light"}
                        className="min-w-10 h-2/3 p-0"
                        onPress={() => handleDelete(item)}
                      >
                        <MdDeleteOutline size={"sm"} />
                      </Button>
                      <Button
                        variant={"light"}
                        onPress={handleEdit}
                        className="min-w-10 h-2/3 p-0"
                      >
                        <MdOutlineEdit className="text-2xl" />
                      </Button>
                      <ReorderIcon dragControls={dragControls} />
                    </>
                  ) : (
                    <div></div>
                  )}
                </div>
              ) : (
                <div className="flex flex-row gap-1 justify-center items-center">
                  <Button
                    variant={"light"}
                    className="min-w-10 h-2/3 p-0"
                    onPress={() => handleDelete(item)}
                  >
                    <MdDeleteOutline className="text-2xl" />
                  </Button>
                  <Button
                    variant={"light"}
                    onPress={handleEdit}
                    className="min-w-10 h-2/3 p-0"
                  >
                    <MdOutlineEdit className="text-2xl" />
                  </Button>
                  <Button
                    variant={"light"}
                    onPress={handleDropdown}
                    className="min-w-10 h-2/3 p-0"
                  >
                    <IoIosArrowDown className="" size={"sm"} />
                  </Button>
                </div>
              )}
            </div>
          </Reorder.Item>
        </div>
      </div>
    </div>
  );
};
