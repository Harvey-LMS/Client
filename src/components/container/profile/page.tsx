"use client"

import Image from "next/image";

import { MdOutlineEdit, MdStarBorder } from "react-icons/md";
import { GoCheck } from "react-icons/go";
import { changeDateToDDMMYYYY } from "@/util/changeDateToDDMMYYY";
import { useState } from "react";
import { Button, Input, Radio, RadioGroup } from "@nextui-org/react";
import { FaRegUser } from "react-icons/fa";
import { IoCheckmarkOutline } from "react-icons/io5";



import avatarProFileDefault from "@/assets/avatarProfileDefault.jpg";


const Page = () => {


    const [username, setUsername] = useState<string>("Le Hoang An");
    const [email, setEmail] = useState<string>("lehoangan@gmail.com")

    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState<string>("")
    const [contact, setContact] = useState<string>("")
    const [bio, setBio] = useState<string>("")


    return (
        <div className="flex flex-row justify-start items-start gap-1 px-2 max-md:flex-col max-md:items-center bg-white w-full">
            <div className="lg:flex flex-col justify-start items-center w-1/3 hidden">
                <div className="flex flex-col items-center justify-center p-20 gap-2 rounded-lg  w-full ">
                    <div className="">
                        <Image src={avatarProFileDefault} alt="avatar" className="bg-primary rounded-sm shadow-md" width={100} height={100} loading="lazy" />
                    </div>
                    <div>
                        <p className="font-bold ">{username}</p>
                    </div>
                    <div>
                        <p className="text-sm bg-slate-100 text-gray-500 p-1 px-3 rounded-md mb-4">{email}</p>
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                        <div className="flex flex-row gap-4 p-2 bg-green-200 rounded-md h-12 w-12">
                            <IoCheckmarkOutline className="w-full h-full"></IoCheckmarkOutline>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">1/30</p>
                            <p className="text-gray-500">Task Done</p>
                        </div>

                        <div className="flex flex-row gap-4 p-2 bg-green-200 rounded-md h-12 w-12">
                            <MdStarBorder className="w-full h-full"></MdStarBorder>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">5600</p>
                            <p className="text-gray-500">Point</p>
                        </div>
                    </div>

                    <div className="w-full h-0.5 bg-gray-100 my-3"></div>

                    <div className="flex flex-col gap-3 justify-start w-full">
                        <div className="text-md font-medium tracking-normal leading-5 text-left text-zinc-700">
                            Username:{" "}
                            <span className="tracking-normal font-light leading-5 text-zinc-400">
                                {name}
                            </span>
                        </div>
                        <div className="text-md font-medium tracking-normal leading-5 text-left text-zinc-700">
                            Email:{" "}
                            <span className="tracking-normal font-light leading-5 text-zinc-400">
                                {email}
                            </span>
                        </div>
                        <div className="text-md font-medium tracking-normal leading-5 text-left text-zinc-700">
                            Gender:{" "}
                            <span className="tracking-normal font-light leading-5 text-zinc-400">
                                {gender}
                            </span>
                        </div>
                        <div className="text-md font-medium tracking-normal leading-5 text-left text-zinc-700">
                            Date of birth:{" "}
                            <span className="tracking-normal font-light leading-5 text-zinc-400">
                                {changeDateToDDMMYYYY(dateOfBirth)
                                }
                            </span>
                        </div>
                        <div className="text-md font-medium tracking-normal leading-5 text-left text-zinc-700">
                            Contact:{" "}
                            <span className="tracking-normal font-light leading-5 text-zinc-400">
                                {contact}
                            </span>
                        </div>
                    </div>
                    <div className="w-72">
                        {bio && (
                            <p className="mt-6 text-sm tracking-normal leading-5 text-center break-words whitespace-pre-wrap text-zinc-700 text-opacity-60 w-full">
                                {bio}
                            </p>
                        )}
                    </div>

                    <div className="text-lg font-medium leading-5 text-center text-zinc-700">
                        <Button className="w-40 bg-primary text-white">Change</Button>
                    </div>
                </div>

            </div>


            <div className="flex flex-col w-full">
                <div className="w-full flex flex-col items-center justify-center p-3 gap-2 h-auto">
                    <div className="flex flex-row items-center justify-center gap-3 h-12">
                        <Button className="px-3  flex flex-row justify-center items-center border border-gray-100 rounded-lg">
                            <FaRegUser />
                            <p className="text-md font-semibold">Overview</p>
                        </Button>

                        <Button className="px-3  flex flex-row ustify-center items-center border border-gray-100 rounded-lg">
                            <FaRegUser />
                            <p className="text-md font-semibold">Security</p>
                        </Button>

                        <Button className="px-3  bg-primary text-white flex flex-row gap-4 justify-center items-center border border-gray-100 rounded-lg">
                            <FaRegUser />
                            <p className="text-md font-semibold">Profile</p>
                        </Button>

                    </div>
                    <div className="w-full flex flex-col gap-3 justify-start items-start">
                        <p className="font-medium text-3xl font-sans">Profile Information Management</p>

                        <div className="flex flex-col gap-5 w-full mt-5">

                            <div className="flex flex-row gap-3 w-full justify-start items-center md:text-right">
                                <div className="w-3/12">
                                    <p className="font-bold text-left w-full">Username:</p>
                                </div>

                                <p className="w-full text-left">johnwick1221</p>
                            </div>

                            <div className="flex flex-row gap-3 w-full justify-start items-center md:text-right" >
                                <div className="w-3/12">
                                    <p className="font-bold text-left w-full">Email:</p>
                                </div>
                                <Input className="w-full" type="text" placeholder="Lê Hoàng An" variant="bordered" value={name} onChange={(e) => setName(e.target.name)} />
                            </div>

                            <div className="flex flex-row gap-3 w-full justify-start items-center">
                                <RadioGroup
                                    classNames={{ label: ["font-bold text-black text-base", "w-3/12", "whitespace-nowrap"], wrapper: ["flex flex-row gap-4 w-full"], base: ["w-full"] }}
                                    label="Gender:"
                                    className="flex flex-row gap-3 justify-start items-center"
                                    orientation="horizontal"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <Radio value="Male">Male</Radio>
                                    <Radio value="Female">Female</Radio>

                                </RadioGroup>
                            </div>

                            <div className="flex flex-row gap-3 w-full justify-start items-center md:text-right" >
                                <div className="w-3/12">
                                    <p className="font-bold text-left w-full">Date of birth:</p>
                                </div>
                                <Input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} variant="bordered" />
                            </div>

                            <div className="flex flex-row gap-3 w-full justify-start items-center md:text-right" >
                                <div className="w-3/12">
                                    <p className="font-bold text-left w-full">Contact:</p>
                                </div>
                                <Input type="text" placeholder="0123456789" variant="bordered" value={contact} onChange={(e) => setContact(e.target.value)} />
                            </div>

                            <div className="flex flex-row gap-3 w-full justify-start md:text-right" >
                                <div className="w-3/12">
                                    <p className="font-bold text-left w-full">Bio:</p>
                                </div>
                                <textarea
                                    placeholder={bio}
                                    className="w-full h-auto border p-4" value={bio} onChange={(e) => setBio(e.target.value)} />
                            </div>
                            <div className="w-full flex justify-center items-center">
                            <div className="flex flex-row justify-center items-center gap-3 text-right w-full">
                                <Button className="bg-primary text-white px-16">
                                    Save
                                </Button>
                            </div>
                        </div> 
                        </div>


                    </div>

                </div>

            </div>




        </div>);
}

export default Page; 