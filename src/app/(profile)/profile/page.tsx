import Image from "next/image";

import Avatar from "@/assets/defaultAvatar.svg"
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdPassword } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { Input } from "@nextui-org/input";
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, Radio } from "@nextui-org/radio";

const Page = () => {
    return (
        <div className="flex flex-row justify-start items-start gap-10 p-10 max-md:flex-col">
            <div className="flex flex-col gap-5 justify-start items-center w-[400px]">
                <div className="flex flex-col justify-center items-center
                p-8 rounded-2xl
                border border-gray-200
                shadow-lg ">
                    <div className="">
                        <Image src={Avatar} alt="avatar" />
                        <div className=" flex flex-col justify-center items-center 
                    relative -right-7 -top-7 left-24 bottom-16
                    w-7 h-7 rounded-full 
                    shadow-md shadow-gray-700 
                    border-gray-500 bg-white">
                            <MdOutlineEdit className="cursor-pointer" />
                        </div>
                    </div>


                    <div className="justify-center items-center flex flex-col">
                        <p className="font-semibold text-3xl text-center">Phùng Anh Minh</p>
                        <div className="flex flex-row gap-2 text-gray-400">
                            <p>@dieglevel</p>
                            <FaRegEdit className="text-xl cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 justify-center items-start w-full
                py-5 rounded-2xl
                border border-gray-200
                shadow-lg">
                    <Button variant={"default"} className="flex flex-row justify-start items-center gap-3 text-xl font-semibold w-11/12 p-3 rounded-r-full  ">
                        <FaRegUser />
                        Profile
                    </Button>
                    <Button variant={"ghost"} className="flex flex-row justify-start items-center gap-3 text-xl font-semibold w-11/12 p-3 rounded-r-full   ">
                        <MdPassword />
                        Change Password
                    </Button>
                    <Button variant={"ghost"} className="flex flex-row justify-start items-center gap-3 text-xl font-semibold w-11/12 p-3 rounded-r-full  ">
                        <MdOutlinePayment />
                        Payment History
                    </Button>
                </div>
            </div>

            <div className="w-full">
                <div className="flex flex-col gap-5 justify-center items-start w-full
                py-5 rounded-2xl
                border border-gray-200
                shadow-lg
                ">
                    <div className="flex flex-col gap-5 px-10 py-5 w-full">
                        <div>
                            <p className="text-5xl font-bold uppercase">Thông tin cá nhân</p>
                            <p>Quản lý thông tin cá nhân của bạn</p>
                        </div>
                        <div className="flex flex-col gap-4 justify-start">
                            <div className="flex flex-row gap-3 justify-start items-center w-8/12 max-md:w-full">
                                <p className="text-xl font-semibold text-right w-4/12 whitespace-nowrap  max-md:w-full max-md:text-left">Họ và tên:</p>
                                <Input
                                    className="text-black max-md:max-w-full text-right"
                                    variant="bordered"
                                    placeholder="Phùng Anh Minh"
                                />
                            </div>
                            <div className="flex flex-row gap-3 justify-start items-center w-8/12 max-md:w-full">
                                <RadioGroup
                                    classNames={{ label: ["text-black", "w-4/12", "text-right", "whitespace-nowrap", "max-md:w-full", "max-md:text-left"], base: ["w-full"], wrapper: ["w-full"]}}
                                    label="Giới tính:"
                                    className="text-xl font-semibold flex flex-row gap-3 justify-start items-center"
                                    orientation="horizontal"
                                    defaultValue="male"
                                >
                                    <div className="flex flex-row gap-4 w-full">
                                        <Radio value="male">Nam</Radio>
                                        <Radio value="female">Nữ</Radio>
                                    </div>

                                </RadioGroup>
                            </div>
                            <div className="flex flex-row gap-3 justify-start items-center w-8/12 max-md:w-full">
                                <p className="text-xl font-semibold text-right w-4/12 whitespace-nowrap max-md:w-full max-md:text-left">Số điện thoại:</p>
                                <Input
                                    className="text-black max-md:max-w-full text-right"
                                    variant="bordered"
                                    placeholder="0123456789"
                                />
                            </div>
                            <div className="flex flex-row gap-3 justify-start items-center w-8/12 max-md:w-full">
                                <p className="text-xl font-semibold text-right w-4/12 whitespace-nowrap max-md:w-full max-md:text-left">Email:</p>
                                <Input
                                    className="text-black max-md:max-w-full text-right"
                                    variant="bordered"
                                    placeholder="abc@gmail.com"
                                />
                            </div>
                            <div className="flex flex-row gap-3 justify-start items-center w-8/12 max-md:w-full">
                                <p className="text-xl font-semibold text-right w-4/12 whitespace-nowrap max-md:w-full max-md:text-left">Ngày sinh:</p>
                                <Input
                                    className="text-black max-md:max-w-full text-right"
                                    variant="bordered"
                                    type="date"
                                />
                            </div>
                            <div className="flex flex-row gap-3 justify-start items-start w-8/12 max-md:w-full">
                                <p className="text-xl font-semibold text-right w-4/12 whitespace-nowrap max-md:w-full max-md:text-left">Bio:</p>
                                <Textarea />
                            </div>
                            <div className="flex flex-row justify-end items-center w-8/12 
                                            max-md:w-full max-md:justify-center">
                                <Button className="w-52">Save</Button>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>);
}

export default Page;