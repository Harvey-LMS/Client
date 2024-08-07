import Nav from '@/components/container/navbar/navbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="bg-background text-foreground w-full flex flex-row  ">
         <Nav>{children}</Nav>
      </div>
   );
};

export default DashboardLayout;
