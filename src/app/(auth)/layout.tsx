import React from "react";
import Image from "next/image";
import Underline from "@/assets/underline.svg";

const AuthLogin = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen">
      {children}
      {/* footer */}
    </div>
  );
};

export default AuthLogin;
