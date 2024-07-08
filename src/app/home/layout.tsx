import NavbarHorizontal from "@/components/container/navbar/navbar-horizontal";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="harvey bg-background text-foreground w-full">
      <NavbarHorizontal />
      {children}
    </div>
  );
};

export default HomeLayout;
