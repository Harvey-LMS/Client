"use client"


import Message from "@/assets/icon/message-icon.svg";
import Schedule from "@/assets/icon/schedule-icon.svg";
import Courses from "@/assets/icon/courses-icon.svg";
import Meeting from "@/assets/icon/meeting-icon.svg";
import Wallet from "@/assets/icon/wallet-icon.svg";
import Blog from "@/assets/icon/blog-icon.svg";
import Menu from "@/assets/icon/menu-icon.svg";
import Link from "next/link";
import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
    Button,
} from "@nextui-org/react";
import { ModeToggle } from "../toggle-theme";

import Search from "@/assets/Search.svg";
import FlagVN from "@/assets/FlagVN.svg";
import Avatar from "@/assets/avatarProfileDefault.jpg";
import UserDropdown from "../user-dropdown";
import Brand from "@/assets/Brand.svg";
import Back from "@/assets/icon/back-icon.svg";

import { motion } from "framer-motion";
import Image from "next/image";


const Nav = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleMenuBack = () => {
        setIsMenuOpen(false);
    };




    const [showDropdown, setShowDropdown] = useState(false);

    const [showInput, setShowInput] = useState(false);

    const handleShowSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setShowInput(!showInput);
    };

    const handleShowDropdown = (e: React.FormEvent) => {
        e.preventDefault();
        setShowDropdown(!showDropdown);
    };





    return (
        <div className="flex flex-row justify-center items-start w-full sticky">
            <div className={`flex flex-row justify-center items-start h-screen z-50 fixed md:sticky md:top-0 md:w-2/12 w-full md:block ${isMenuOpen ? "w-full " : "hidden"}`}>
                <div
                    className={`w-full h-full flex flex-col text-gray-800 md:block top-0 ${isMenuOpen ? "block" : "hidden"}`}
                >

                    <div className="flex flex-col w-full h-full bg-white border-r">
                        <div className="flex flex-row items-center justify-center h-14 border-b">
                            <Link href={"/asd"} className="flex flex-row justify-center items-center">
                                <Image
                                    alt="brand"
                                    loading="lazy"
                                    src={Brand}
                                    className="shrink-0 aspect-[0.98]"
                                    width={40}
                                />
                                <p className="font-bold text-inherit pl-2 text-2xl">HarveyOD</p>
                            </Link>
                        </div>
                        <div className="overflow-y-auto overflow-x-hidden flex-grow">
                            <ul className="flex flex-col py-4 space-y-1">

                                <li className="px-5">
                                    <div className="flex flex-row items-center h-8">
                                        <div className="text-sm font-light tracking-wide text-gray-500">
                                            {isMenuOpen ? (
                                                <div className="flex flex-row justify-center items-center gap-2">
                                                    <Button
                                                        className="md:hidden p-2 w-full "
                                                        onClick={toggleMenuBack}
                                                        variant="ghost"
                                                    >
                                                        <Image
                                                            alt={"back"}
                                                            src={Back}
                                                            className="shrink-0 aspect-square mr-2"
                                                            width={16}
                                                        />
                                                    </Button>
                                                    <span>SERVICES</span>
                                                </div>
                                            ) : (
                                                <span>SERVICES</span>
                                            )}
                                        </div>
                                    </div>
                                </li>

                                <li className="rounded-full hover:bg-primary hover:text-white flex flex-row justify-start items-center">
                                    <Link href={""} className="">
                                        <div className="flex gap-2.5 m-4 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
                                            <Image
                                                alt={"msg"}
                                                src={Message}
                                                className="shrink-0 aspect-square mr-2"
                                                width={16}
                                            />
                                            <span className="flex-1 font-bold">Message</span>
                                        </div>
                                    </Link>
                                </li>

                                <li className="rounded-full hover:bg-primary hover:text-white">
                                    <Link href={""}>
                                        <div className="flex gap-2.5 m-4 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
                                            <Image
                                                alt={"schedule"}
                                                src={Schedule}
                                                className="shrink-0 aspect-square mr-2"
                                                width={16}
                                            />
                                            <span className="flex-1 font-bold">Schedule</span>
                                        </div>
                                    </Link>
                                </li>

                                <li className="rounded-full hover:bg-primary hover:text-white">
                                    <Link href={""}>
                                        <div className="flex w-full gap-2.5 m-4 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
                                            <Image
                                                alt={"meeting"}
                                                src={Meeting}
                                                className="shrink-0 aspect-square mr-2"
                                                width={16}
                                            />
                                            <span className="flex-1 font-bold">Meeting</span>
                                        </div>
                                    </Link>
                                </li>

                                <li className="rounded-full hover:bg-primary hover:text-white">
                                    <Link href={""} className="">
                                        <div className="flex gap-2.5 m-4 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
                                            <Image
                                                alt={"courses"}
                                                src={Courses}
                                                className="shrink-0 aspect-square mr-2"
                                                width={16}
                                            />
                                            <span className="flex-1 font-bold">All courses</span>
                                        </div>
                                    </Link>
                                </li>

                                <li className="rounded-full hover:bg-primary hover:text-white">
                                    <Link href={""}>
                                        <div className="flex gap-2.5 m-4 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
                                            <Image
                                                alt={"wallet"}
                                                src={Wallet}
                                                className="shrink-0 aspect-square mr-2"
                                                width={16}
                                            />
                                            <span className="flex-1 font-bold">Wallet</span>
                                        </div>
                                    </Link>
                                </li>

                                <li className="rounded-full hover:bg-primary hover:text-white">
                                    <Link href={""}>
                                        <div className="flex gap-2.5 m-4 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
                                            <Image
                                                alt={"blog"}
                                                src={Blog}
                                                className="shrink-0 aspect-square mr-2"
                                                width={16}
                                            />
                                            <span className="flex-1 font-bold">Blog</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <Navbar position="sticky" className="" maxWidth="full">
                    <NavbarBrand className="flex md:hidden">
                        <div
                            className={`md:hidden w-10 h-10 flex flex-row items-center justify-center cursor-pointer  rounded-sm ${isMenuOpen ? "hidden" : "block"}`}
                            onClick={toggleMenu}
                        >
                            <Image
                                alt={"menu"}
                                src={Menu}
                                className=""
                                width={24}
                            />
                        </div>
                    </NavbarBrand>

                    <NavbarContent justify="end" className="justify-center items-center">
                        <NavbarItem className="hidden lg:flex">
                            <div className=" flex">
                                <div
                                    className={`transition-width duration-300 absolute inset-y-0 right-64 ${showInput ? "w-1/6 opacity-100" : "w-0 opacity-0"
                                        }`}
                                >
                                    <Input
                                        type="text"
                                        className="mt-3 w-full transition-all duration-300 ease-in-out"
                                        placeholder="Type to search"
                                    />
                                </div>
                                <Button
                                    variant="bordered"
                                    onClick={handleShowSearch}
                                    className="z-10 ml-auto"
                                >
                                    <Image
                                        alt="search"
                                        loading="lazy"
                                        src={Search}
                                        className="flex"
                                        width={30}
                                        height={40}
                                    />
                                </Button>
                            </div>
                        </NavbarItem>

                        <NavbarItem>
                            <Link
                                href={"/"}
                                className="flex flex-row justify-center items-center"
                            >
                                <Image
                                    alt="flag"
                                    loading="lazy"
                                    src={FlagVN}
                                    className=""
                                    width={40}
                                />
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <div className="">
                                <ModeToggle></ModeToggle>
                            </div>
                        </NavbarItem>

                        <NavbarItem>
                            <Link href={""} onClick={(e) => handleShowDropdown(e)}>
                                <Image
                                    className="rounded-full"
                                    alt="avatar"
                                    src={Avatar}
                                    height={40}
                                    width={40}
                                />
                            </Link>

                            {showDropdown && (
                                <motion.div
                                    initial={{ opacity: 0.5 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className={`absolute  right-10 top-14 px-2 transition-transform ease-in-out 
                    transform translate-y-0`}
                                >
                                    <UserDropdown></UserDropdown>
                                </motion.div>
                            )}
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>

                <div>
                    {children}
                </div>
            </div>

        </div>
    );
}

export default Nav;