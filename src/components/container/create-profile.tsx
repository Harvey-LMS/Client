"use client"

import Image from "next/image";
import Brand from "@/assets/Brand.svg";
import Link from "next/link";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import { RadioGroup, Radio } from "@nextui-org/radio";

import { GoCheck, GoCheckCircleFill } from "react-icons/go";

import { motion } from "framer-motion"



const Page = () => {
    const [username, setUsername] = useState<string>("Le Hoang An");      
    const [email, setEmail] = useState<string>("lehoangan@gmail.com")

    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState<string>("")
    const [contact, setContact] = useState<string>("")
    const [bio, setBio] = useState<string>("")

    const changeDateToDDMMYYYY = (date: string) => {
        if (date === "") return "";
        const dateArray = date.split("-");
        return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
    }


    const variants = {
        initial: { opacity: 1, scale: 0 }, // Bắt đầu từ mờ và dưới vị trí cuối cùng
        visible: { opacity: 1, scale: 1 }, // Hiện ra và di chuyển lên vị trí cuối cùng
        exit: { opacity: 1, y: -900, scale: 0.5 } // Biến mất và di chuyển lên trên
    }

    return (
        <motion.div className="flex flex-row items-start justify-center gap-10 mt-32"
            variants={variants}
            initial="initial"
            animate="visible"
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >

            <div className="flex flex-col gap-2 rounded-md shadow-lg border-gray-100 border p-10">
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
                    Create Profile
                </div>
                <div className="text-md font-normal whitespace-nowrap leading-8 text-zinc-700 text-opacity-90 max-md:max-w-full">
                    Please enter all required information to create a profile.
                </div>
                <div className="flex flex-col gap-2">
                    <Input
                        className="text-black max-md:max-w-full"
                        variant="bordered"
                        label="Fullname"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
<div>
                        <RadioGroup
                            classNames={{ label: ["text-black text-base", "w-4/12", "text-left", "whitespace-nowrap", "max-md:w-full", "max-md:text-left"], base: ["w-full"], wrapper: ["w-full"] }}
                            label="Gender:"
                            className="text-xl font-semibold flex flex-row gap-3 justify-start items-center"
                            orientation="horizontal"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <div className="flex flex-row gap-4 w-full">
                                <Radio value="Male">Male</Radio>
                                <Radio value="Female">Female</Radio>
                            </div>
                        </RadioGroup>
</div>
                    <Input
                        className="text-black max-md:max-w-full text-right"
                        variant="bordered"
                        type="date"
                        label="Date of birth:"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                    <Input
                        className="text-black max-md:max-w-full"
                        variant="bordered"
                        label="Contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                    <Input
                        className="text-black max-md:max-w-full"
                        variant="bordered"
                        label="Bio"
                        type="textarea"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </div>
                    <Button className="bg-primary text-white">Save</Button>
                <Link href="login" className="text-lime-600 hover:underline text-center">
                    Skip this step
                </Link>
            </div>
        </motion.div>
    );
}

export default Page;