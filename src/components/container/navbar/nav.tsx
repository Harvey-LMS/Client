"use client";
import Menu from "@/assets/icon/menu-icon.svg";

import { MdOutlineMail } from "react-icons/md";
import { HiOutlineVideoCamera } from "react-icons/hi";
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
    console.log(showInput);
  };

  const handleShowDropdown = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex flex-row justify-center items-start w-full sticky">
      <div
        className={`flex flex-row justify-center items-start h-screen z-50 fixed md:sticky md:top-0 w-fix  md:block ${
          isMenuOpen ? "w-full " : "hidden"
        }`}
      >
        <div
          className={`w-full h-full flex flex-col text-gray-800 md:block top-0 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col w-full h-full border-r border-r-gray-300 bg-gray-200">
            <div className="flex flex-row items-center justify-center mt-4">
              <Link
                href={"/asd"}
                className="flex flex-row justify-center items-center gap-3"
              >
                <Image
                  alt="brand"
                  loading="lazy"
                  src={Brand}
                  className="shrink-0 aspect-[0.98]"
                  width={40}
                />
                <p className="font-bold text-2xl">HarveyOD</p>
              </Link>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
              <ul className="flex flex-col py-4 space-y-1">
                <li className="">
                  <div className="flex flex-row items-center justify-center w-full">
                    <div className="text-sm font-light tracking-wide text-gray-400 w-full">
                      {isMenuOpen ? (
                        <div className="flex flex-row justify-between items-center">
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
                        <div className="flex flex-row items-center justify-center px-2 gap-2">
                          <div className="h-0.5 bg-gray-300 w-2/12"></div>
                          <p className="font-bold">SERVICES</p>
                          <div className="h-0.5 bg-gray-300 w-11/12"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
                <div className="mx-3">
                  <li className="">
                    <Link
                      href={"/asd"}
                      className="px-6 rounded-md hover:bg-primary hover:text-primary-foreground flex flex-row justify-start items-center"
                    >
                      <div className="flex flex-row gap-5 items-center justify-center h-12">
                        <MdOutlineMail className="text-3xl" />
                        <span className="font-semibold text-lg">Message</span>
                      </div>
                    </Link>
                  </li>

                  <li className="">
                    <Link
                      href={""}
                      className="px-6 rounded-md hover:bg-primary hover:text-primary-foreground flex flex-row justify-start items-center"
                    >
                      <div className="flex flex-row gap-5 items-center justify-center h-12">
                        <HiOutlineVideoCamera className="text-3xl" />
                        <span className="font-semibold text-lg">Schedule</span>
                        <FaChevronDown></FaChevronDown>
                      </div>
                    </Link>
                  </li>

                  <li className="">
                    <Link
                      href={""}
                      className="px-12 rounded-md hover:bg-primary hover:text-primary-foreground flex flex-row justify-start items-center"
                    >
                      <div className="flex flex-row gap-5 items-center justify-center h-12">
                        <HiOutlineVideoCamera className="text-3xl" />
                        <span className="font-semibold text-lg">Schedule</span>
                      </div>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <Navbar position="sticky" className="bg-white" maxWidth="full">
          <NavbarBrand className="flex md:hidden w-full">
            <div
              className={`md:hidden w-10 h-10 flex flex-row items-center justify-center cursor-pointer  rounded-sm ${
                isMenuOpen ? "hidden" : "block"
              }`}
              onClick={toggleMenu}
            >
              <Image alt={"menu"} src={Menu} className="" width={24} />
            </div>
          </NavbarBrand>

          <NavbarContent justify="end" className="justify-center items-center">
            <NavbarItem className="hidden lg:flex">
              <div className="flex flex-row justify-end items-center gap-5">
                <motion.div
                  initial={{
                    width: showInput ? "0%" : "100%",
                    opacity: showInput ? 1 : 0,
                  }}
                  animate={{
                    width: showInput ? "100%" : "0%",
                    opacity: showInput ? 1 : 0,
                  }}
                  exit={{
                    width: showInput ? "100%" : "0%",
                    opacity: showInput ? 1 : 0,
                    display: showInput ? "block" : "hidden",
                  }}
                  transition={{ duration: 0.2 }}
                  className=""
                >
                  <Input
                    variant="flat"
                    type="text"
                    placeholder="Type to search"
                    endContent={
                      <Button variant="flat" size="sm">
                        Search
                      </Button>
                    }
                    isDisabled={!showInput}
                  />
                </motion.div>

                <Image
                  alt="search"
                  loading="lazy"
                  src={Search}
                  onClick={handleShowSearch}
                  className=" w-15 h-15 cursor-pointer"
                  height={25}
                  width={25}
                />
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
                  transition={{ duration: 0.1 }}
                  className={`absolute  right-10 top-14 px-2`}
                >
                  <UserDropdown></UserDropdown>
                </motion.div>
              )}
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        {children}
      </div>
    </div>
  );
};

export default Nav;
