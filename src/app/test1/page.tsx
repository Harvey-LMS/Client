"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import Message from "@/assets/icon/message-icon.svg";
import Schedule from "@/assets/icon/schedule-icon.svg";
import Courses from "@/assets/icon/courses-icon.svg";
import Meeting from "@/assets/icon/meeting-icon.svg";
import Wallet from "@/assets/icon/wallet-icon.svg";
import Blog from "@/assets/icon/blog-icon.svg";

import { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      href: "",
      alt: "msg",
      src: Message,
      label: "Message",
    },
    {
      href: "",
      alt: "schedule",
      src: Schedule,
      label: "Schedule",
    },
    {
      href: "",
      alt: "meeting",
      src: Meeting,
      label: "Meeting",
    },
    {
      href: "",
      alt: "courses",
      src: Courses,
      label: "All courses",
    },
    {
      href: "",
      alt: "wallet",
      src: Wallet,
      label: "Wallet",
    },
    {
      href: "",
      alt: "blog",
      src: Blog,
      label: "Blog",
    },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <Link href={item.href} key={item.label}>
            <div className="flex gap-2.5 m-4 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
              <Image
                alt={item.alt}
                src={item.src}
                className="shrink-0 aspect-square mr-2"
                width={16}
              />
              <span className="flex-1 font-bold">{item.label}</span>
            </div>
          </Link>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Page;
