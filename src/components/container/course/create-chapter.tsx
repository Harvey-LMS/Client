"use client";

import { Button } from "@/components/ui/button";
import { Reorder } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { BiCustomize } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

import { useState } from "react";
import { Item } from "@/components/reorder/item-drag";
import { MdPreview } from "react-icons/md";
import ModalCourse from "@/components/modal-course";
import { useDisclosure } from "@nextui-org/react";

const CreateChapterPage = () => {
  const initialItems = [
    "Listening Part 1,2",
    "Listening Part 3,4",
    "Practice Test 1",
    "Writing",
  ];
  const [items, setItems] = useState(initialItems);

  return (
    <div className="flex flex-col gap-0">
      <div className="flex flex-col gap-2 m-6">
        <div>
          <span className="text-2xl font-bold">Chapter Details</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="">Complete all fields (0/3)</span>
          <Button variant={"ghost"} disabled={true}>
            Not active
          </Button>
        </div>
      </div>

      <div className="flex flex-row">
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
                  <span className="text-md font-semibold">Chapter title</span>
                  <Button className="flex flex-row gap-2" variant={"ghost"}>
                    <div>
                      <FaEdit />
                    </div>
                    <span>Edit title</span>
                  </Button>
                </div>
                <span className="text-sm">Listening Part 1,2</span>
              </div>
            </div>

            <div className="m-2">
              <div className="flex flex-col gap-0">
                <div className="flex flex-row justify-between">
                  <span className="text-md font-semibold">
                    Chapter description
                  </span>
                  <Button className="flex flex-row gap-2" variant={"ghost"}>
                    <div>
                      <FaEdit />
                    </div>
                    <span>Edit description</span>
                  </Button>
                </div>
                <span className="text-sm">Description</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 border rounded-lg shadow-lg p-4 border-solid m-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-1">
                <MdPreview className="w-10 h-10" />
                <span className="flex justify-center items-center text-2xl font-semibold">
                  Access settings
                </span>
              </div>
              <div className="border border-gray-200 bg-white"></div>
            </div>

            <div className="m-2">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                  <span className="text-md font-semibold">
                    Free Preview Chapter
                  </span>
                  <Button className="flex flex-row gap-2" variant={"ghost"}>
                    <div>
                      <FaEdit />
                    </div>
                    <span>Edit access settings</span>
                  </Button>
                </div>
                <span className="text-sm opacity-70 italic">
                  This is chapter not for free preview
                </span>
              </div>
            </div>
          </div>
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default CreateChapterPage;
