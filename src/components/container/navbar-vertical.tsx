"use client";

import Image from "next/image";
import Link from "next/link";

import Message from "@/assets/icon/message-icon.svg";
import Schedule from "@/assets/icon/schedule-icon.svg";
import Courses from "@/assets/icon/courses-icon.svg";
import Meeting from "@/assets/icon/meeting-icon.svg";
import Wallet from "@/assets/icon/wallet-icon.svg";
import Blog from "@/assets/icon/blog-icon.svg";
import { Button } from "@nextui-org/react";

const NavbarVerticalComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row justify-center items-start">
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 w-64">
        <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
          <div className="flex items-center justify-center h-14 border-b">
            {/* <div>Sidebar Navigation By iAmine</div> */}
          </div>
          <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    <span>SERVICES</span>
                  </div>
                </div>
              </li>

              <li className="ml-6">
                <Link href={""}>
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

              <li className="ml-6">
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

              <li className="ml-6">
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

              <li className="ml-6">
                <Link href={""}>
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

              <li className="ml-6">
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

              <li className="ml-6">
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
      <div className="w-full">
        {children}
      </div>

    </div>
  );
};

export default NavbarVerticalComponent;
