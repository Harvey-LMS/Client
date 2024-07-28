

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background text-foreground w-full">
      {children}
    </div>
  );
};

export default HomeLayout;
