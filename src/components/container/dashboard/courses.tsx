"use client"

import { Button } from "@nextui-org/react";
import { IoIosAdd } from "react-icons/io";
import RowData from "./course/course";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/app/loading";
import { usePathname, useRouter } from "next/navigation";
import path from "path";


const Courses = () => {
    const pathName = usePathname();
    const route = pathName.split("/")[3];
    
    return (
        <div>
            <div>
                <p className="font-bold text-3xl">Course</p>
            </div>

            <div className="flex flex-row justify-between items-center w-full border-b-1 border-b-gray-500 py-2">
                <div className="flex flex-row justify-center items-center gap-5 text-lg">
                    <Link href={"/dashboard/courses/course"} className={`cursor-pointer ${route === "course" ? "font-bold text-primary " : ""}`}>
                        <div>
                            Course
                        </div>
                    </Link>
                    <Link href={"/dashboard/courses/draft-course"} className={`cursor-pointer ${route === "draft-course" ? "font-bold text-primary " : ""}`}>
                        <div>
                            Draft Course
                        </div>
                    </Link>
                </div>
                <Button variant="ghost"  className="flex flex-row justify-center items-center text-xl">
                    <IoIosAdd />
                    <p className="font-semibold">Create</p>
                </Button>
            </div>
        </div>
    );
}

export default Courses;