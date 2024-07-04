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

    return (
        <div>
                <NavbarComponent></NavbarComponent>
                <div className="w-full flex flex-row justify-start items-start">
                    <NavbarVerticalComponent/>
                    <div className="w-full flex">
                        {children}
                    </div>
                </div>
        </div>

    );
}

export default DashboardLayout;
