"use client";

import Image from "next/image";
import RegisterSVG from "@/assets/Register.svg";
import Brand from "@/assets/Brand.svg";
import Link from "next/link";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";

import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";

import React, { use, useEffect, useRef, useState } from "react";


import { useRouter } from 'next/navigation';

import { checkEmail, checkUsername, checkPassword, checkConfirmPassword } from "@/app/(auth)/register/handle"
import { error } from "console";

interface Errors {
  isError: {
    username: boolean;
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
  },
  errorMessage: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
}

interface User {
  username: string,
  gmail: string,
  password: string

}

const Register = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({
    isError: {
      username: false,
      email: false,
      password: false,
      confirmPassword: false
    },
    errorMessage: {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const [userName, setUserName] = useState<string>("")

  const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)

    if (errors.isError.username) {
      if (e.target.value.match(/^(?=.{3,20}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9_-]+([^._-])$/)) {
        setErrors({
          isError: {
            ...errors.isError,
            username: false
          },
          errorMessage: {
            ...errors.errorMessage,
            username: ""
          }
        })
      }
    }
  }

  const blurUsername = () => {
    checkUsername(userName).then((result) => {
      if (result === ""){
        setErrors({
          isError: {
            ...errors.isError,
            username: false
          },
          errorMessage: {
            ...errors.errorMessage,
            username: ""
          }
        })
      }
      else {
        setErrors({
          isError: {
            ...errors.isError,
            username: true
          },
          errorMessage: {
            ...errors.errorMessage,
            username: result
          }
        })
      
      }
    }
  )
  }

  const [email, setEmail] = useState<string>("")

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)

    if (errors.isError.email) {
      if (e.target.value.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/i)) {
        setErrors({
          isError: {
            ...errors.isError,
            email: false
          },
          errorMessage: {
            ...errors.errorMessage,
            email: ""
          }
        })
      }
    }
  }

  const blurEmail = () => {
    checkEmail(email).then((result) => {
      if (result === ""){
        setErrors({
          isError: {
            ...errors.isError,
            email: false
          },
          errorMessage: {
            ...errors.errorMessage,
            email: ""
          }
        })
      }
      else {
        setErrors({
          isError: {
            ...errors.isError,
            email: true
          },
          errorMessage: {
            ...errors.errorMessage,
            email: result
          }
        })
      
      }
    }
  )
  }

  const [password, setPassword] = useState<string>("")

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)

    if (errors.isError.confirmPassword) {
      setConfirmPassword("")
    }

    if (e.target.value.match((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))) {
      setErrors({
        isError: {
          ...errors.isError,
          password: false
        },
        errorMessage: {
          ...errors.errorMessage,
          password: ""
        }
      })
      return true
    }
  }

  const blurPassword = () => {
    const result = checkPassword(password)
    if (result === ""){
      setErrors({
        isError: {
          ...errors.isError,
          password: false
        },
        errorMessage: {
          ...errors.errorMessage,
          password: ""
        }
      })
    }
    else {
      setErrors({
        isError: {
          ...errors.isError,
          password: true
        },
        errorMessage: {
          ...errors.errorMessage,
          password: result
        }
      })
    }


  }




  const [confirmPassword, setConfirmPassword] = useState<string>("")

  const changeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)

    const result = checkConfirmPassword(password, e.target.value)

    if (result === ""){
      setErrors({
        isError: {
          ...errors.isError,
          confirmPassword: false
        },
        errorMessage: {
          ...errors.errorMessage,
          confirmPassword: ""
        }
      })
      setButton(false)
    }
    else {
      setErrors({
        isError: {
          ...errors.isError,
          confirmPassword: true
        },
        errorMessage: {
          ...errors.errorMessage,
          confirmPassword: result
        }
      })
      setButton(true)
  }

}
  const blurConfirmPassword = () => {
    const result = checkConfirmPassword(password, confirmPassword)

    if (result === ""){
      setErrors({
        isError: {
          ...errors.isError,
          confirmPassword: false
        },
        errorMessage: {
          ...errors.errorMessage,
          confirmPassword: ""
        }
      })
      setButton(false)
    }
    else {
      setErrors({
        isError: {
          ...errors.isError,
          confirmPassword: true
        },
        errorMessage: {
          ...errors.errorMessage,
          confirmPassword: result
        }
      })
      setButton(true)
  }
  }

  const [passwordIsVisible, setPasswordVisible] = useState<boolean>(false)
  const [confirmPasswordIsVisible, setConfirmPasswordVisible] = useState<boolean>(false)

  const handlePasswordVisible = () => {
    setPasswordVisible(!passwordIsVisible)
  }

  const handleConfirmPasswordVisible = () => {
    setConfirmPasswordVisible(!confirmPasswordIsVisible)
  }

  const [button, setButton] = useState<boolean>(true)

  useEffect(() => {


    if (errors.isError.username || errors.isError.email || errors.isError.password || errors.isError.confirmPassword) {
      setButton(true)
      return
    }
    else if (userName === "" || email === "" || password === "" || confirmPassword === "") {
      setButton(true)
      return
    }
    else {
      setButton(false)
      return
    }

  }, [errors, userName, email, password, confirmPassword])


  const clickRegister = () => {
    

    }
  


  return (
    <div
      className="m-auto w-full"
    >
      <div className="flex flex-row justify-center gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col max-md:ml-0 max-md:w-full max-lg:hidden max-sm:hidden max-md:hidden min-md:hidden">
          <Image
            alt="HarveyRegister"
            src={RegisterSVG}
            className="aspect-square max-md:mt-10 max-md:max-w-full"
            width={600}
            priority={true}
          />
        </div>
        <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full bg-white border-gray-300 rounded-3xl shadow-lg border px-5 py-6">
          <div className="flex flex-col grow justify-center text-base leading-6 text-zinc-700 text-opacity-40  max-md:max-w-full ">
            <div className="flex gap-3 justify-between items-start self-center pb-8 text-2xl font-semibold tracking-wide whitespace-nowrap text-zinc-700">
              <Image
                alt="Harvey"
                src={Brand}
                className="shrink-0 w-12 aspect-[0.98]"
                priority={true}
              />
              <div className="mt-2.5">HarveyOD</div>
            </div>
            <div className="text-xl font-semibold leading-8 text-zinc-700 text-opacity-90 max-md:max-w-full">
              Welcome to {" "}
              <span className="font-extrabold">
                HarveyOD
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <Input
                className="text-black max-md:max-w-full"
                variant="bordered"
                label="Username"
                value={userName}
                onChange={changeUsername}
                onBlur={blurUsername}
                isInvalid={errors.isError.username}
                errorMessage={errors.errorMessage.username}
              />
              <Input
                className="text-black max-md:max-w-full"
                variant="bordered"
                label="Email"
                value={email}
                onChange={changeEmail}
                onBlur={blurEmail}
                isInvalid={errors.isError.email}
                errorMessage={errors.errorMessage.email}
              />
              <Input
                className="text-black max-md:max-w-full"
                variant="bordered"
                label="Password"
                type={passwordIsVisible ? "text" : "password"}
                value={password}
                endContent={
                  <button className="focus:outline-none" type="button" onClick={handlePasswordVisible}>
                    {passwordIsVisible ? (
                      <BiSolidShow className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <BiSolidHide className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                onChange={changePassword}
                onBlur={blurPassword}
                isInvalid={errors.isError.password}
                errorMessage={errors.errorMessage.password}
              />
              <Input
                className="text-black max-md:max-w-full"
                variant="bordered"
                label="Confirm password"
                type={confirmPasswordIsVisible ? "text" : "password"}
                value={confirmPassword}

                endContent={
                  <button className="focus:outline-none" type="button" onClick={handleConfirmPasswordVisible}>
                    {confirmPasswordIsVisible ? (
                      <BiSolidShow className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <BiSolidHide className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                onChange={changeConfirmPassword}
                onBlur={blurConfirmPassword}
                isInvalid={errors.isError.confirmPassword}
                errorMessage={errors.errorMessage.confirmPassword}
              />
            </div>

            <Button
              disabled={button}
              color="primary" className={`justify-center items-center self-center px-16 py-2   
                        mt-3.5 max-w-full text-base font-medium tracking-wide leading-7  
                        text-white uppercase w-[405px] max-md:px-5 disabled:cursor-not-allowed disabled:opacity-45 `}
              onClick={clickRegister}
            >

              {/* <Link href="/register/otp" className="cursor-not-allowed">  
                                Đăng Ký  
                            </Link> */}
              Register
            </Button>


            <div className="mt-7 tracking-normal leading-6 text-center text-lime-600 max-md:max-w-full">
              <span className="text-zinc-700">
                Have account ?
              </span>{" "}
              <Link href="login" className="text-lime-600 hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;  
