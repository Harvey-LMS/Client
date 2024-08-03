
import Course from "@/components/container/dashboard/course/course";
import { ICourse } from "@/types/course";
import axios from "axios";
import { cache } from "react";
import Courses from "@/components/container/dashboard/courses";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard - Courses",
    description: "List of all courses"
}

interface reponseCoursePage{
    first: number,
    prev: number,
    next: number,
    last: number,
    pages: number,// TotalPage
    items: number,
    data: ICourse[]
}

const Page = async() => {


    const page = 1; // now Page of TotalPage
    const limit = 2;

    try {
        const response = await axios.get<reponseCoursePage>(`http://localhost:4000/courses?_page=${page}&_per_page=${limit}`);

        const data: ICourse[] | [] = response.data.data;

        const totalPage = response.data.pages;

        return (
            <Courses course={data} coursePage={page} courseTotalPage={totalPage}>
            </Courses>

        );
    } catch (error) {

    }




}
export default Page;