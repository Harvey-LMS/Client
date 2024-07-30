"use client"

import { Button, Chip, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { use, useEffect, useRef, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";

interface ListItemsCourseProps {
    title: string;
    value: string[];
    list?: string[];
    add?: boolean;
}

const ListItemsCourse:React.FC<ListItemsCourseProps> = ({ title = "", value = [], list = [], add = false }: ListItemsCourseProps) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const { isOpen: isOpenAdd, onOpen: onOpenAdd, onOpenChange: onOpenChangeAdd, onClose: onCloseAdd} = useDisclosure();

    const [showMoreItem, setShowMoreItem] = useState<boolean>(false);

    const [inputAdd, setInputAdd] = useState<string>("");

    //ListItem have when *Search*
    const [listItem, setListItem] = useState<string[]>(list);
    // Value of the list
    const [valueList, setValueList] = useState<string[]>(value);
    // Data of the list when *Update*
    const [data, setData] = useState<string[]>(value);
    
    const handleSave = () => {
        setData(valueList);
        setShowMoreItem(false);
        onClose();
    }

    const handleCancel = () => {
        setValueList(data);
        setShowMoreItem(false);
        onClose();
    }

    const handleSaveAdd = () => {
        setValueList([...valueList, inputAdd]);
        setData([...data, inputAdd]);
        // ?? có cần thêm vào dbs không
        setListItem([...listItem, inputAdd]);

        setInputAdd("");
        onCloseAdd();
    }

    const handleCancelAdd = () => {
        setInputAdd("");
        onCloseAdd();
    }

    // Remove item from the list
    const handleClose = (itemRemove: string) => {
        setValueList(valueList.filter((item) => item !== itemRemove));
    }

    // Search item from the list
    const handleSearch = (search: string) => {
        if (search === "") {
            setListItem(list);
        }
        else {
            setListItem(list.filter((item) => item.toLowerCase().includes(search.toLowerCase())));
        }
    }

    return (<div  className="w-full">
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" onClose={handleCancel}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 border-b-1 border-hover-2" >{`Course ${title}`}</ModalHeader>
                        <ModalBody className="flex flex-col w-full">
                            <div className="flex flex-wrap">

                                {add && <Chip
                                    className="m-1 border-primary hover:bg-primary hover:text-primary-foreground select-none"
                                    variant="bordered"
                                    onClick={() => { onOpenAdd() }}
                                >
                                    <IoIosAdd />

                                </Chip>}
                                {valueList.slice(0, (list && list.length > 0)? 7: valueList.length).map((item) => (
                                    <Chip key={item}
                                        className="m-1 border-primary select-none"
                                        variant="bordered"
                                        onClose={() => { handleClose(item) }}
                                    >
                                        {item}
                                    </Chip>
                                ))}


                                {list && list.length > 0 && valueList.length > 7 && !showMoreItem && (<Chip
                                    className="m-1 border-primary hover:bg-primary hover:text-primary-foreground select-none"
                                    variant="bordered"
                                    onClick={() => { setShowMoreItem(true) }}
                                >
                                    +{valueList.length - 7}
                                </Chip>)}




                            </div>
                            {list && list.length > 0 && (<div className="flex flex-col gap-2">

                                <div className="border-t-gray-200  border-t-1">

                                </div>
                                <div>
                                    <Input placeholder={`Find ${title}`} variant="bordered"
                                        // endContent={} 
                                        onChange={(e) => { handleSearch(e.target.value) }} />
                                </div>

                                <CheckboxGroup
                                    defaultValue={data}
                                    className="py-3 min-h-80 max-h-80 overflow-auto w-full"
                                    value={valueList}
                                    onChange={(e) => setValueList(e)}
                                >
                                    {listItem.map((item) => (
                                        <Checkbox key={item} value={item}>
                                            {item}
                                        </Checkbox>
                                    ))}
                                </CheckboxGroup>
                            </div>
                            )}
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="light" color="danger" onClick={() => { handleCancel() }}>Cancel</Button>
                            <Button variant="solid" color="primary" className="min-w-0 px-16" onClick={() => { handleSave() }}>Save</Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>


        <Modal isOpen={isOpenAdd} onOpenChange={onOpenChangeAdd} onClose={handleCancelAdd} >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 border-b-1 border-hover-2">{`Add new ${title.toLowerCase()}`}</ModalHeader>
                        <ModalBody className="flex flex-col w-full">
                            <div className="flex flex-wrap">
                                <Input placeholder={`Add new ${title.toLowerCase()}`} variant="bordered"
                                    value={inputAdd}
                                    onChange={(e) => { setInputAdd(e.target.value) }}
                                />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="light" color="danger" onClick={() => { handleCancelAdd()}}>Cancel</Button>
                            <Button variant="solid" color="primary" className="min-w-0 px-16" onClick={() => { handleSaveAdd()}}>Save</Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>

        <div className="my-3 flex flex-col justify-start items-start w-full px-3 py-2 pb-3 border rounded-lg bg-gray-100">



            <div className="flex flex-row justify-between items-center gap-3 w-full">
                <p className="font-bold text-lg text-foreground">Course {title}</p>
                <div className="flex flex-row gap-3 justify-center items-center px-3 rounded-md text-md font-semibold text-black dark:text-white cursor-pointer hover:bg-hover"
                    onClick={() => { onOpen() }}
                >
                    <FiEdit></FiEdit>
                    Edit {title.toLowerCase()}
                </div>
            </div>

            <div className="flex flex-row justify-start items-center gap-3 w-full mt-3">
                <div className="flex flex-wrap">
                    {data.slice(0, 5).map((item) => (
                        <Chip key={item} 
                            className="m-1 border-primary select-none"
                            variant="bordered"
                        >{item}</Chip>
                    ))}
                    {data.length > 5 && <Chip
                        className="m-1 border-primary select-none"
                        variant="bordered"
                        >+{data.length - 5}</Chip>}
                </div>
            </div>


        </div>
    </div>);
}

export default ListItemsCourse;