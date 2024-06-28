"use client"

import Image from "next/image";

import { MdOutlineEdit, MdStarBorder } from "react-icons/md";
import { GoCheck } from "react-icons/go";
import { changeDateToDDMMYYYY } from "@/util/changeDateToDDMMYYY";
import { useState } from "react";
import { Button, Input, Radio, RadioGroup } from "@nextui-org/react";
import { FaRegUser } from "react-icons/fa";

import avatarProFileDefault from "@/assets/avatarProfileDefault.jpg";
import { setDate } from "date-fns";


const Page = () => {


    const [username, setUsername] = useState<string>("Le Hoang An");
    const [email, setEmail] = useState<string>("lehoangan@gmail.com")

    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState<string>("")
    const [contact, setContact] = useState<string>("")
    const [bio, setBio] = useState<string>("")


    return (
        <div className="flex flex-row justify-start items-start gap-10 p-10 max-md:flex-col max-md:items-center">
            <div className="flex flex-col gap-5 justify-start items-center w-[400px]">
                <div className="flex flex-col items-center justify-center p-3 gap-2 rounded-md shadow-lg border-gray-100 border-3">
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
                            <GoCheck className="w-full h-full"></GoCheck>
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
                    <div className="w-full h-0.5 bg-gray-300 my-3"></div>
                    <div className="flex flex-col gap-3 justify-start w-full">
                        <div className="text-md font-medium tracking-normal leading-5 text-left text-zinc-700">
                            Username:{" "}
                            <span className="tracking-normal font-light leading-5 text-zinc-400">
                                {name}
                            </span>
                        </div>
                        <div className="text-md font-medium tracking-normal leading-5 text-left text-zinc-700">
                            Gender:{" "}
                            <span className="tracking-normal font-light leading-5 text-zinc-400">
                                {gender}
                            </span>
                        </div>
                        <div className="text-md font-medium tracking-normal leading-5 text-left text-zinc-700">
                            Email:{" "}
                            <span className="tracking-normal font-light leading-5 text-zinc-400">
                                {email}
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
                <div className="w-full flex flex-col items-center justify-center p-3 gap-2 rounded-md shadow-lg border-gray-100 border-3">
                    <div className="flex flex-row items-center justify-center gap-3">

                        <Button className="p-2 px-8 flex flex-row gap-4 justify-center items-center border border-gray-100 rounded-lg">
                            <FaRegUser />
                            <p className="text-md font-semibold">Overview</p>
                        </Button>

                        <Button className="p-2 px-8 flex flex-row gap-4 justify-center items-center border border-gray-100 rounded-lg">
                            <FaRegUser />
                            <p className="text-md font-semibold">Security</p>
                        </Button>

                        <Button className="bg-primary text-white px-8  flex flex-row gap-4 justify-center items-center border border-gray-100 rounded-lg">
                            <FaRegUser />
                            <p className="text-md font-semibold">Profile</p>
                        </Button>

                    </div>
                    <div className="w-full ml-20 p-6 flex flex-col gap-3 justify-start items-start text-left">
                        <p className="font-medium text-3xl font-sans">Profile Information Management</p>

                        <div className="flex flex-col gap-5 w-2/5 mt-5">
                            <div className="flex flex-row gap-3 text-right">
                                <p className="w-32">Username:</p>
                                <p>johnwick1221</p>
                            </div>
                            <div className="flex flex-row gap-3 items-center text-right" >
                                <p className="min-w-32"> Fullname: </p>
                                <Input type="text" placeholder="Lê Hoàng An" variant="bordered" value={name} onChange={(e)=>setName(e.target.name)}/>
                            </div>
                            <RadioGroup
                                classNames={{ label: ["text-black text-base", "min-w-32", "text-right", "whitespace-nowrap", "max-md:w-full", "max-md:text-left"], base: ["w-full"], wrapper: ["w-full"] }}
                                label="Gender:"
                                className=" flex flex-row gap-3 justify-start items-center"
                                orientation="horizontal"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <div className="flex flex-row gap-4 w-full">
                                    <Radio value="Male">Male</Radio>
                                    <Radio value="Female">Female</Radio>
                                </div>
                            </RadioGroup>
                            <div className="flex flex-row text-rihgt gap-3 items-center text-right" >
                                <p className="min-w-32">Email: </p>
                                <p>lean09062@gmail.com</p>
                            </div>
                            <div className="flex flex-row gap-3 items-center text-right" >
                                <p className="min-w-32 whitespace-nowrap">Date of birth: </p>
                                <Input type="date" value={dateOfBirth} onChange={(e)=> setDateOfBirth(e.target.value)} variant="bordered" />
                            </div>
                            <div className="flex flex-row gap-3 items-center text-right" >
                                <p className="min-w-32 whitespace-nowrap">Contact: </p>
                                <Input type="text" placeholder="0123456789" variant="bordered" value={contact} onChange={(e) => setContact(e.target.value)} />
                            </div>
                            <div className="flex flex-row gap-3 text-right" >
                                <p className="min-w-32 whitespace-nowrap">Bio: </p>
                                <textarea
                                    placeholder={bio}
                                    className="w-52 h-32 border p-4" value={bio} onChange={(e) => setBio(e.target.value)} />
                            </div>

                        </div>
                    </div>

                </div>

            </div>




        </div>);
}

export default Page; 