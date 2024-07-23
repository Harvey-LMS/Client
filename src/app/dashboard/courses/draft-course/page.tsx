import DraftCourse from "@/components/container/dashboard/draft-course/draft-course";
import { IDraftCourse } from "@/types/course";

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
    const data:IDraftCourse[]|[] = await response.json();

    return ( <DraftCourse input={data} page={page} totalPage={totalPage}></DraftCourse> );
}
 
export default Page;