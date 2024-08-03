import Nav from '@/components/container/navbar/nav';

const SingleCourseLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="w-full">
         <Nav>
            {children}
         </Nav>
      </div>
   );
};

export default SingleCourseLayout;
