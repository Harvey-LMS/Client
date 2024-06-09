"use client"

import Image from "next/image";
import RegisterSVG from "@/assets/Register.svg"
import Brand from "@/assets/Brand.svg";
import Link from "next/link";
import { Input } from "@nextui-org/input";
import { Button, user } from "@nextui-org/react";

import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";

import { RadioGroup, Radio } from "@nextui-org/radio";
import React, { use, useEffect, useRef, useState } from "react";
import { redirect } from "next/navigation";

interface Errors {
    isError:{
        username: boolean;
        email: boolean;
        password: boolean;
        confirmPassword: boolean;
    },
    errorMessage:{
        username: string;
        email: string;
        password: string;
        confirmPassword: string;
    }
    
}

const Register = () => {
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
    const [userNameIsError, setUserNameIsError] = useState<boolean>(false)

    const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)

        if (errors.isError.username) {
            if (e.target.value.match(/^[a-zA-Z0-9]+$/)) {
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

    const checkUserName = () => {
        if (userName === "") {
            setErrors({
                isError: {
                    ...errors.isError,
                    username: true
                },
                errorMessage: {
                    ...errors.errorMessage,
                    username: "Tên đăng nhập không được để trống"
                }
            })
            return false
        }

        if (userName.match(/^[a-zA-Z0-9]+$/)) {
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
            return true
        } else {
            setErrors({
                isError: {
                    ...errors.isError,
                    username: true
                },
                errorMessage: {
                    ...errors.errorMessage,
                    username: "Tên đăng nhập không chứa ký tự đặc biệt"
                }
            })
            return false
        }
    }

    // //
    const [email, setEmail] = useState<string>("")

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const checkEmail = () => {
        if (email === ''){
            setErrors({
                isError: {
                    ...errors.isError,
                    email: true
                },
                errorMessage: {
                    ...errors.errorMessage,
                    email: "Email không được để trống"
                }
            })
            return false
        }
        if (email.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/i)) {
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
            return true
        } else {
            setErrors({
                isError: {
                    ...errors.isError,
                    email: true
                },
                errorMessage: {
                    ...errors.errorMessage,
                    email: "Email không hợp lệ"
                }
            })
            return false
        }
    }

    const [password, setPassword] = useState<string>("")

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)

        if (e.target.value.length >= 6 && e.target.value.match((/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/))) {
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

    const checkPassword = () => {
        if (password === "") {
            setErrors({
                isError: {
                    ...errors.isError,
                    password: true
                },
                errorMessage: {
                    ...errors.errorMessage,
                    password: "Mật khẩu không được để trống"
                }
            })
            return false
        }

        if (password.length >= 6 && password.match((/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/))) {
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
        } else {
            setErrors({
                isError: {
                    ...errors.isError,
                    password: true
                },
                errorMessage: {
                    ...errors.errorMessage,
                    password: "Mật khẩu phải có ít nhất 8 ký tự"
                }
            })
            return false
        }
    }




    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value)

        if (e.target.value === password) {
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
        if (e.target.value.length > 0 ){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

    const checkConfirmPassword = () => {
        if (confirmPassword === "") {
            setErrors({
                isError: {
                    ...errors.isError,
                    confirmPassword: true
                },
                errorMessage: {
                    ...errors.errorMessage,
                    confirmPassword: "Mật khẩu không được để trống"
                }
            })
            return false
        }

        if (confirmPassword === password) {
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
            return true
        } else {
            setErrors({
                isError: {
                    ...errors.isError,
                    confirmPassword: true
                },
                errorMessage: {
                    ...errors.errorMessage,
                    confirmPassword: "Mật khẩu không khớp"
                }
            })
            return false
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

    const register = () => {
        if (checkUserName() && checkEmail() && checkPassword() && checkConfirmPassword()) {
            
            redirect("/register/otp")
        }
    }


    return (
        <div
            className="m-auto w-full"
        >
            <div className="flex flex-row justify-center gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col max-md:ml-0 max-md:w-full max-sm:hidden max-md:hidden">
                    <Image
                        alt="HarveyRegister"
                        src={RegisterSVG}
                        className="aspect-square max-md:mt-10 max-md:max-w-full"
                        width={600}
                        priority
                    />
                </div>
                <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full bg-white border-gray-300 rounded-3xl shadow-lg border px-5 py-6">
                    <div className="flex flex-col grow justify-center text-base leading-6 text-zinc-700 text-opacity-40  max-md:max-w-full ">
                        <div className="flex gap-3 justify-between items-start self-center pb-8 text-2xl font-semibold tracking-wide whitespace-nowrap text-zinc-700">
                            <Image
                                alt="Harvey"
                                loading="lazy"
                                src={Brand}
                                className="shrink-0 w-12 aspect-[0.98]"
                            />
                            <div className="mt-2.5">HarveyOD</div>
                        </div>
                        <div className="text-xl font-semibold leading-8 text-zinc-700 text-opacity-90 max-md:max-w-full">
                            Chào mừng bạn đến{" "}
                            <span className="font-extrabold">
                                HarveyOD
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Input
                                className="text-black max-md:max-w-full"
                                variant="bordered"
                                label="Tên đăng nhập"
                                value={userName}
                                onChange={handleUserName}
                                onBlur={checkUserName}
                                isInvalid={errors.isError.username}
                                errorMessage={errors.errorMessage.username}
                            />
                            <Input
                                className="text-black max-md:max-w-full"
                                variant="bordered"
                                label="Email"
                                value={email}
                                onChange={handleEmail}
                                onBlur={checkEmail}
                                isInvalid={errors.isError.email}
                                errorMessage={errors.errorMessage.email}
                            />
                            <Input
                                className="text-black max-md:max-w-full"
                                variant="bordered"
                                label="Mật khẩu"
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
                                onChange={handlePassword}
                                onBlur={checkPassword}
                                isInvalid={errors.isError.password}
                                errorMessage={errors.errorMessage.password}
                            />
                            <Input
                                className="text-black max-md:max-w-full"
                                variant="bordered"
                                label="Nhập lại mật khẩu"
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
                                onChange={handleConfirmPassword}
                                onBlur={checkConfirmPassword}
                                isInvalid={errors.isError.confirmPassword}
                                errorMessage={errors.errorMessage.confirmPassword}
                            />
                        </div>

                        <Button 
                        disabled= {button}
                            color="primary" className={`justify-center items-center self-center px-16 py-2 
                        mt-3.5 max-w-full text-base font-medium tracking-wide leading-7
                        text-white uppercase w-[405px] max-md:px-5 disabled:cursor-not-allowed disabled:opacity-45 `}
                            onClick={register}
                        >
                            
                            {/* <Link href="/register/otp" className="cursor-not-allowed">
                                Đăng Ký
                            </Link> */}
                            Đăng Ký
                        </Button>


                        <div className="mt-7 tracking-normal leading-6 text-center text-lime-600 max-md:max-w-full">
                            <span className="text-zinc-700">
                                Bạn đã có tài khoản?
                            </span>{" "}
                            <Link href="login" className="text-lime-600 hover:underline">
                                Đăng nhập
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;