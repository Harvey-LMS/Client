import NavbarHorizontal from "@/components/container/navbar/navbar-horizontal";
import NavbarVertical from "@/components/container/navbar/navbar-vertical";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="harvey bg-background text-foreground w-full">
      <NavbarHorizontal></NavbarHorizontal>
      <NavbarVertical>{children}</NavbarVertical>
    </div>
  );
};

export default DashboardLayout;
