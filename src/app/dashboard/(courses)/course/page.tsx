
import Course from "@/components/container/dashboard/course/course";
import { ICourse } from "@/types/course";
import axios from "axios";
import { cache } from "react";
import TestPage from "./test";

interface reponseCoursePage{
    first: number,
    prev: number,
    next: number,
    last: number,
    pages: number,
    items: number,
    data: ICourse[]
}

const Page = async() => {
    // const page = 1;
    // const limit = 2;
    
    // try {
    //     const response = await axios.get<reponseCoursePage>(`http://localhost:4000/courses?_page=${page}&_per_page=${limit}`);

    //     const data: ICourse[] | [] = await response.data.data;

    //     const totalPage = await response.data.pages;

    //     console.log(data);

    //     return (

    //         <Course input={data} page={page} totalPage={totalPage}></Course>
    //     );
    // } catch (error) {
        
    // }

    return (
        <TestPage>
        </TestPage>
    )


}
export default Page;