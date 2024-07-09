import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { BiCustomize } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { IoIosOptions, IoMdAddCircleOutline } from "react-icons/io";

const CreateCoursePage = () => {
  return (
    <div className="flex flex-col gap-0">
      <div className="flex flex-col gap-2 m-4 h-1/5">
        <div>
          <span className="text-2xl font-bold">Create Course</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="">Complete all fields (0/6)</span>
          <Button variant={"ghost"} disabled={"true"}>
            Not active
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-1 border rounded-lg p-2 border-solid w-1/2 h-3/5 m-4">
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
              <span className="text-md font-semibold">Courses title</span>
              <Button className="flex flex-row gap-2" variant={"ghost"}>
                <div>
                  <FaEdit />
                </div>
                <span>Edit title</span>
              </Button>
            </div>
            <span className="text-sm">Learning TOEIC</span>
          </div>
        </div>

        <div className="m-2">
          <div className="flex flex-col gap-0">
            <div className="flex flex-row justify-between">
              <span className="text-md font-semibold">Courses description</span>
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

        <div className="m-2">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1">
              <span className="text-md font-semibold">Courses image</span>
            </div>
            <Link
              href=""
              className="h-64 border-2 border-gray-300 p-4 rounded-lg shadow-lg bg-white flex justify-center items-center"
            >
              <IoMdAddCircleOutline className="w-10 h-10" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 border rounded-lg p-2 border-solid w-1/2 h-1/5 m-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-1">
            <IoIosOptions className="w-10 h-10" />
            <span className="flex justify-center items-center text-2xl font-semibold">
              Option your
            </span>
          </div>
          <div className="border border-gray-200 bg-white"></div>
        </div>

        <div className="m-2">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between">
              <span className="text-md font-semibold">Courses language</span>
              <Button className="flex flex-row gap-2" variant={"ghost"}>
                <div>
                  <FaEdit />
                </div>
                <span>Edit language</span>
              </Button>
            </div>
            <div className="flex flex-row gap-1">
              <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                <span className="flex justify-center items-center">
                  English
                </span>
              </div>
              <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                <span className="flex justify-center items-center">
                  Chinese
                </span>
              </div>
              <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                <span className="flex justify-center items-center">
                  Chinese
                </span>
              </div>
              <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                <span className="flex justify-center items-center">...</span>
              </div>
            </div>
          </div>
        </div>

        <div className="m-2">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between">
              <span className="text-md font-semibold">Courses category</span>
              <Button className="flex flex-row gap-2" variant={"ghost"}>
                <div>
                  <FaEdit />
                </div>
                <span>Edit category</span>
              </Button>
            </div>
            <div className="flex flex-row gap-1">
              <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                <span className="flex justify-center items-center">Skills</span>
              </div>
              <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                <span className="flex justify-center items-center">
                  Vocabulary
                </span>
              </div>

              <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                <span className="flex justify-center items-center">...</span>
              </div>
            </div>
          </div>
        </div>

        <div className="m-2">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between">
              <span className="text-md font-semibold">Courses level</span>
              <Button className="flex flex-row gap-2" variant={"ghost"}>
                <div>
                  <FaEdit />
                </div>
                <span>Edit level</span>
              </Button>
            </div>
            <div className="flex flex-row gap-1">
              <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                <span className="flex justify-center items-center">Easy</span>
              </div>
              <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                <span className="flex justify-center items-center">Medium</span>
              </div>
              <div className="border border-gray-300 w-1/6 rounded-lg bg-white">
                <span className="flex justify-center items-center">Hard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCoursePage;
