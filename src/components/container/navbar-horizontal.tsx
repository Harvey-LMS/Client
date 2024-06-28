"use client";

import React, { ReactEventHandler, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import { ModeToggle } from "./toggle-theme";

import Search from "@/assets/Search.svg";
import FlagVN from "@/assets/FlagVN.svg";
import Flag from "@/assets/Flag_Circle.svg";
import Brand from "@/assets/Brand.svg";
import { Button } from "../ui/button";
import UserDropdown from "./user-dropdown";

import { motion } from "framer-motion";
import NavbarVerticalComponent from "./navbar-vertical";
import { headers } from "next/headers";

const NavbarComponent = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSearch(!showSearch);
  };

  const handleShowDropdown = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <Navbar  position="sticky" className="bg-gray-300 w-full" maxWidth="full" >
        {/* <div className="">
          <NavbarVerticalComponent></NavbarVerticalComponent>
        </div> */}
        <NavbarBrand className="flex">
          <Link href={"/"}>
            <Image
              alt="brand"
              loading="lazy"
              src={Brand}
              className="shrink-0 aspect-[0.98]"
              width={49}
            />
            <p className="font-bold text-inherit pl-2">HarveyOD</p>
          </Link>
        </NavbarBrand>

        <NavbarContent justify="end" className="justify-center items-center">
        <NavbarItem>
            <div
              className={`flex flex-row justify-center items-center px-2 transition-transform ease-in-out transform ${showSearch ? "translate-y-0" : "-translate-y-full"
                }`}
            >
              <Input
                type="text"
                placeholder="TOEIC Test 1, Listening,..."
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
          </NavbarItem>

          <NavbarItem className="hidden lg:flex">
            <Button variant="link" onClick={(e) => handleShowSearch(e)}>
              <Image
                alt="brand"
                loading="lazy"
                src={Search}
                className="flex mr-2"
                width={30}
                height={40}
              />
            </Button>
          </NavbarItem>




          <NavbarItem>

            <Link href={"/"}>
              <Image
                alt="brand"
                loading="lazy"
                src={FlagVN}
                className="flex mr-6 h-10"
                width={40}
              />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <div className="-mr-2">
              <ModeToggle></ModeToggle>
            </div>
          </NavbarItem>




          <NavbarItem>
            <Button
              variant={"link"}
              onClick={(e) => handleShowDropdown(e)}
            // onClick={() => setShowDropdown(false)}
            >
              <Image
                className="mr-1"
                alt="avatar"
                src={Flag}
                height={40}
                width={40}
              />
            </Button>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className={`px-2 transition-transform ease-in-out 
                  transform translate-y-0`}
              >
                <UserDropdown></UserDropdown>
              </motion.div>
            )}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
