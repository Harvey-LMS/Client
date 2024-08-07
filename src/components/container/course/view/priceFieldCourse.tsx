"use client"

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

interface PriceFieldCourseProps {
    title: string | "";
    value: number ;
    type?: "price" | "discount";
}

const PriceFieldCourse: React.FC<PriceFieldCourseProps> = ({ title, value, type = "price" }: PriceFieldCourseProps) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [valueInput, setValueInput] = useState<number>(value);

    const [data, setData] = useState<number>(value);


    const handleSave = () => {
        setData(valueInput);
        setEditMode(false);
    }

    const handleCancel = () => {
        setValueInput(data);
        setEditMode(false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numericValue = Number(value);

        if (isNaN(numericValue) || numericValue < 0) {
            return;
        }

        if (type === "price"){
            setValueInput(numericValue);
        }
        else if (type === "discount"){
            if (numericValue <= 100 && numericValue >= 0){
                setValueInput(numericValue);
            }
        }


  
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === '-' || e.key === '+' || e.key === 'e') {
            e.preventDefault();
        }
    }

    return (



        <div className="my-3 flex flex-col justify-start items-start w-full px-3 py-2 pb-3 border rounded-lg bg-gray-100 dark:bg-stone-950">



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
                    <Input type="number" className="p-0 w-full border border-border rounded-md  group-data-[focus=true]:bg-white"
                        classNames={{ inputWrapper: " group-data-[focus=true]:bg-white group-data-[focus=true]:border-primary" }}
                        value={valueInput.toString()}
                        placeholder={data ? data.toString() : "Enter value"}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        min={0}
                        step={1}
                        max={type === "price" ? "" : 100}
                        endContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">{type === "price" ? "$" : "%"}</span>
                            </div>
                        }
                    />
                ) : (
                    <div>
                            {`${valueInput}${type === "price" ? "$" : "%"}`}
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