"use client";

import Image from "next/image";
import Link from "next/link";

import Message from "@/assets/icon/message-icon.svg";
import Schedule from "@/assets/icon/schedule-icon.svg";
import Courses from "@/assets/icon/courses-icon.svg";
import Meeting from "@/assets/icon/meeting-icon.svg";
import Wallet from "@/assets/icon/wallet-icon.svg";
import Blog from "@/assets/icon/blog-icon.svg";
import Services from "@/assets/icon/list-services-icon.svg";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  User,
} from "@nextui-org/react";

const NavbarVerticalComponent = () => {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button variant="bordered">
          <div className="flex gap-2.5 m-4 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
            <Image
              alt={"services"}
              src={Services}
              className="shrink-0 aspect-square"
              width={24}
            />
            {/* <span className="flex-1">SERVICES</span> */}
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        <DropdownItem key="">
          <Link href={""}>
            <div className="flex gap-2.5 m-4 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
              <Image
                alt={"msg"}
                src={Message}
                className="shrink-0 aspect-square"
                width={16}
              />
              <span className="flex-1">Message</span>
            </div>
          </Link>
        </DropdownItem>

        <DropdownItem key="">
          <Link href={""}>
            <div className="flex gap-2.5 m-4 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
              <Image
                alt={"schedule"}
                src={Schedule}
                className="shrink-0 aspect-square"
                width={16}
              />
              <span className="flex-1">Schedule</span>
            </div>
          </Link>
        </DropdownItem>

        <DropdownItem key="">
          <Link href={""}>
            <div className="flex gap-2.5 m-4 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
              <Image
                alt={"meeting"}
                src={Meeting}
                className="shrink-0 aspect-square"
                width={16}
              />
              <span className="flex-1">Meeting</span>
            </div>
          </Link>
        </DropdownItem>

        <DropdownItem key="">
          <Link href={""}>
            <div className="flex gap-2.5 m-4 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
              <Image
                alt={"courses"}
                src={Courses}
                className="shrink-0 aspect-square"
                width={16}
              />
              <span className="flex-1">All courses</span>
            </div>
          </Link>
        </DropdownItem>

        <DropdownItem key="">
          <Link href={""}>
            <div className="flex gap-2.5 m-4 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
              <Image
                alt={"wallet"}
                src={Wallet}
                className="shrink-0 aspect-square"
                width={16}
              />
              <span className="flex-1">Wallet</span>
            </div>
          </Link>
        </DropdownItem>

        <DropdownItem key="">
          <Link href={""}>
            <div className="flex gap-2.5 m-4 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
              <Image
                alt={"blog"}
                src={Blog}
                className="shrink-0 aspect-square"
                width={16}
              />
              <span className="flex-1">Blog</span>
            </div>
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarVerticalComponent;
