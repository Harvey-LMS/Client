
"use client"
import { IDraftCourse } from "@/types/course";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Skeleton, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdModeEdit, MdOutlineChromeReaderMode } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

interface IDraftCourseProps {
    input: IDraftCourse[] | [];
    page: number;
    totalPage: number;
  }



const DraftCourse = ({ input, page, totalPage }: IDraftCourseProps) => {
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onOpenChange: onOpenChangeDelete } = useDisclosure();
    const { isOpen: isOpenCreate, onOpen: onOpenCreate, onOpenChange: onOpenChangeCreate } = useDisclosure();
  
  
    const [nameCourseDelete, setNameCourseDelete] = useState<string>("");
  
    const data = input;
  
    const [isFetching, setIsFetching] = useState<boolean>(true);
  
    useEffect(() => {
      if (data)
        setIsFetching(false);
    }, [data]);
  
  
    return (
      <div>
        <Modal isOpen={isOpenDelete} onOpenChange={onOpenChangeDelete}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Delete Course</ModalHeader>
                <ModalBody>
                  <p>
                    Are you sure to delete <p className="font-bold text-ellipsis overflow-hidden">{nameCourseDelete}</p> course?
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="danger" onPress={onClose}>
                    Delete
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
  
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
  
        {(data && data.length > 0) ? (
          <div>
            <table className="table-fixed w-full">
              <thead>
                <tr>
                  <th className="w-2 "></th>
                  <th className="w-7 ">Image</th>
                  <th className="w-32 ">Title</th>
                  <th className="w-6 ">Update</th>
                  <th className="w-6 ">Price</th>
                  <th className="w-6 ">Level</th>
                  <th className="w-6 ">Status</th>
                  <th className="w-6 ">Edit</th>
                </tr>
              </thead>
              <tbody>
  
                {isFetching ? (Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index}>
                    <td className="py-4 px-3 w-full h-16"><Skeleton className="w-full h-5 flex justify-center items-center rounded-lg" /></td>
                    <td className="py-4 px-3 w-full h-20"><Skeleton className="w-full h-full flex justify-center items-center" /></td>
                    <td className="py-4 px-3 w-full h-16"><Skeleton className="w-full h-3 flex justify-center items-center rounded-lg" /></td>
                    <td className="py-4 px-3 w-full h-16"><Skeleton className="w-full h-3 flex justify-center items-center rounded-lg" /></td>
                    <td className="py-4 px-3 w-full h-16"><Skeleton className="w-full h-3 flex justify-center items-center rounded-lg" /></td>
                    <td className="py-4 px-3 w-full h-16"><Skeleton className="w-full h-3 flex justify-center items-center rounded-lg" /></td>
                    <td className="py-4 px-3 w-full h-16"><Skeleton className="w-full h-full flex justify-center items-center rounded-xl" /></td>
                    <td className="py-4 px-3 w-full h-16"><Skeleton className="w-full h-full flex justify-center items-center" /></td>
                  </tr>
                )))
                  :
                  (data && data.map((item: IDraftCourse) => (
                    <tr key={item.id} className="hover:bg-hover">
                      <td className="py-4 px-3 font-semibold text-center">{item.id}</td>
                      <td className="py-4 flex justify-center items-center">
                        <Image src={item.thumnailURL} alt={item.title} width={100} height={70} />
                      </td>
                      <td className="py-4 font-semibold text-lg truncate">{item.title}</td>
                      <td className="py-4 text-center text-sm">{item.updateAt}</td>
                      <td className="py-4 text-center">
                        <div className=" flex flex-row justify-center items-center gap-1">
                          <p className="font-bold text-primary">$</p>
                          <p className="font-semibold">{item.price}</p>
                        </div>
                      </td>
  
                      <td className="py-4 text-center">{item.level}</td>
                      <td className="py-4 text-center">
                        <button
                                    className={`rounded-md py-1 px-5 font-bold  cursor-default bg-secondary text-secondary-foreground`}

                                >
                                    {item.status}
                        </button>
                      </td>
                      <td className="py-4 text-center">
                        <div className="items-center justify-center flex flex-row gap-2">
                          <MdOutlineDelete className="text-danger rounded-sm hover:bg-hover-2 text-4xl p-1" onClick={() => { onOpenDelete(); setNameCourseDelete(item.title) }} />
                          <MdModeEdit className="text-secondary rounded-sm hover:bg-hover-2 text-4xl p-1" />
                        </div>
                      </td>
                    </tr>
  
                  )))}
              </tbody>
  
            </table>
  
            <div className="w-full flex flex-row justify-center items-center pb-16 font-bold">
              <Pagination showControls total={totalPage} initialPage={page}
                classNames={{
                  item: "bg-background text-foreground",
                  prev: "bg-background text-foreground",
                  next: "bg-background text-foreground",
                  cursor: "bg-primary text-primary-foreground",
                  wrapper: "bg-background",
  
                }
                }
              />
            </div>
          </div>
        ):(
          <div className="mt-32 flex flex-col justify-center items-center gap-2 w-full text-foreground">
          <MdOutlineChromeReaderMode className="text-7xl" />
          <p className="font-semibold text-xl ">You do not have any draft courses</p>
          <Button variant="ghost" className="font-semibold hover:bg-primary" onClick={onOpenCreate}>Create a new course</Button>
        </div>
        )}
  
  
      </div>
    );
  }

export default DraftCourse;