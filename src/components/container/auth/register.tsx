"use client";

import Image from "next/image";
import RegisterSVG from "@/assets/Register.svg";
import Brand from "@/assets/Brand.svg";
import Link from "next/link";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";

import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";

import { useEffect, useRef, useState } from "react";


import { useRouter } from 'next/navigation';

import { checkEmail, checkUsername, checkPassword, checkConfirmPassword } from "@/app/(auth)/register/handle"
import { AnimatePresence, motion } from "framer-motion";
import { current } from "@reduxjs/toolkit";

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

interface BookProps {

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
      if (result === "") {
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
      if (result === "") {
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
    if (result === "") {
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

    if (result === "") {
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

    if (result === "") {
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


  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const observer = new MutationObserver(() => {
        if (contentRef.current) {
          setHeight(contentRef.current.scrollHeight);
          console.log(contentRef.current.scrollHeight)
        }

      });

      observer.observe(contentRef.current, {
        childList: true,
        subtree: true,
        characterData: true,
      });
      setHeight(contentRef.current.scrollHeight);

      return () => observer.disconnect();
    }

  }, [contentRef.current?.scrollHeight]);

  return (
    <div
      className="mt-52 w-full"
    >
      <div
        className="flex flex-row justify-center gap-5 max-md:flex-col max-md:gap-0">

        <div className="flex flex-col max-md:ml-0 max-md:w-full max-lg:hidden max-sm:hidden max-md:hidden min-md:hidden">
          <Image
            alt="HarveyRegister"
            src={RegisterSVG}
            className="aspect-square max-md:mt-10 max-md:max-w-full"
            width={600}
            priority={true}
          />
        </div>

        <div
          className="flex flex-col ml-5 h-full max-md:ml-0 max-w-[500px] min-w-[500px] max-md:w-full bg-white border-gray-300 rounded-3xl shadow-lg border px-5 py-6">
          <motion.div
            initial={{ height: "auto" }}
            animate={{ height: height }}
            transition={{ duration: 0.5 }}
            className="flex flex-col  justify-start items-center text-zinc-700 text-opacity-40  max-md:max-w-full ">
            <div
              ref={contentRef}
              className="flex flex-col w-full h-fit">
              <div className="flex gap-3 justify-between items-start self-center pb-8 text-2xl font-semibold tracking-wide whitespace-nowrap text-zinc-700">
                <Image
                  alt="Harvey"
                  src={Brand}
                  className="shrink-0 w-12 aspect-[0.98]"
                  loading="lazy"
                />
                <div className="mt-2.5">HarveyOD</div>
              </div>
              <div className="text-xl font-semibold text-zinc-700 text-opacity-90 w-full flex flex-row gap-1">
                <p>Welcome to {" "}</p>
                <span className="font-extrabold">
                  HarveyOD
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  key={"username" + errors.errorMessage.username}
                  className="text-black max-md:max-w-full"
                  variant="bordered"
                  label="Username"
                  value={userName}
                  onChange={changeUsername}
                  onBlur={blurUsername}
                  isInvalid={errors.isError.username}
                  errorMessage={
                    <AnimatePresence>
                      {errors.isError.username && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="whitespace-wrap w-full"
                        >
                          {errors.errorMessage.username}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  }
                />
                <Input
                  key={"email" + errors.errorMessage.email}
                  className="text-black max-md:max-w-full"
                  variant="bordered"
                  label="Email"
                  value={email}
                  onChange={changeEmail}
                  onBlur={blurEmail}
                  isInvalid={errors.isError.email}
                  errorMessage={
                    <AnimatePresence>
                      {errors.isError.email && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="whitespace-wrap w-full"
                        >
                          {errors.errorMessage.email}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  }
                />
                <Input
                  key={"password" + errors.errorMessage.password}
                  className="text-black md:w-full"
                  classNames={{ errorMessage: "whitespace-wrap w-full" }}
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
                  errorMessage={
                    <AnimatePresence>
                      {errors.isError.password && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="whitespace-wrap w-full"
                        >
                          {errors.errorMessage.password}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  }
                />
                <Input
                  key={"confirmPassword" + errors.errorMessage.confirmPassword}
                  className="text-black max-md:max-w-full"
                  variant="bordered"
                  label="Confirm password"
                  type={confirmPasswordIsVisible ? "text" : "password"}
                  value={confirmPassword}


                  endContent={
                    <button className="focus:outline-none" onClick={handleConfirmPasswordVisible}>
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
                  errorMessage={
                    <AnimatePresence>
                      {errors.isError.confirmPassword && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="whitespace-wrap w-full"
                        >
                          {errors.errorMessage.confirmPassword}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  }
                />
              </div>

              <Button
                disabled={button}
                color="primary"
                className={`justify-center items-center self-center px-16 py-2    
                        mt-3.5 max-w-full text-base font-medium tracking-wide leading-7   
                        text-white uppercase w-[405px] max-md:px-5 disabled:cursor-not-allowed disabled:opacity-45 min-h-10`}
                onClick={clickRegister}
              >
                Register
              </Button>


              <div className="mt-7 tracking-normal leading-6 text-center text-lime-600 max-md:max-w-full">
                <span className="text-zinc-700">
                  Have account ?
                </span>{" "}
                <Link href="login" className="text-lime-700 hover:underline">
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;   
