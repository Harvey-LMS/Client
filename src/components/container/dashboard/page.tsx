"use client"

import { Button } from "@nextui-org/react";
import { IoIosAdd } from "react-icons/io";
import RowData from "./course/course";
import Link from "next/link";
import { useState } from "react";


const Course =  ({ children }: { children: React.ReactNode }) => {
    const [isCourse, setIsCourse] = useState<boolean>(true);
    
    return ( 
    <div className="w-full flex flex-col gap-5 px-5">
        <div>
            <p className="font-bold text-3xl">Course</p>
        </div>

        <div className="flex flex-row justify-between items-center w-full border-b-1 border-b-gray-500 py-2">
            <div className="flex flex-row justify-center items-center gap-5 text-lg">
                <Link href={"/dashboard/course"} className={`cursor-pointer ${isCourse ? "font-bold text-primary ": ""}`}>
                <div onClick={()=> setIsCourse(!isCourse)}>
                        Course
                    </div>
                    </Link>
                <Link href={"/dashboard/draft-course"} className={`cursor-pointer ${isCourse ? " ": "font-bold text-primary"}`}>
                <div onClick={()=> setIsCourse(!isCourse)}>
                        Draft Course
                    </div>
                    </Link>
            </div>
            <Button variant="bordered" className="flex flex-row justify-center items-center gap-5 text-xl">
                <IoIosAdd />
                <p>Create</p>
            </Button>
        </div>
        <div>
            {children}
        </div>
    </div> 
    );
}
 
export default Course;