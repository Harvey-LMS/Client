"use client";
import Image from "next/image";

import Brand from "@/assets/Brand.svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion" 

const WelcomePage = () => {
  const router = useRouter();

  const [animation, setAnimation] = useState("visible");

  const variants = {
    initial: { opacity: 1, scale: 0 }, // Bắt đầu từ mờ và dưới vị trí cuối cùng
    visible: { opacity: 1, scale: 1 }, // Hiện ra và di chuyển lên vị trí cuối cùng
    exit: { opacity: 1, y: -900, scale: 0.5 } // Biến mất và di chuyển lên trên
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/welcome/create-profile");

      setAnimation("exit")
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <motion.div className="flex flex-col justify-center px-16 py-20 font-semibold tracking-normal  max-md:px-5" 
      variants={variants}
      initial="initial"
      animate={animation}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      >
      <div className="flex justify-center items-center px-16 mt-52 max-md:px-5 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[650px] -translate-y-[10px]">
          <div className="text-3xl font-extrabold leading-7 text-center max-md:max-w-full">
            <div className="text-green-500">WELCOME Lê Hoàng An,</div>
            <div className="mt-4 uppercase">SLOGAN...</div>
          </div>

          <div className="flex justify-center items-center px-16 mt-12 max-w-full text-4xl leading-5 text-center text-black w-[505px] max-md:px-5 max-md:mt-10">
            <div className="flex flex-col max-w-full w-[174px]">
              <Image
                alt="brand"
                loading="lazy"
                src={Brand}
                className="self-center w-full aspect-[1.22]"
              />
              <div className="mt-8">
                <span className="font-bold">HarveyOD</span>
              </div>
            </div>
          </div>
          {/* <div className="mt-12 text-xl leading-5 text-zinc-500 max-md:mt-10 max-md:max-w-full">
            Bạn có muốn cập nhật lại thông tin cá nhân không?
          </div>
          <Button
            color="primary"
            className="justify-center items-center px-16 py-3.5 mt-12 max-w-full text-sm font-medium 
            tracking-wide leading-6 text-white uppercase  rounded-md shadow-md w-[250px] max-md:px-5 max-md:mt-10"
          >
            cập nhật ngay
          </Button>

          <Button
            color="primary"
            className="justify-center items-center px-16 py-3.5 mt-2 max-w-full text-sm font-medium 
            tracking-wide leading-6 text-white uppercase  rounded-md shadow-md w-[250px] max-md:px-5 max-md:mt-10"
          >
            ĐI ĐẾN TRANg chủ
          </Button> */}
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomePage;
