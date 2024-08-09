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
import { init } from "next/dist/compiled/webpack/webpack";
import { ExpandableComponent } from "./temp";

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });


interface EditorCourseProps {
    title: string | "";
    value: string | "";
}


const EditorCourse = ({ title, value }: EditorCourseProps) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [valueInput, setValueInput] = useState<string>(value);

    const [data, setData] = useState<string>(value);

    const [isShow, setIsShow] = useState<boolean>(false);

    const [hideShowMore, setHideShowMore] = useState<boolean>(false);

    const handleSave = () => {
        setData(valueInput);
        setEditMode(false);
        if (contentRef.current) {
            const initialHeight = contentRef.current.scrollHeight;

            if (initialHeight > 250) {
                setHideShowMore(true);
                setMaxHeight(initialHeight);
            }
            else {
                setHideShowMore(false)
                setMaxHeight(initialHeight);
            }
        }
    }

    const handleCancel = () => {
        setValueInput(data);
        setEditMode(false);
    }

    const [height, setHeight] = useState<number>(0);
    const [maxHeight, setMaxHeight] = useState<number>(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            const initialHeight = contentRef.current.scrollHeight;

            if (initialHeight > 250) {
                setHideShowMore(true);
                setMaxHeight(initialHeight);
            }
            else {
                setHideShowMore(false)
                setMaxHeight(initialHeight);
            }
        }
    }, [contentRef, valueInput]);

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

            <ExpandableComponent></ExpandableComponent>

            <div className="flex flex-row justify-between items-center gap-3 w-full">
                <p className="font-bold text-lg text-foreground">Course {title}</p>
                <div className="flex flex-row gap-3 justify-center items-center p-3 2xl:px-3 2xl:py-0 rounded-md text-md font-semibold text-black dark:text-white cursor-pointer hover:bg-hover"
                    onClick={() => { setEditMode(!editMode) }}
                >
                    <div>
                        <FiEdit />
                    </div>

                    <p className="hidden 2xl:block">
                        Edit {title.toLowerCase()}
                    </p>
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
                        className="p-0 custom-quill-editor overflow-hidden max-w-full w-full bg-background min-h-[300px] max-h-[500px] relative flex flex-col justify-start items-center"

                    />

                ) : (
                    <div className="w-full">
                        <motion.div
                            ref={contentRef}
                            initial={{ height: 0 }}
                            transition={{ duration: 0.5 }}
                            animate={{
                                height: hideShowMore ? (isShow ? maxHeight : 250) : maxHeight,
                                maskImage: hideShowMore ?
                                    (isShow
                                        ? "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 100%, transparent 100%)"
                                        : "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 0 %, transparent 100 %)"
                                    )
                                    : ""
                            }}

                            dangerouslySetInnerHTML={{ __html: data }}
                            className={`overflow-hidden overflow-y-hidden text-ellipsis break-words ql-editor `}
                            style={{ overflowY: "hidden" }}>

                        </motion.div>
                        {hideShowMore && (
                            <div className="cursor-pointer text-center flex flex-col items-center justify-center font-bold border" onClick={() => { setIsShow(!isShow) }}>
                                {isShow ? (
                                    <div className="flex flex-col items-center justify-center font-bold">
                                        Show More
                                        <div>
                                            <MdExpandMore className="text-2xl" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center font-bold">
                                        Show Less
                                        <div>
                                            <MdExpandLess className="text-2xl" />
                                        </div>
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