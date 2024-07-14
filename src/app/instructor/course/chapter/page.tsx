import CreateChapterPage from "@/components/container/course/create-chapter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harvey | Chapter",
};

const Page = () => {
  return <CreateChapterPage></CreateChapterPage>;
};

export default Page;
