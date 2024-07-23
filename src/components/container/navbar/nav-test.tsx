"use client"

import Image from "next/image";

import Brand from "@/assets/Brand.svg";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { MdOutlineDashboard } from "react-icons/md";
import { FaDiscourse } from "react-icons/fa";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface SidebarItemProps {
  expanded: boolean;
  icon?: React.ReactNode | "";
  name: string;
  isSubItem?: boolean | false;
  url?: string;
}

interface SidebarSubItemProps {
  expanded: boolean;
  icon?: React.ReactNode | "";
  title?: string;
  children?: React.ReactNode;
  url?: string | null;
}

const Sidebar = () => {
  const [expanded, setExpanded] = useState<boolean>(true); // false = thu hẹp   true = mở rộng

  return (
    <motion.div
      animate={{
        width: expanded ? 350 : 80
      }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`border-r h-screen z-50 flex flex-col justify-start m-auto min-w-3`}>
      <div
        className={` p-1`}>
        <div className={`relative h-fit w-full`}>
          <div className={`w-full flex flex-row justify-center items-center rounded-lg font-bold text-xl ${expanded ? ("py-2 px-2") : ("p-2 hover:bg-hover")}`}>
            <Link href={"/"} className={`left-0 w-full flex flex-row items-center justify-center gap-3`} >
              <Image src={Brand} alt="brand" width={40} />
              {expanded && (<p>HarveyOD</p>)}
            </Link>
          </div>
          {expanded ? (
            <MdNavigateBefore className="absolute m-auto bottom-0 top-0 -right-3 text-foreground bg-primary-500 rounded-full"
              onClick={() => { setExpanded(!expanded) }} />
          ) : (

            <MdNavigateNext className="absolute m-auto bottom-0 top-0 -right-3 text-foreground bg-primary-500 rounded-full"
              onClick={() => { setExpanded(!expanded) }} />
          )}
        </div>
      </div>


      <div className="flex flex-row justify-center items-center w-full h-2">
        {expanded ?
          (
            <div className="flex flex-row justify-center items-center gap-1 text-hover-2 w-full">
              <div className="bg-hover-2 h-0.5 rounded-full w-1/5">
              </div>
              <p className="font-bold text-sm">Service</p>
              <div className="bg-hover-2 h-0.5 rounded-full w-full">
              </div>
            </div>
          ) :
          (
            <div className="bg-hover-2 h-0.5 rounded-full w-full">
            </div>
          )
        }
      </div>

      <div className="">
        <SidebarSusbItem expanded={expanded} icon={<MdOutlineDashboard className="text-2xl" />} title="aslkdj">
          <SidebarItem expanded={expanded} name={"Dashboard"} isSubItem></SidebarItem>
          <SidebarItem expanded={expanded} name={"Course"} isSubItem></SidebarItem>
        </SidebarSusbItem>
        {/* <SidebarSusbItem expanded={expanded} icon={<MdOutlineDashboard className="text-2xl" />} url={"/"} title={"Course"}></SidebarSusbItem> */}
      </div>
    </motion.div>

  );
}

const SidebarItem = ({ expanded, name,url }: SidebarItemProps) => {
  return (
    <div className={``}>
      <div className={` w-full flex flex-row justify-center items-center rounded-lg text-md`}>
        <Link href={''} className={`w-full h-full flex flex-row items-center bg-background ${expanded ? ("px-5"): ("")}`} >
          <Button className={`font-semibold min-w-0 justify-start bg-background data-[hover=true]:opacity-100 hover:bg-primary hover:text-primary-foreground w-full ${expanded ? ("") : ("rounded-none px-7")}`}>
            <p className="truncate">{name}</p>
          </Button>
        </Link>
      </div>
    </div>
  )
}

const SidebarSusbItem = ({ expanded, icon, title, children, url }: SidebarSubItemProps) => {
  const [isDown, setIsDown] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div>
      <div className="relative p-3">
        {url ? (
          <Link href={url} className="">
            <Button
              className={` data-[hover=true]:opacity-100 hover:text-primary-foreground z-50 text-background-foreground bg-background my-2 w-full flex flex-row min-w-0 justify-center items-center rounded-lg font-bold text-xl hover:bg-primary ${expanded ? ("") : ("p-2")}`}
              onClick={() => { setIsDown(!isDown) }}>
              <div className={`w-full h-full flex flex-row items-center  ${expanded ? ("py-2 px-2 justify-start gap-3") : ("m-auto justify-center")}`} >
                {icon}
                <p className="truncate">{expanded ? (title) : ("")}</p>
              </div>
            </Button>
          </Link>
        ) : (<Button
          className={`data-[hover=true]:opacity-100 hover:text-primary-foreground z-50 text-background-foreground bg-background my-2 w-full flex flex-row min-w-0 justify-center items-center rounded-lg font-bold text-xl hover:bg-primary ${expanded ? ("") : ("p-2")}`}
          onClick={() => { setIsDown(!isDown) }}
          onMouseOver={() => { setHover(true) }}
          onMouseLeave={() => { setHover(false) }}
          >
          <div className={` w-full h-full flex flex-row items-center  ${expanded ? ("py-2 px-2 justify-start gap-3") : ("m-auto justify-center")}`} >
            {icon}
            <p className="truncate">{expanded ? (title) : ("")}</p>
          </div>

          <motion.div className={`${expanded ? "block" : "hidden"}`} animate={{ rotate: isDown ? 0 : 90 }} transition={{ duration: 0.1 }}>
            <FaAngleDown />
          </motion.div>

        </Button>)}

        <motion.div className={`${expanded ? (""): (`${isDown ? ("border absolute  left-full  top-3 m-0 "): ("")}`)}`}  animate={{ height: isDown ? "auto" : 0 }} transition={{ duration: 0.1 }}> 

          
          {isDown && (<div className="bg-background">
            {!expanded && (<p className="text-center font-bold text-xl">{title}</p>)}
            {children}
          </div>)}
        </motion.div>
      </div>




    </div>
  )
}

export default Sidebar;