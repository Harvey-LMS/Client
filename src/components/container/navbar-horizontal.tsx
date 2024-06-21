import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Brand from "@/assets/Brand.svg";
import Image from "next/image";
import { ModeToggle } from "./toggle-theme";

import FlagVN from "@/assets/FlagVN.svg";

const NavbarComponent = () => {
  return (
    <Navbar position="sticky">
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
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Image
            alt="brand"
            loading="lazy"
            src={FlagVN}
            className="flex mr-2"
            width={40}
            height={50}
          />
          <ModeToggle></ModeToggle>
        </NavbarItem>
        <NavbarItem>
          <Image
            alt="brand"
            loading="lazy"
            src={FlagVN}
            className="rounded-full"
            width={40}
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
