import Course from "@/components/container/dashboard/page";

const CourseLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <Course>
        {children}
      </Course> 
    );
  };
  
  
  export default CourseLayout;