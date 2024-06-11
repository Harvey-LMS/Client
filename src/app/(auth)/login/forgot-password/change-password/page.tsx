"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import Brand from "@/assets/Brand.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Harvey | Forgot Password",
// };

interface Errors {
  isError: {
    password: boolean;
    passwordConfirm: boolean;
  };
  errorMsg: {
    password: string;
    passwordConfirm: string;
  };
}

const ChangePasswordPage = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState<Errors>({
    isError: {
      password: false,
      passwordConfirm: false,
    },
    errorMsg: {
      password: "",
      passwordConfirm: "",
    },
  });

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errors.isError.password) {
      if (password !== "") {
        setErrors({
          isError: {
            ...errors.isError,
            password: false,
          },
          errorMsg: {
            ...errors.errorMsg,
            password: "",
          },
        });
      }
    }
  };

  const checkPassword = () => {
    if (password === "") {
      setErrors({
        isError: {
          ...errors.isError,
          password: true,
        },
        errorMsg: {
          ...errors.errorMsg,
          password: "Mật khẩu không được để trống",
        },
      });
    }
  };

  const handlePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
    if (errors.isError.passwordConfirm) {
      if (passwordConfirm !== "") {
        setErrors({
          isError: {
            ...errors.isError,
            passwordConfirm: false,
          },
          errorMsg: {
            ...errors.errorMsg,
            passwordConfirm: "",
          },
        });
      }
    }
  };

  const checkPasswordConfirm = () => {
    if (passwordConfirm === "") {
      setErrors({
        isError: {
          ...errors.isError,
          passwordConfirm: true,
        },
        errorMsg: {
          ...errors.errorMsg,
          passwordConfirm: "Mật khẩu không được để trống",
        },
      });
    } else if (password !== passwordConfirm) {
      setErrors({
        isError: {
          ...errors.isError,
          passwordConfirm: true,
        },
        errorMsg: {
          ...errors.errorMsg,
          passwordConfirm: "Mật khẩu xác nhận chưa khớp với mật khẩu mới",
        },
      });
    } else {
      setErrors({
        isError: {
          ...errors.isError,
          passwordConfirm: false,
        },
        errorMsg: {
          ...errors.errorMsg,
          passwordConfirm: "",
        },
      });
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
  };

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
        <div className="text-xl font-semibold leading-8 text-zinc-700 text-opacity-90  mb-2">
          <span className="text-2xl">Đổi mật khẩu</span>
          <br />
          <span className="text-sm font-normal !leading-none">
            Hãy nhập mật khẩu mới của bạn vào ô bên dưới để lấy lại mật khẩu
          </span>
        </div>
        <div className="mb-4">
          <Input
            size="md"
            type="password"
            label="Mật khẩu mới"
            variant="bordered"
            className="mb-2"
            onBlur={checkPassword}
            onChange={handlePassword}
            isInvalid={errors.isError.password}
            errorMessage={errors.errorMsg.password}
          ></Input>
          <Input
            size="md"
            type="password"
            label="Xác nhận mật khẩu"
            variant="bordered"
            onBlur={checkPasswordConfirm}
            onChange={handlePasswordConfirm}
            isInvalid={errors.isError.passwordConfirm}
            errorMessage={errors.errorMsg.passwordConfirm}
          ></Input>
        </div>

        <div className="mb-4">
          {/* <Link href="/login/forgot-password/confirm"> */}
          <Button
            color="primary"
            className="w-full justify-center text-center items-center px-16 py-2 
          text-base font-medium tracking-wide leading-7 text-white uppercase rounded-md max-md:px-5"
          >
            Xác nhận
          </Button>
          {/* </Link> */}
        </div>

        <div className="justify-center text-center items-center">
          <Link className="text-lime-600 hover:underline" href={"/login"}>
            {"< "}Trở lại trang đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
