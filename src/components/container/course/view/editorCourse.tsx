"use client"

import { Button, Input } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { FiEdit } from "react-icons/fi";

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { text } from "stream/consumers";
import sanitizeHtml from "@/util/sanitizeHtml"
import { motion } from "framer-motion";

import { MdExpandLess, MdExpandMore } from "react-icons/md";


import "./quill.css"

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });


interface EditorCourseProps {
    title: string | "";
    value: string | "";
}


const EditorCourse = ({ title, value }: EditorCourseProps) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [valueInput, setValueInput] = useState<string>(value);

    const [data, setData] = useState<string>(value);

    const [isShow, setIsShow] = useState<boolean>(true);

    const [hideShowMore, setHideShowMore] = useState<boolean>(false);




    useEffect(() => {
        if (data.length > 2000) {
            setHideShowMore(true);
        }
    }, [data]);

    const handleSave = () => {
        setData(valueInput);
        setEditMode(false);
        console.log(valueInput)
    }

    const handleCancel = () => {
        setValueInput(data);
        setEditMode(false);
    }



    // Test

    const [maxHeight, setMaxHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(contentRef.current.scrollHeight);
            if (data.length > 2000) {
                setHideShowMore(true);
            }
            else {
                setHideShowMore(false);
            }
        }
    }, [isShow, data]);




    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
            ["bold", "italic", "underline"],
            [{ color: ["red", "#785412"] }, { background: ["red", "#785412"] }],
            [{ align: [false, "center", "right"] }, { list: "ordered" }, { list: "bullet" }],
            ["link", "image"],

        ]
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "list",
        "bullet",
        "link",
        "color",
        "image",
        "background",
        "align",
        "font",
    ];



    return (



        <div className=" my-3 flex flex-col justify-start items-start w-full px-3 py-2 pb-3 border rounded-lg bg-gray-100 dark:bg-stone-950">



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
                    <QuillEditor
                        theme="snow"
                        value={valueInput}
                        onChange={setValueInput}
                        modules={modules}
                        formats={formats}
                        className="p-0 custom-quill-editor  w-full bg-background min-h-[300px] max-h-[500px] overflow-auto relative flex flex-col justify-start items-center"

                    />

                ) : (
                    <div className="w-full">
                            <motion.div 
                            ref={contentRef} 

                            initial={{ height: 0 }} 
                            animate={{ 
                                height: isShow ? 250 : maxHeight ,
                                maskImage: isShow ? "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 0%, transparent 100%)" : "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 100%, transparent 100%)"
                            }} 

                            dangerouslySetInnerHTML={{ __html: data }} 
                            className={`overflow-hidden `}>

                        </motion.div>
                        {hideShowMore && (
                            <div className="cursor-pointer text-center flex flex-col items-center justify-center font-bold" onClick={() => { setIsShow(!isShow) }}>
                                {isShow ? (
                                    <div className="flex flex-col items-center justify-center font-bold">
                                        Show More
                                        <MdExpandMore className="text-2xl"></MdExpandMore>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center font-bold">
                                        Show Less
                                        <MdExpandLess className="text-2xl"></MdExpandLess>
                                    </div>
                                )
                                }
                            </div>
                        )}
                    </div>

                )}
            </div>

            {editMode ? (<div className="flex flex-row justify-end items-center gap-3 w-full mt-3">
                <Button variant="light" color="danger" onClick={handleCancel}>Cancel</Button>
                <Button variant="solid" color="primary" className="min-w-0 px-16" onClick={handleSave}>Save</Button>
            </div>) : (<></>)}


        </div>

    );
}

export default EditorCourse;