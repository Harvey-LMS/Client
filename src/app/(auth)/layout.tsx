import React from "react";
import Image from "next/image";
import Line from "@/assets/Line.svg";
import Tree_1 from "@/assets/Pot_Tree_1.svg";
import Tree_2 from "@/assets/Pot_Tree_2.svg";

const AuthLogin = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen overflow-hidden">
      {/* content */}
      <div className="flex flex-col mt-16 z-10 relative">
        {children}
      </div>

      {/* Layout */}
      <div className="w-full">

        <div className="relative -top-10 w-full flex flex-row justify-between items-end px-10 sm:px-60 z-10">
          <div className="flex flex-row justify-center items-end gap-3">
            <Image src={Tree_1} alt="Tree" className="w-32 max-sm:w-16" />
            <Image src={Tree_1} alt="Tree" className="w-16 max-sm:w-10" />
          </div>
          <Image src={Tree_2} alt="Tree" className="max-sm:w-24" />
        </div>
        <div className="relative -top-32">
          <Image src={Line} alt="footer" className="w-full" />
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
