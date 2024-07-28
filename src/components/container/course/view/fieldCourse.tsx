"use client"

import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { text } from "stream/consumers";
import sanitizeHtml from "@/util/sanitizeHtml"
import { motion } from "framer-motion";
import { Select, SelectItem } from "@nextui-org/react";


import "./quill.css"

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });


interface FieldCourseProps {
    title: string | "";
    value: string | "";
    type?: "text" | "datetime" | "select"
}


const FieldCourse: React.FC<FieldCourseProps> = ({ title, value, type = "text" }: FieldCourseProps) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [valueInput, setValueInput] = useState<string>(value);

    const [data, setData] = useState<string>(value);


    const handleSave = () => {
        setData(valueInput);
        setEditMode(false);
    }

    const handleCancel = () => {
        setValueInput(data);
        setEditMode(false);
    }

    return (



        <div className="my-3 flex flex-col justify-start items-start w-full px-3 py-2 pb-3 border rounded-lg bg-gray-100 dark:bg-stone-950">



            <div className="flex flex-row justify-between items-center gap-3 w-full">
                <p className="font-bold text-lg text-foreground">Course {title}</p>
                <div className="flex flex-row gap-3 justify-center items-center px-3 rounded-md text-md font-semibold text-black dark:text-white cursor-pointer hover:bg-hover"
                    onClick={() => { setEditMode(!editMode) }}
                >
                    <FiEdit></FiEdit>
                    Edit {title.toLowerCase()}
                </div>
            </div>

            <div className="flex flex-row justify-between items-center gap-3 w-full mt-3">
                {editMode ? (
                    type === "text" || type === "datetime" ? 
                    (
                        <Input type={type === "text" ? "text" : (type === "datetime" ? "datetime" : "text")} className="p-0 w-full border border-border rounded-md  group-data-[focus=true]:bg-white"
                            classNames={{ inputWrapper: " group-data-[focus=true]:bg-white group-data-[focus=true]:border-primary" }}
                            value={valueInput}
                            placeholder={data ? data : "Enter value"}
                            onChange={(e) => { setValueInput(e.target.value) }}
                        />
                    )
                    : 
                    (
                    <Select defaultSelectedKeys={[valueInput]}>
                        <SelectItem key={"Easy"} value="Easy">Easy</SelectItem>
                        <SelectItem key={"Medium"} value="Medium">Medium</SelectItem>
                        <SelectItem key={"Hard"} value="Hard">Hard</SelectItem>
                    </Select>
                    ))
                    : (
                        <div>
                            {valueInput}
                        </div>

                    )
            }
            </div>

            {editMode ? (<div className="flex flex-row justify-end items-center gap-3 w-full mt-3">
                <Button variant="light" color="danger" onClick={handleCancel}>Cancel</Button>
                <Button variant="solid" color="primary" className="min-w-0 px-16" onClick={handleSave}>Save</Button>
            </div>) : (<></>)}


        </div>

    );
}

export default FieldCourse;