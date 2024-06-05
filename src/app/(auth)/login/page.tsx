import Brand from "@/assets/Brand.svg";
import Login from "@/assets/Login.svg";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center mb-20 text-base leading-6 bg-slate-100">
      <div className="flex flex-col justify-center items-end self-center px-16 py-20 mt-7 max-w-full w-[1195px] max-md:pl-5">
        <Image
          alt="Harvey"
          loading="lazy"
          src={Login}
          className="flex mr-[610px] mb-[-600px]"
          width={550}
          height={500}
        />
        <div className="flex flex-col px-8 py-7 mt-5 mb-4 max-w-full bg-white rounded-md shadow-lg w-[450px] max-md:px-5">
          <div className="flex gap-3 justify-center items-start self-center pb-8 text-2xl font-semibold tracking-wide whitespace-nowrap text-zinc-700 text-opacity-90">
            <Image
              alt="brand"
              loading="lazy"
              src={Brand}
              className="shrink-0 aspect-[0.98] w-[49px]"
            />
            <div className="mt-2.5">Harvey</div>
          </div>
          <div className="text-xl font-semibold leading-8 text-zinc-700 text-opacity-90">
            Chào mừng bạn đến <span className="font-extrabold">Harvey</span>
          </div>
          <div className="text-sm tracking-normal text-zinc-700 text-opacity-60">
            Vui lòng đăng nhập tài khoản của bạn
          </div>
          <input
            placeholder="Email"
            className="justify-center px-3 py-4 mt-5 tracking-normal whitespace-nowrap rounded-md border border-solid border-zinc-700 border-opacity-20 text-zinc-700 text-opacity-40"
          ></input>
          <input
            placeholder="Mật khẩu"
            type="password"
            className="flex flex-col justify-center px-3 py-4 mt-5 tracking-normal rounded-md border border-solid border-zinc-700 border-opacity-20 text-zinc-700 text-opacity-40"
          ></input>
          <div className="flex gap-2 pb-4 text-sm tracking-normal">
            <div className="flex gap-2.5 p-2.5 text-zinc-700 text-opacity-90">
              <img
                alt=""
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ed11005b47c0c583d53c84b2d2c7b1a73188a6b0512868888e71354dbfab1a6?"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="my-auto">Ghi nhớ đăng nhập</div>
            </div>
            <Link
              href={"/"}
              className="flex-1 self-start mt-3 text-right text-lime-600"
            >
              Quên mật khẩu?
            </Link>
          </div>
          <Button
            variant={"defaultConfig"}
            className="justify-center text-center items-center px-16 py-2 text-base font-medium tracking-wide leading-7 text-white uppercase bg-lime-700 rounded-md max-md:px-5"
          >
            Đăng nhập
          </Button>
          <div className="mt-7 tracking-normal leading-6 text-center text-lime-600">
            <span className="text-zinc-700">Bạn chưa có tài khoản?</span>{" "}
            <Link href={"/"} className="text-lime-600">
              Tạo tài khoản mới
            </Link>
          </div>
        </div>
      </div>
      <img
        alt=""
        loading="lazy"
        src={
          "https://cdn.builder.io/api/v1/image/assets/TEMP/f9558039289ff29d134492aae32ab2e422ceaa81920e87fe2413484b18656e5f?"
        }
        className="w-full aspect-[5] max-md:max-w-full"
      />
    </div>
  );
};

export default LoginPage;
