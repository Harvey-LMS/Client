
"use client"

import { ICourse } from "@/types/course";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Skeleton, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { title } from "process";
import { use, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

import { MdOutlineChromeReaderMode } from "react-icons/md";

import { deleteCourse } from "@/app/dashboard/(courses)/courses/handle";
import axios from "axios";
import { set } from "date-fns";



interface reponseCoursePage {
  first: number,
  prev: number,
  next: number,
  last: number,
  pages: number,
  items: number,
  data: ICourse[]
}
interface Props{
  tab: string;
  course: ICourse[],
  coursePage: number,
  courseTotalPage: number
}


const Course:React.FC<Props> = ({tab, course = [], coursePage = 0, courseTotalPage = 0}: Props) => {
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onOpenChange: onOpenChangeDelete } = useDisclosure();
  const { isOpen: isOpenCreate, onOpen: onOpenCreate, onOpenChange: onOpenChangeCreate } = useDisclosure();


  const [nameCourseDelete, setNameCourseDelete] = useState<string>("");
  const [id, setId] = useState<string>("");

  const [data, setData] = useState<ICourse[]>(course);
  const [page, setPage] = useState<number>(coursePage);
  const [totalPage, setTotalPage] = useState<number>(courseTotalPage);

  const [isFetching, setIsFetching] = useState<boolean>(true);

  const router = useRouter();
  const pathName = usePathname();

  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    setIsFetching(true);
    const fetchData = async () => {
      try {
        if (tab === "Course"){
          const pageCall = 1;
          const limitCall = 2;
          const response = await axios.get<reponseCoursePage>(`http://localhost:4000/courses?_page=${pageCall}&_per_page=${limitCall}`);

          console.log("tab Course data", response.data.data);

          setData(response.data.data)
          setTotalPage(response.data.pages);
        }
        else if (tab === "Draft-Course"){
          const pageCall = 1;
          const limitCall = 2;
          const response = await axios.get<reponseCoursePage>(`http://localhost:4000/courses?_page=${pageCall}&_per_page=${limitCall}}&status=Not-Active`);

          console.log("tab DraftCourse data", response.data.data);

          setData(response.data.data)
          setTotalPage(response.data.pages);
        }
      } catch (error) {

      } finally {
        setIsFetching(false);
      }
    }
    fetchData();
  }, [tab]);


  const handleChangePage = async (pageInput: number) => {
    try {
      const response = await axios.get(`http://localhost:4000/courses?_page=${pageInput}&_per_page=2`);
      const dataReponse: ICourse[] = response.data.data
      setData(dataReponse);
      setPage(pageInput)

    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const reponse = await deleteCourse(id);
      const redata = await axios.get(`http://localhost:4000/courses?_page=${page}&_per_page=2`);
      const dataReponse: ICourse[] = redata.data.data;
      console.log(redata);
      setData(dataReponse);
      if (totalPage !== redata.data.pages) {
        setTotalPage(redata.data.pages);
        setPage(page - 1);
      }


    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
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
                <Button color="danger" onPress={() => { handleDelete(id); onClose() }}>
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
                  <Input variant="bordered" placeholder={`e.g. "Toeic"`} classNames={{ input: "px-3" }} />
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

      {(data && data.length === 0) ?
        (
          <div className="mt-32 flex flex-col justify-center items-center gap-2 w-full text-foreground">
            <MdOutlineChromeReaderMode className="text-7xl" />
            <p className="font-semibold text-xl ">You do not have any courses</p>
            <Button variant="ghost" className="font-semibold hover:bg-primary" onClick={onOpenCreate}>Create a new course</Button>
          </div>
        )
        :
        (
          <div className="my-3 flex flex-col justify-start items-start gap-3 w-full">
            <div className="w-1/2">
              <Input
                value={search}
                variant="bordered"
                placeholder="Search"
                onChange={(e) => { setSearch(e.target.value) }}
                endContent={<IoIosSearch className="cursor-pointer" />}
              />
            </div>
            <div className="overflow-x-auto relative w-full">
              <table className="w-full table-auto rtl:text-right border overflow-scroll">
                <thead>
                  <tr className="border-2">
                    <th className="px-2 py-2 w-[30px] border-r-1"></th>
                    <th className="px-7 py-2  border-r-1">Image</th>
                    <th className="px-32 py-2  border-r-1">Title</th>
                    <th className="px-6 py-2 border-r-1">Update</th>
                    <th className="px-6 py-2 border-r-1">Price</th>
                    <th className="px-6 py-2 border-r-1">Level</th>
                    <th className="px-6 py-2 border-r-1">Status</th>
                    <th className="px-6 py-2 border-r-1">Edit</th>
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
                    (data && data.map((item: ICourse) => (
                      <tr key={item.id} className="hover:bg-hover border-b-1 border-gray-200 odd:bg-gray-100">
                        <td className=" w-[30px] py-4 px-3 font-semibold text-center">{item.id}</td>
                        <td className="py-4 px-3 flex justify-center items-center">
                          <Image src={item.thumnailURL} alt={item.title} width={100} height={70} />
                        </td>
                        <td className="py-4 px-3 font-semibold text-lg truncate">{item.title}</td>
                        <td className="py-4 px-3 text-center text-sm">{item.updateAt}</td>
                        <td className="py-4 px-3 text-center">
                          <div className=" flex flex-row justify-center items-center gap-1">
                            <p className="font-bold text-primary">$</p>
                            <p className="font-semibold">{item.price}</p>
                          </div>
                        </td>

                        <td className="py-4 px-3 text-center">{item.level}</td>
                        <td className="py-4 px-3 text-center">
                          <button
                            className={`rounded-md py-1 px-5 whitespace-nowrap font-bold  cursor-default
                              ${(item.status === "Active" && "bg-primary text-primary-foreground") ||
                              (item.status === "Not-Active" && "bg-danger text-danger-foreground") ||
                              (item.status === "Upcoming" && "bg-warning text-warning-foreground")
                              }`

                            }
                          >
                            {item.status}
                          </button>
                        </td>
                        <td className="py-4 px-3 text-center">
                          <div className="items-center justify-center flex flex-row gap-2">
                            <MdOutlineDelete className="text-danger rounded-sm hover:bg-hover-2 text-4xl p-1" onClick={() => { onOpenDelete(); setId(item.id); setNameCourseDelete(item.title) }} />
                            <MdModeEdit onClick={() => { router.push(`${pathName}/edit/${item.id}`) }} className="text-secondary rounded-sm hover:bg-hover-2 text-4xl p-1" />
                          </div>
                        </td>
                      </tr>

                    )))}
                </tbody>

              </table>
            </div>


            {totalPage > 1 && (
              <div className="w-full flex flex-row justify-center items-center pb-16 font-bold">
                <Pagination key={"Pagination"} showControls total={totalPage} initialPage={page} page={page}
                  classNames={{
                    item: "bg-background text-foreground",
                    prev: "bg-background text-foreground",
                    next: "bg-background text-foreground",
                    cursor: "bg-primary text-primary-foreground",
                    wrapper: "bg-background",

                  }
                  }
                  onChange={(page) => handleChangePage(page)}
                />
              </div>
            )
            }
          </div>
        )

      }


    </>
  );
}
export default Course;