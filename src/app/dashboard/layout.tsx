import NavbarComponent from "@/components/container/navbar-horizontal";
import NavbarVerticalComponent from "@/components/container/navbar-vertical";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div>
                <NavbarComponent></NavbarComponent>
                <NavbarVerticalComponent>{children}</NavbarVerticalComponent>
        </div>

    );
}

export default DashboardLayout;