import CreateCoursePage from "@/components/container/course/create-course";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harvey | Course",
};

const Page = () => {
  return <CreateCoursePage></CreateCoursePage>;
};

export default Page;
