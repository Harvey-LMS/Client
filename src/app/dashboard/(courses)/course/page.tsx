
import Course from "@/components/container/dashboard/course/course";
import { ICourse } from "@/types/course";
import axios from "axios";
import { cache } from "react";

interface reponseCoursePage{
    first: number,
    prev: number|null,
    next: number|null,
    last: number|null,
    pages: number,
    items: number,
    data: ICourse[]
}

const Page = async() => {
    const page = 1;
    const limit = 2;
    

    const response = await axios.get<reponseCoursePage>(`http://localhost:4000/courses?_page=${page}&_per_page=${limit}`);
    // ?_page=1&_per_page=25

    const data:ICourse[]|[] = await response.data.data;
    
    const totalPage = await response.data.pages;
    
    return ( 
        
        <Course input={data} page={page} totalPage={totalPage}></Course>
);
}
export default Page;