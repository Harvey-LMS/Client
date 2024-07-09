"use client";

import Image from "next/image";
import Link from "next/link";

import Message from "@/assets/icon/message-icon.svg";
import Schedule from "@/assets/icon/schedule-icon.svg";
import Courses from "@/assets/icon/courses-icon.svg";
import Meeting from "@/assets/icon/meeting-icon.svg";
import Wallet from "@/assets/icon/wallet-icon.svg";
import Blog from "@/assets/icon/blog-icon.svg";
import Menu from "@/assets/icon/menu-icon.svg";
import Back from "@/assets/icon/back-icon.svg";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Brand from "@/assets/Brand.svg";



const NavbarVertical = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleMenuBack = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-row justify-center items-start md:h-12">
      <Button
        className="max-md:block p-2"
        onClick={toggleMenu}
        variant="ghost"
      >
        <Image
          alt={"menu"}
          src={Menu}
          className="shrink-0 aspect-square"
          width={24}
        />
      </Button>
      <div
        className={`min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased text-gray-800 w-64 ${isMenuOpen ? "block" : "hidden"
          } md:block`}
      >

        <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
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
                          className="md:hidden p-2"
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

              <li className="ml-6 hover:bg-primary hover:rounded-full hover:text-white hover:w-[80%]">
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

              <li className="ml-6 hover:bg-primary hover:rounded-full hover:text-white hover:w-[80%]">
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

              <li className="ml-6 hover:bg-primary hover:rounded-full hover:text-white hover:w-[80%]">
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

              <li className="ml-6 hover:bg-primary hover:rounded-full hover:text-white hover:w-[80%]">
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

              <li className="ml-6 hover:bg-primary hover:rounded-full hover:text-white hover:w-[80%]">
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

              <li className="ml-6 hover:bg-primary hover:rounded-full hover:text-white hover:w-[80%]">
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
  );
};

export default NavbarVertical; 
