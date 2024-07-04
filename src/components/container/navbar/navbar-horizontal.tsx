"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import { ModeToggle } from "../toggle-theme";

import Search from "@/assets/Search.svg";
import FlagVN from "@/assets/FlagVN.svg";
import Avatar from "@/assets/avatarProfileDefault.jpg";
import Brand from "@/assets/Brand.svg";
import { Button } from "../../ui/button";
import UserDropdown from "../user-dropdown";

import { motion } from "framer-motion";

const NavbarHorizontal = () => {
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
    <Navbar position="sticky" className="bg-red-500" maxWidth="full">
      {/* <NavbarBrand className="flex max-md:hidden">
        <Link href={"/"}>
          <Image
            alt="brand"
            loading="lazy"
            src={Brand}
            className="shrink-0 aspect-[0.98]"
            width={40}
          />
          <p className="font-bold text-inherit pl-2 text-2xl">HarveyOD</p>
        </Link>
      </NavbarBrand> */}

      <NavbarContent justify="end" className="justify-center items-center">
        <NavbarItem className="hidden lg:flex">
          <div className=" flex">
            <div
              className={`transition-width duration-300 absolute inset-y-0 right-64 ${
                showInput ? "w-1/6 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <Input
                type="text"
                className="mt-3 w-full transition-all duration-300 ease-in-out"
                placeholder="Type to search"
              />
            </div>
            <Button
              variant="link"
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
  );
};

export default NavbarHorizontal;
