"use client"

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

interface PriceFieldCourseProps {
    title: string | "";
    value: string | "0.00";
}

const PriceFieldCourse: React.FC<PriceFieldCourseProps> = ({ title, value }: PriceFieldCourseProps) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [valueInput, setValueInput] = useState<string | "0.00">(value);

    const [data, setData] = useState<string | "0.00">(value);


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
                    <Input type="number" className="p-0 w-full border border-border rounded-md  group-data-[focus=true]:bg-white"
                        classNames={{ inputWrapper: " group-data-[focus=true]:bg-white group-data-[focus=true]:border-primary" }}
                        value={valueInput}
                        placeholder={data ? data : "Enter value"}
                        onChange={(e) => setValueInput(e.target.value)}
                        min={0}
                        step={0.01}
                        endContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">$</span>
                            </div>
                        }
                    />
                ) : (
                    <div>
                            {`${valueInput}$`}
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
 
export default PriceFieldCourse;