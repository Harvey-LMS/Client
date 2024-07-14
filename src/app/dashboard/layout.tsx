import Nav from "@/components/container/navbar/nav";
import NavbarHorizontal from "@/components/container/navbar/navbar-horizontal";
import NavbarVertical from "@/components/container/navbar/navbar-vertical";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background text-foreground w-full flex flex-row  ">
      <Nav>
      {children}
      </Nav>
      
    <div className="harvey bg-background text-foreground w-full flex flex-row  ">
    </div>
  );
};

export default DashboardLayout;
