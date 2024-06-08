import Image from "next/image";
import Brand from "@/assets/Brand.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harvey | Confirm Email",
};

const ConfirmEmailPage = () => {
  return (
    <div className="flex flex-col justify-center text-base leading-8 ">
      <div
        className="flex flex-col px-8 py-7 mt-5 mb-4 max-w-full bg-white border-gray-300 
      rounded-3xl shadow-lg border w-[450px] max-md:px-5"
      >
        <div
          className="flex gap-3 justify-center items-start self-center pb-8 text-2xl
       font-semibold tracking-wide whitespace-nowrap text-zinc-700 text-opacity-90"
        >
          <Image
            alt="brand"
            loading="lazy"
            src={Brand}
            className="shrink-0 aspect-[0.98] w-[49px]"
          />
          <div className="mt-2.5">Harvey</div>
        </div>
        <div className="text-xl font-semibold leading-8 text-zinc-700 text-opacity-90  mb-3">
          <span className="text-2xl">Xác nhận Email</span>
          <br />
          <span className="text-sm font-normal !leading-none">
            Mã xác nhận đã được gửi đến *est@gmail.com, vui lòng nhấp vào tiếp
            tục để nhập mã
          </span>
        </div>
        <div className="mb-4">
          <Link href="/">
            <Button
              color="primary"
              className="w-full justify-center text-center items-center px-16 py-2 
          text-base font-medium tracking-wide leading-7 text-white uppercase rounded-md max-md:px-5"
            >
              Quay về trang chủ
            </Button>
          </Link>
        </div>
        <div className="justify-center text-center items-center">
          <span>Không nhận được mail? </span>
          <Link className="text-lime-600 hover:underline" href={"/"}>
            Gửi lại
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmailPage;
