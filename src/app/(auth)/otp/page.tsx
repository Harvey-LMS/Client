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
import { useRouter } from "next/navigation";

const generateOTP = () => {
  let otp = Math.floor(100000 + Math.random() * 900000);
  console.log(otp);
  return otp;
};

const otpTEMP = {
  otp: generateOTP(),
};

const RegisterOTP = () => {
  // const email = "*est@gmail.com";
  const [email, setEmail] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [erro, setErro] = useState("");

  const [disableButton, setDisableButton] = useState(true);

  const [otp, setOtp] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [canRetry, setCanRetry] = useState(true);
  const [retryTimeLeft, setRetryTimeLeft] = useState(0);
  const [canResend, setCanResend] = useState(false);
  const [resendTimeLeft, setResendTimeLeft] = useState(60);
  const router = useRouter();

  useEffect(() => {
    setEmail(localStorage.getItem("email") || "");
  }, []);

  const handleOtp = (e: string) => {
    setOtp(e);
  };

  const handleResendOTP = () => {
    if (!canRetry) return;
    setCanResend(false);
    setResendTimeLeft(60);
  };

  useEffect(() => {
    if (otp.length === 6) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [otp]);

  useEffect(() => {
    let retryTimer: NodeJS.Timeout;
    if (!canRetry && retryTimeLeft > 0) {
      retryTimer = setInterval(() => {
        setRetryTimeLeft((prev) => prev - 1);
        setErro(
          `You have entered the wrong OTP code more than 3 times. Please try again in ${retryTimeLeft} seconds.`
        );
      }, 10);
    } else if (retryTimeLeft === 0) {
      setCanRetry(true);
      setAttempts(0);
      setErro("");
    }

    return () => clearInterval(retryTimer);
  }, [canRetry, retryTimeLeft]);

  useEffect(() => {
    let resendTimer: NodeJS.Timeout;
    if (!canResend && resendTimeLeft > 0) {
      resendTimer = setInterval(() => {
        setResendTimeLeft((prev) => prev - 1);
      }, 10);
    } else if (resendTimeLeft === 0) {
      setCanResend(true);
    }

    return () => clearInterval(resendTimer);
  }, [canResend, resendTimeLeft]);

  const handleClick = () => {
    if (erro !== "") {
      setErro("");
      setOtp("");
    }
  };

  const handleOpen = () => {
    // API

    // Fail accept countOTP++
    if (otp === otpTEMP.otp.toString()) {
      setOpenModal(true);

      const openModalTimeOut = setTimeout(() => {
        setOpenModal(false);
      }, 1500);

      openModalTimeOut;
      router.push("/welcome");
      return () => {
        clearTimeout(openModalTimeOut);
        // Direct to next page
      };
    } else {
      setErro(
        "The OTP code is incorrect, you have " + (2 - attempts) + " attempts left."
      );
      setOtp("");
      setAttempts((prev) => prev + 1);
      setCanResend(false);
      if (attempts + 1 >= 3) {
        setErro(
          `You have entered the wrong OTP code more than 3 times. Please try again in 300 seconds.`
        );
        setCanRetry(false);
        setRetryTimeLeft(299); // 5 minutes in seconds
      }
    }
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
                Email Verification.
              <br />
              <span className="leading text-medium text-slate-400 font-normal">
                We have sent a verification code to ***{email.slice(-13)}
                <br />
                Please enter the OTP code from your email below.
              </span>
            </div>
            <InputOTP
              disabled={!canRetry}
              value={otp}
              onChange={handleOtp}
              onClick={handleClick}
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
            <span className="text-danger">{erro}</span>
            <Button
              color="primary"
              className={
                `justify-center items-center self-center px-16 py-2  max-w-full text-base 
                    font-medium tracking-wide leading-7 text-white uppercase w-full max-md:px-5 disabled:opacity-50` +
                `${disableButton ? " cursor-not-allowed" : " cursor-pointer"}`
              }
              onClick={handleOpen}
              disabled={disableButton}
            >
              Verify
            </Button>
            <div className="tracking-normal leading-6 text-center text-lime-600 max-md:max-w-full break-normal text-sm">
              <p className="text-zinc-700 ">
                {`Haven't received the verification code yet? `}
              </p>{" "}
              <div onClick={handleResendOTP} className="cursor-pointer">
                <p
                  className={`text-lime-600 w-fix${
                    !canResend
                      ? "cursor-auto"
                      : "cursor-pointer hover:underline"
                  }`}
                  onClick={handleResendOTP}
                >
                  {!canResend ? `Resend after ${resendTimeLeft}s` : "Resend"}
                </p>
              </div>
            </div>
          </div>
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
                className="shrink-0 aspect-[0.98]"
              />
              <div className="">Harvey</div>
            </div>
            <DialogTitle className="flex flex-col justify-center items-center">
              <GoCheckCircleFill className="text-1xl w-16 h-16 rounded-full text-white  bg-primary" />
              <p className="mt-10">Registration successful</p>
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
