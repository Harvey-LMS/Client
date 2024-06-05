import React from "react";
import Image from "next/image";
import Line from "@/assets/Line.svg";
import Tree_1 from "@/assets/Pot_Tree_1.svg";
import Tree_2 from "@/assets/Pot_Tree_2.svg";

const AuthLogin = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen p-10">
      <div className="p-10 h-full ">
        <div className="flex justify-center h-full ">
          {children}
        </div>
      </div>
      {/* content */}
    </div>
  );
};

export default AuthLogin;
