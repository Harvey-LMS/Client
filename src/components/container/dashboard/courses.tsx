"use client"

import { Button } from "@nextui-org/react";
import { IoIosAdd } from "react-icons/io";
import RowData from "./course/course";
import Link from "next/link";
import { Suspense, useState } from "react";
import Loading from "@/app/loading";


const Courses = () => {
    const [isCourse, setIsCourse] = useState<boolean>(true);

    return (
        <div>
            <div>
                <p className="font-bold text-3xl">Course</p>
            </div>

            <div className="flex flex-row justify-between items-center w-full border-b-1 border-b-gray-500 py-2">
                <div className="flex flex-row justify-center items-center gap-5 text-lg">
                    <Link href={"/dashboard/courses/course"} className={`cursor-pointer ${isCourse ? "font-bold text-primary " : ""}`}>
                        <div onClick={() => setIsCourse(true)}>
                            Course
                        </div>
                    </Link>
                    <Link href={"/dashboard/courses/draft-course"} className={`cursor-pointer ${isCourse ? " " : "font-bold text-primary"}`}>
                        <div onClick={() => setIsCourse(false)}>
                            Draft Course
                        </div>
                    </Link>
                </div>
                <Button variant="bordered" className="flex flex-row justify-center items-center gap-5 text-xl">
                    <IoIosAdd />
                    <p>Create</p>
                </Button>
            </div>
        </div>
    );
}

export default Courses;