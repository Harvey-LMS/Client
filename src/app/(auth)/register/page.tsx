import Image from "next/image";
import Register from "@/assets/Register.svg";
import Brand from "@/assets/Brand.svg";
import Underline from "@/assets/underline.svg";
import { Button } from "@/components/ui/button";

const RegisterPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center rounded-md shadow-sm max-md:px-5 sm:mt-5 md:shadow-none">
      <div className="flex flex-row justify-center gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col max-md:ml-0 max-md:w-full">
          <Image
            alt="Harvey"
            loading="lazy"
            src={Register}
            className="aspect-square max-md:mt-10 max-md:max-w-full max-sm:hidden"
            width={600}
          />
        </div>
        <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full bg-white border-gray-300 rounded-3xl shadow-lg border px-5 py-6">
          <div className="flex flex-col grow justify-center text-base leading-6 text-zinc-700 text-opacity-40  max-md:max-w-full ">
            <div className="flex gap-3 justify-between items-start self-center pb-8 text-2xl font-semibold tracking-wide whitespace-nowrap text-zinc-700 text-opacity-90 ">
              <Image
                alt="Harvey"
                loading="lazy"
                src={Brand}
                className="shrink-0 w-12 aspect-[0.98]"
              />
              <div className="mt-2.5">Harvey</div>
            </div>
            <div className="text-xl font-semibold leading-8 text-zinc-700 text-opacity-90 max-md:max-w-full">
              Chào mừng bạn đến <span className="font-extrabold">Harvey</span>
            </div>
            <input
              className="justify-center px-3 py-4 mt-6 tracking-normal rounded-md border border-solid border-zinc-700 border-opacity-20 max-md:max-w-full text-black"
              placeholder="Họ và tên"
            ></input>
            <input
              className="justify-center px-3 py-4 mt-3.5 tracking-normal whitespace-nowrap rounded-md border border-solid border-zinc-700 border-opacity-20 max-md:pr-5 max-md:max-w-full text-black"
              placeholder="Email"
            ></input>
            <input
              className="justify-center px-3 py-4 mt-3.5 tracking-normal rounded-md border border-solid border-zinc-700 border-opacity-20 max-md:pr-5 max-md:max-w-full text-black"
              placeholder="Mật khẩu"
            ></input>
            <input
              className="justify-center px-3 py-4 mt-3.5 tracking-normal rounded-md border border-solid border-zinc-700 border-opacity-20 max-md:pr-5 max-md:max-w-full text-black"
              placeholder="Nhập lại mật khẩu"
            ></input>
            <Button className="justify-center items-center self-center px-16 py-2 mt-3.5 max-w-full text-base font-medium tracking-wide leading-7 text-white uppercase w-[405px] max-md:px-5">
              Đăng Ký
            </Button>
            <div className="mt-7 tracking-normal leading-6 text-center text-lime-600 max-md:max-w-full">
              <span className="text-zinc-700">Bạn đã có tài khoản?</span>{" "}
              <span className="text-lime-600">Đăng nhập</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
