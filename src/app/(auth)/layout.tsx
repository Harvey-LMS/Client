import React from "react";
import Image from "next/image";
import Line from "@/assets/Line.svg";
import Tree_1 from "@/assets/Pot_Tree_1.svg";
import Tree_2 from "@/assets/Pot_Tree_2.svg";

const Auth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container w-full px-4 h-screen harvey bg-background text-foreground bg-white ">
      <div className="h-full w-full">
        <div className="flex justify-center w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Auth;
