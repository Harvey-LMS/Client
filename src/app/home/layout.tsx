import NavbarComponent from "@/components/container/navbar-horizontal";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <NavbarComponent/>
            {children}
        </div>
    );
}

export default HomeLayout;