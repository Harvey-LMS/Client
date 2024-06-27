"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import Brand from "@/assets/Brand.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import { useRouter } from "next/navigation";

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

// export const metadata: Metadata = {
//   title: "Harvey | Forgot Password",
// };

interface Errors {
  isError: {
    password: boolean;
    passwordConfirm: boolean;
    isChangePwd: boolean;
  };
  errorMsg: {
    password: string;
    passwordConfirm: string;
    isChangePwd: string;
  };
}

const ChangePasswordPage = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState<Errors>({
    isError: {
      password: false,
      passwordConfirm: false,
      isChangePwd: false,
    },
    errorMsg: {
      password: "",
      passwordConfirm: "",
      isChangePwd: "",
    },
  });

  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

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
        if (
          e.target.value.match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          )
        ) {
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
        } else {
          setErrors({
            isError: {
              ...errors.isError,
              password: true,
            },
            errorMsg: {
              ...errors.errorMsg,
              password:
                "Passwords must have at least 8 characters, uppercase letters, special characters",
            },
          });
        }
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
          password: "Password is required",
        },
      });
    } else {
      if (
        password.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        )
      ) {
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
      } else {
        setErrors({
          isError: {
            ...errors.isError,
            password: true,
          },
          errorMsg: {
            ...errors.errorMsg,
            password:
              "Passwords must have at least 8 characters, uppercase letters, special characters",
          },
        });
      }
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
          passwordConfirm: "Password confirm is required",
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
          passwordConfirm:
            "The confirmed password does not match the new password",
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

  const handleChangePwd = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "" || passwordConfirm === "") {
      setErrors({
        isError: {
          ...errors.isError,
          isChangePwd: true,
        },
        errorMsg: {
          ...errors.errorMsg,
          isChangePwd: "Please enter complete information",
        },
      });
    } else {
      if (password === passwordConfirm) {
        setOpenModal(true);
        setTimeout(() => {
          setOpenModal(false);
        }, 2000);
        router.push("/login");
      } else {
        setErrors({
          isError: {
            ...errors.isError,
            isChangePwd: true,
            passwordConfirm: false,
          },
          errorMsg: {
            ...errors.errorMsg,
            isChangePwd:
              "The confirmed password does not match the new password",
            passwordConfirm: "",
          },
        });
      }
    }
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
            src={Brand}
            className="shrink-0 aspect-[0.98] w-[49px]"
            priority={true}
          />
          <div className="mt-2.5">HarveyOD</div>
        </div>
        <div className="text-xl font-semibold leading-8 text-zinc-700 text-opacity-90  mb-2">
          <span className="text-2xl">Change password</span>
          <br />
          <span className="text-sm font-normal !leading-none">
            Enter your new password in the box below to retrieve it
          </span>
        </div>
        {errors.isError.isChangePwd && (
          <span className="text-sm text-danger-600 mb-2">
            {errors.errorMsg.isChangePwd}
          </span>
        )}
        <div className="mb-4">
          <Input
            aria-label="password"
            size="md"
            type="password"
            label="New password"
            variant="bordered"
            className="mb-2"
            onBlur={checkPassword}
            onChange={handlePassword}
            isInvalid={errors.isError.password}
            errorMessage={errors.errorMsg.password}
          ></Input>
          <Input
            aria-label="passwordConfirm"
            size="md"
            type="password"
            label="Confirm new password"
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
            onClick={(e) => handleChangePwd(e)}
          >
            Confirm
          </Button>
          {/* </Link> */}
        </div>

        <div className="justify-center text-center items-center">
          <Link className="text-lime-600 hover:underline" href={"/login"}>
            {"< "}Back to login
          </Link>
        </div>
      </div>
      <Dialog open={openModal}>
        <DialogContent className="rounded-lg">
          <DialogHeader className="flex flex-col justify-center items-center m-auto gap-3">
            <div className="flex flex-row gap-3 justify-center items-center text-2xl font-semibold tracking-wide whitespace-nowrap text-zinc-700">
              <Image
                alt="Harvey"
                src={Brand}
                className="shrink-0 w-12 aspect-[0.98]"
                priority={true}
              />
              <div className="">HarveyOD</div>
            </div>
            <DialogTitle className="flex flex-col justify-center items-center">
              <GoCheckCircleFill className="text-1xl w-16 h-16 rounded-full text-white  bg-primary" />
              <p className="mt-10">Password change successfully</p>
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChangePasswordPage;
