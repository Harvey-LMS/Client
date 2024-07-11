import Courses from "@/components/container/dashboard/courses";

const CourseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col gap-5 px-5">
        <Courses></Courses>
        {children}
    </div>

  );
};


export default CourseLayout;