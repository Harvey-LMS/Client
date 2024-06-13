"use client";
import Image from "next/image";
import Brand from "@/assets/Brand.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import OTPInput from "@/components/otp";
import React, { useEffect, useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GoCheckCircleFill } from "react-icons/go";
import { useRouter } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Harvey | Confirm Email",
// };

const generateOTP = () => {
  let otp = Math.floor(100000 + Math.random() * 900000);
  return otp;
};

const otpTEMP = {
  otp: generateOTP(),
};

const ConfirmEmailPage = () => {
  const [isShowErr, setIsShowErr] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(localStorage.getItem("email") || "");
  }, []);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const [count, setCount] = useState(1);
  const [isCount, setIsCount] = useState(false);
  const [error, setError] = useState("");

  const handleConfirmOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpTEMP.otp.toString() === otpValue) {
      setOpenModal(true);
      setTimeout(() => {
        setOpenModal(false);
      }, 1500);
      router.push("/login/forgot-password/change-password");
    } else {
      setCount(count + 1);
      if (count < 3) {
        setError("Mã xác thực không hợp lệ");
        setIsCount(true);
      } else if (count === 3) {
        setError("Bạn đã nhập sai OTP 3 lần, vui lòng thử lại sau 5 phút");
        setIsCount(true);
      }
    }
  };

  const [otpValue, setOtpValue] = useState("");

  const handleOtpValue = (e: string) => {
    setOtpValue(e);
  };
  console.log("otp:", otpTEMP.otp.toString());

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
            Mã xác nhận đã được gửi đến ***{email.slice(-13)}, vui lòng nhấp mã
            vào để xác thực
          </span>
        </div>
        {/* <OTPInput></OTPInput> */}
        <InputOTP
          value={otpValue}
          onChange={handleOtpValue}
          maxLength={6}
          containerClassName="text-black justify-center items-center text-center"
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        {isCount && (
          <span className="text-danger-600 text-sm text-center mt-4">
            {error}
          </span>
        )}
        <div className="mb-4 mt-4">
          <Link href="/login/forgot-password/confirm">
            <Button
              color="primary"
              className="max-w-full w-full justify-center text-center items-center px-16 py-2 
          text-base font-medium tracking-wide leading-7 text-white uppercase rounded-md max-md:px-5"
              onClick={(e) => handleConfirmOTP(e)}
            >
              Xác thực
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
      <Dialog open={openModal}>
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
              <p className="mt-10">Xác thực thành công</p>
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConfirmEmailPage;
