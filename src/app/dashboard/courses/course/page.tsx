
import Course from "@/components/container/dashboard/course/course";
import { ICourse } from "@/types/course";
import { cache } from "react";

const Page = async() => {
    const page = 1;
    const limit = 2;
    const totalPage = 10;

    const response = await fetch("https://66656af6d122c2868e409b34.mockapi.io/Course", 
        {
            method: "GET",
            cache: "no-cache",
        }
    );
    const data:ICourse[]|[] = await response.json();

    
    return ( 
        <Course input={data} page={page} totalPage={totalPage}></Course>
);
}
export default Page;