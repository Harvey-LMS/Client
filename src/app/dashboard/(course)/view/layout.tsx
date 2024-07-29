import CourseDetail from 'src/components/container/layout/CourseDetail';

const SingleCourseLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="w-full">
         <CourseDetail></CourseDetail>
         {children}
      </div>
   );
};

export default SingleCourseLayout;
