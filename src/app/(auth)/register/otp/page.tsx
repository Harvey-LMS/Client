"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Brand from "@/assets/Brand.svg";
import Image from "next/image";
import { Metadata } from "next";

import { useState } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { useEffect } from "react";
import OTPInput from "@/components/otp";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const RegisterOTP = () => {
  const email = "*est@gmail.com";
  const [open, setOpen] = useState(false);

  // const [erro, setErro] = useState("")
  const [erro, setErro] = useState("Mã xác thực không hợp lệ");

  const handleOpen = () => {
    // setOpen(!open);
    setOpen(true);
    console.log(open);
    setTimeout(() => {
      setOpen(false);
    }, 1500);
  };
  return (
    <div className="m-auto">
      <div className="flex flex-col max-md:ml-0 max-md:w-full bg-white border-gray-300 rounded-3xl shadow-lg border px-5 py-6">
        <div className="flex flex-col grow justify-center text-base leading-6 text-zinc-700 text-opacity-40  max-md:max-w-full ">
          <div className="flex gap-3 justify-between items-start self-center pb-8 text-2xl font-semibold tracking-wide whitespace-nowrap text-zinc-700">
            <Image
              alt="Harvey"
              loading="lazy"
              src={Brand}
              className="shrink-0 w-12 aspect-[0.98]"
            />
            <div className="mt-2.5">Harvey</div>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="text-3xl font-bold leading-8 text-black text-opacity-90 max-md:max-w-full">
              Xác thực Email
              <br />
              <span className="leading text-medium text-slate-400 font-normal">
                Chúng tôi đã gửi mã xác thực đến {email}
                <br />
                Vui lòng nhập mã OTP từ email vào bên dưới
              </span>
            </div>
            <OTPInput></OTPInput>
            <span className="text-danger">{erro}</span>
            <Button
              color="primary"
              className="justify-center items-center self-center px-16 py-2  max-w-full text-base 
                    font-medium tracking-wide leading-7 text-white uppercase w-[405px] max-md:px-5"
              onClick={handleOpen}
            >
              Xác thực
            </Button>
            <div className="tracking-normal leading-6 text-center text-lime-600 max-md:max-w-full">
              <span className="text-zinc-700">
                Chưa nhận được mã xác thực ?
              </span>{" "}
              <p className="text-lime-600 hover:underline cursor-pointer">
                Gửi lại
              </p>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={open}>
        <DialogContent className="rounded-lg">
          <DialogHeader className="flex flex-col justify-center items-center m-auto gap-3">
            <div className="flex flex-row gap-3 justify-center items-center text-2xl font-semibold tracking-wide whitespace-nowrap text-zinc-700">
              <Image
                alt="Harvey"
                loading="lazy"
                src={Brand}
                className="shrink-0 w-12 aspect-[0.98]"
              />
              <div className="">Harvey</div>
            </div>

            <DialogTitle className="flex flex-col justify-center items-center">
              <GoCheckCircleFill className="text-1xl w-16 h-16 rounded-full text-white  bg-primary" />
              <p className="mt-10">Đăng ký thành công</p>
            </DialogTitle>
            <DialogDescription>
              {/* <Button color="primary" className="justify-center items-center self-center px-16 py-2  max-w-full text-base 
                    font-medium tracking-wide leading-7 text-white uppercase  max-md:px-5"
                    onClick={handleOpen}>
                                Xác nhận
                            </Button> */}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegisterOTP;
