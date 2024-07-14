"use client"

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";


interface Props {
    id: number;
    name: string;
    update: string;
    price: number;
    level: string;
    status: string;
    image: string;
}

const data = [
    {
        id: 1,
        name: "React Perfect Course for Beginner sdflkajsdlkjalskdjflaksjdfsdlkfjsldfjlsdjf lsajdf;l jasl;dfjsdfaslkdfjlsdj asldkjf sadjflaskdjflasdfjlksajdflkjsadflkjalskdjflkasjflkjsdfljsaldf lsjafljsdfljalsdjfasjdlfjasdl asldfasflasdjf sdf",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 2,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 3,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 4,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 5,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 6,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 7,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 8,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 9,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 10,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Upcomming",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    }
]
    


const Course = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [nameCourseDelete, setNameCourseDelete] = useState<string>("");

    return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
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

        <table className="table-fixed w-full">
            <thead>
                <tr>
                    <th className="w-1 "></th>
                    <th className="w-7 ">Image</th>
                    <th className="w-32 ">Name</th>
                    <th className="w-6 ">Update</th>
                    <th className="w-6 ">Price</th>
                    <th className="w-6 ">Level</th>
                    <th className="w-6 ">Status</th>
                    <th className="w-6 ">Edit</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item: Props) => (
                    <tr key={item.id} className="hover:bg-hover">
                        <td className="py-4 px-3 font-semibold text-center">{item.id}</td>
                        <td className="py-4 flex justify-center items-center">
                            <Image src={item.image} alt={item.name} width={100} height={70}/>
                        </td>
                        <td className="py-4 font-semibold text-lg truncate">{item.name}</td>
                        <td className="py-4 text-center text-sm">{item.update}</td>
                        <td className="py-4 text-center">
                            <div className=" flex flex-row justify-center items-center gap-1">
                            <p className="font-bold text-primary">$</p>
                            <p className="font-semibold">{item.price}</p>
                            </div>
                        </td>

                        <td className="py-4 text-center">{item.level}</td>
                        <td className="py-4 text-center">
                            <button 
                            className={`rounded-md py-1 px-5 font-bold  cursor-default
                            ${item.status === "Active" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`
                            }
                            >
                            {item.status}
                            </button>
                        </td>
                        <td className="py-4 text-center">
                            <div className="items-center justify-center flex flex-row gap-5">
                                <MdOutlineDelete className="text-danger rounded-sm hover:bg-hover-2 text-4xl p-1" onClick={() => {onOpen(); setNameCourseDelete(item.name)}} />
                                <MdModeEdit className="text-secondary rounded-sm hover:bg-hover-2 text-4xl p-1" />
                            </div>
                        </td>
                    </tr>
                    
                ))}
            </tbody>
            
        </table>
        <div className="w-full flex flex-row justify-center items-center pb-16 font-bold">
                <Pagination  showControls total={10} initialPage={1}
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
    );
}
 
export default Course;