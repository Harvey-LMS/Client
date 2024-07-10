import Nav from "@/components/container/navbar/nav";

const InstructorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="harvey bg-background text-foreground w-full flex flex-row  ">
      <Nav>{children}</Nav>
    </div>
  );
};

export default InstructorLayout;
