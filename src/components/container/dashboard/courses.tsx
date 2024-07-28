
"use client"

import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { IoIosAdd } from "react-icons/io";
import RowData from "./course/course";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import path from "path";


const Courses = () => {
    const pathName = usePathname();
    const route = pathName.split("/")[2];
    const { isOpen: isOpenCreate, onOpen: onOpenCreate, onOpenChange: onOpenChangeCreate } = useDisclosure();

    
    return (
        <div>
    <Modal size="3xl" isOpen={isOpenCreate} onOpenChange={onOpenChangeCreate}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-3xl font-bold">Create Course</ModalHeader>
              <ModalBody>
                <div>
                  <p className="font-semibold text-xl">Name your course</p>
                  <p>{`What would you like to name your course? Don't worry, you can always change later`}</p>
                </div>
                <div>
                  <p className="font-medium">Course title</p>
                  <Input variant="bordered" placeholder={`e.g. "Toeic"`} classNames={{input: "px-3"}}/>
                </div>
              </ModalBody>
              <ModalFooter className="justify-center">
                <Button color="primary" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
            <div>
                <p className="font-bold text-3xl">Course</p>
            </div>

            <div className="flex flex-row justify-between items-center w-full border-b-1 border-b-gray-500 py-2">
                <div className="flex flex-row justify-center items-center gap-5 text-lg">
                    <Link href={"/dashboard/course"} className={`cursor-pointer ${route === "course" ? "font-bold text-primary " : ""}`}>
                        <div>
                            Course
                        </div>
                    </Link>
                    <Link href={"/dashboard/draft-course"} className={`cursor-pointer ${route === "draft-course" ? "font-bold text-primary " : ""}`}>
                        <div>
                            Draft Course
                        </div>
                    </Link>
                </div>
                <Button variant="ghost" className="flex flex-row justify-center items-center text-xl" onClick={onOpenCreate}>
                    <IoIosAdd />
                    <p className="font-semibold">Create</p>
                </Button>
            </div>
        </div>
    );
}
export default Courses;