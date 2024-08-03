
"use client"
import Menu from "@/assets/icon/menu-icon.svg";

import { MdNavigateBefore, MdNavigateNext, MdOutlineMail } from "react-icons/md";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";


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
import { headers } from "next/headers";
import { IoIosSearch } from "react-icons/io";
// import Sidebar, { SidebarItem } from "./nav-test-2";

import Sidebar from "./sidebar";

interface Props {
   children: React.ReactNode
}

const Nav: React.FC<Props> = ({ children }: Props) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [expand, setExpand] = useState<boolean>(true);

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
      console.log(showInput)
   };

   const handleShowDropdown = (e: React.FormEvent) => {
      e.preventDefault();
      setShowDropdown(!showDropdown);
   };





   return (
      <div className="flex flex-row justify-center items-start w-full">
         <div className="w-full flex flex-col justify-start items-start">
            <Navbar position="sticky" className=" bg-white shadow-sm h-[64px] w-full" classNames={{ wrapper: "px-4" }} maxWidth="full" height={64}>
               <NavbarBrand className="flex w-full gap-5">
                  <div className=" rounded-full hover:bg-hover p-3" onClick={() => { setExpand(!expand) }} >
                     <IoMenu className="text-2xl"
                     />
                  </div>

                  <div className={`flex flex-row justify-center items-center rounded-lg font-bold text-xl`}>
                     <Link href={"/"} className={`left-0 flex flex-row items-center justify-start gap-2`} >
                        <Image src={Brand} alt="brand" className="w-10" width={40} />
                        <p>HarveyOD</p>
                     </Link>
                  </div>
               </NavbarBrand>

               <NavbarContent justify="end" className="justify-center items-center">
                  <NavbarItem className="hidden lg:flex  lg:flex-row justify-center items-center gap-5">
                     <div className="flex flex-row justify-end items-center">

                        <motion.div
                           initial={{ width: showInput ? "0%" : "100%", opacity: showInput ? 1 : 0 }}
                           animate={{ width: showInput ? "100%" : "0%", opacity: showInput ? 1 : 0 }}
                           exit={{ width: showInput ? "100%" : "0%", opacity: showInput ? 1 : 0, display: showInput ? "block" : "hidden" }}
                           transition={{ duration: 0.2 }}
                           className="w-full"

                        >
                           <Input
                              variant="bordered"
                              type="text"
                              placeholder="Type to search"
                              endContent={<Button variant="faded" size="sm" className={`${showInput ? "block" : "hidden"}`}>Search</Button>}
                              isDisabled={!showInput}

                           />
                        </motion.div>
                     </div>
                     <IoIosSearch
                        onClick={handleShowSearch}
                        className="h-7 w-7 cursor-pointer"
                     />
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
                           transition={{ duration: 0.1 }}
                           className={`absolute  right-10 top-14 px-2`}
                        >
                           <UserDropdown></UserDropdown>
                        </motion.div>
                     )}
                  </NavbarItem>
               </NavbarContent>
            </Navbar>
            <div className="w-full flex flex-row justify-start items-start">
               <Sidebar expanded={expand}></Sidebar>

               <div className="w-full mt-5">
                  {children}
               </div>
            </div>

         </div>

      </div>
   );
}

export default Nav;
