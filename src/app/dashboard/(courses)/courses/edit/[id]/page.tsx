import CourseGeneral from "@/components/container/course/view/courseGeneral";
import CourseEdit from "@/components/container/course/view/edit/courseEdit";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Course Edit",
    description: "Course Edit",
  };

const Page = async() => {
    

    return ( 
        <CourseEdit>

        </CourseEdit>
    );
}

export default Page;