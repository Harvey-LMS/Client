"use client";
import Image from "next/image";
import LoginSVG from "@/assets/LoginSVG.svg";
import Brand from "@/assets/Brand.svg";
import Link from "next/link";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useEffect } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<any[] | null>(null);
  const [isShowErr, setIsShowErr] = useState(false);

  useEffect(() => {
    fetch("https://66651c7fd122c2868e3fcdef.mockapi.io/Account")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("=>Error:", error));
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setIsShowErr(true);
      return;
    }
    if (users != null) {
      const user = users.find(
        (user: any) => user.username === username && user.password === password
      );
      if (user) {
        console.log("Login successful");
        window.location.href = "/";
        // Navigate to the next page or set the user to the global state
      } else {
        console.log("Invalid username or password");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center text-base leading-6 max-md:flex-col">
      <div className="flex flex-col justify-center items-end self-center px-16 py-20 max-w-full w-[1195px] max-md:pl-1 max-md:w-full">
        <Image
          alt="Harvey"
          loading="lazy"
          src={LoginSVG}
          className="flex mr-[610px] mb-[-600px]"
          width={550}
          height={500}
        />
        <div className="flex flex-col px-8 py-7 mt-5 mb-4 max-w-full bg-white border-gray-300 rounded-3xl shadow-lg border w-[450px] max-md:px-5">
          <div className="flex gap-3 max-md:hidden justify-center items-start self-center pb-8 text-2xl font-semibold tracking-wide whitespace-nowrap text-zinc-700 text-opacity-90">
            <Image
              alt="brand"
              loading="lazy"
              src={Brand}
              className="shrink-0 aspect-[0.98] w-[49px]"
            />
            <div className="mt-2.5">HarveyOD</div>
          </div>
          <div className="text-xl font-semibold leading-8 text-zinc-700 text-opacity-90">
            Chào mừng bạn đến <span className="font-extrabold">HarveyOD</span>
          </div>
          <div className="text-sm tracking-normal text-zinc-700 text-opacity-60">
            Vui lòng đăng nhập tài khoản của bạn
          </div>
          {/* <input
                placeholder="Email"
                className="justify-center px-3 py-4 mt-5 tracking-normal whitespace-nowrap rounded-md border border-solid border-zinc-700 border-opacity-20 text-zinc-700 text-opacity-40"
              ></input> */}
          <div className="mt-5">
            <Input
              variant="bordered"
              type="email"
              label="Tên đăng nhập"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <Input
              className="text-black max-md:max-w-full"
              variant="bordered"
              label="Mật khẩu"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex gap-2 pb-4 text-sm tracking-normal">
            <div className="flex gap-2.5 p-2.5 text-zinc-700 text-opacity-90">
              <input type="checkbox" />
              <div className="my-auto">Ghi nhớ đăng nhập</div>
            </div>
            <Link
              href={"/login/forgot-password"}
              className="flex-1 self-start mt-3 text-right text-lime-600 hover:underline"
            >
              Quên mật khẩu?
            </Link>
          </div>

          <Link href="/">
            <Button
              color="primary"
              className="justify-center text-center max-w-full w-full items-center px-16 py-2 text-base font-medium tracking-wide leading-7 
              text-white uppercase rounded-md max-md:px-5"
              onClick={(e) => handleLogin(e)}
            >
              Đăng nhập
            </Button>
          </Link>

          <div className="mt-7 tracking-normal leading-6 text-center text-lime-600">
            <span className="text-zinc-700">Bạn chưa có tài khoản?</span>{" "}
            <Link href={"/register"} className="text-lime-600 hover:underline">
              Tạo tài khoản mới
            </Link>
          </div>
          {isShowErr && (
            <span className="text-center text-md text-red-700 m-3">
              Hãy nhập đầy đủ thông tin
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
