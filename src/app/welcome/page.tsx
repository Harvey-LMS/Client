import { Button } from "@/components/ui/button";
import Image from "next/image";

import Brand from "@/assets/Brand.svg";

const WelcomePage = () => {
  return (
    <div className="flex flex-col justify-center px-16 py-20 font-semibold tracking-normal  max-md:px-5">
      <div className="flex justify-center items-center px-16 mt-52 max-md:px-5 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[650px] -translate-y-[104px]">
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
              <div className="mt-3.5">
                <span className="font-bold">HarveyOD</span>
              </div>
            </div>
          </div>
          <div className="mt-12 text-xl leading-5 text-zinc-500 max-md:mt-10 max-md:max-w-full">
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
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
