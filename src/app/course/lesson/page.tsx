import { Metadata } from "next";
import Lesson from "@/components/container/course/unit-lesson";

export const metadata: Metadata = {
  title: "Harvey | Lesson",
};

const Page = () => {
  return <Lesson></Lesson>;
};

export default Page;
