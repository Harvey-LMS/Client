import Nav from '@/components/container/navbar/nav';
import CourseDetail from 'src/components/container/layout/CourseDetail';

const SingleCourseLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="w-full">
         <Nav>
            <CourseDetail></CourseDetail>
            {children}
         </Nav>
      </div>
   );
};

export default SingleCourseLayout;
