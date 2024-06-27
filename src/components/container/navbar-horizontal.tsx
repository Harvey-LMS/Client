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
      <Navbar position="sticky" className="bg-gray-300">
        <NavbarBrand className="">
          <Link href={"/"}>
            <Image
              alt="brand"
              loading="lazy"
              src={Brand}
              className="shrink-0 aspect-[0.98] w-[49px]"
            />
            <p className="font-bold text-inherit pl-2">HarveyOD</p>
          </Link>
        </NavbarBrand>
        {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}
        <NavbarContent justify="end">
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

            <div
              className={`absolute left-[250px] top-1 px-2 transition-transform ease-in-out transform ${
                showSearch ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <Input
                type="text"
                placeholder="TOEIC Test 1, Listening,..."
                className="w-[400px] p-2 border border-gray-300 rounded-md"
              />
            </div>

            <Link href={"/"}>
              <Image
                alt="brand"
                loading="lazy"
                src={FlagVN}
                className="flex mr-6 h-10"
                width={40}
              />
            </Link>
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
              <div
                className={`absolute right-10 top-16 px-2 transition-transform transform translate-y-0`}
              >
                <UserDropdown></UserDropdown>
              </div>
            )}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
