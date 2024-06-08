"use client"

import Image from "next/image";
import RegisterSVG from "@/assets/Register.svg"
import Brand from "@/assets/Brand.svg";
import Link from "next/link";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";

import { RadioGroup, Radio } from "@nextui-org/radio";

const Register = () => {
    return (
        <div
            className="m-auto w-full"
        >
            <div className="flex flex-row justify-center gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col max-md:ml-0 max-md:w-full max-sm:hidden max-md:hidden">
                    <Image
                        alt="Harvey"
                        loading="lazy"
                        src={RegisterSVG}
                        className="aspect-square max-md:mt-10 max-md:max-w-full"
                        width={600}
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
                            <div className="mt-2.5">Harvey</div>
                        </div>
                        <div className="text-xl font-semibold leading-8 text-zinc-700 text-opacity-90 max-md:max-w-full">
                            Chào mừng bạn đến{" "}
                            <span className="font-extrabold">
                                Harvey
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Input
                                className="text-black max-md:max-w-full text-right"
                                variant="bordered"
                                label="Họ và tên"
                            />
                            <Input
                                className="text-black max-md:max-w-full text-right"
                                variant="bordered"
                                label="Ngày sinh"
                                type="date"

                            />
                            <RadioGroup
                                label="Giới tính:"
                                className="flex flex-row w-full"
                            >
                                <div className="flex flex-row gap-4">
                                    <Radio value="male">Nam</Radio>
                                    <Radio value="female">Nữ</Radio>
                                </div>

                            </RadioGroup>
                            <Input
                                className="text-black max-md:max-w-full text-right"
                                variant="bordered"
                                label="Số điện thoại"
                                type="tel"
                            />
                            <Input
                                className="text-black max-md:max-w-full"
                                variant="bordered"
                                label="Email"
                            />
                            <Input
                                className="text-black max-md:max-w-full"
                                variant="bordered"
                                label="Mật khẩu"
                                type="password"
                            />
                            <Input
                                className="text-black max-md:max-w-full"
                                variant="bordered"
                                label="Nhập lại mật khẩu"
                                type="password"
                            />
                        </div>
                        <Link href="/register/otp">
                            <Button color="primary" className="justify-center items-center self-center px-16 py-2 mt-3.5 max-w-full text-base font-medium tracking-wide leading-7 text-white uppercase w-[405px] max-md:px-5">
                                Đăng Ký
                            </Button>
                        </Link>

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