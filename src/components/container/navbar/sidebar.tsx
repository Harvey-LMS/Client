"use client"

import Image from "next/image";

import Brand from "@/assets/Brand.svg";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { MdOutlineDashboard } from "react-icons/md";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useRouter } from "next/navigation";

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
  isOpenSubitem: boolean;
}

interface SidebarProps {
  expanded: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ expanded }: SidebarProps) => {
  const [isOpenSubitem, setIsOpenSubitem] = useState<boolean>(false);


  return (
    <motion.div
      animate={{
        width: expanded ? 300 : 80
      }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`border-r h-screen z-50 flex flex-col justify-start sticky top-0 min-w-3`}>

      <div className="">
        <SidebarSusbItem key={"Course"} expanded={expanded} isOpenSubitem={isOpenSubitem} icon={<MdOutlineDashboard className="text-2xl" />} title="Course Manager">
          <SidebarItem expanded={expanded} name={"Course"} url="/dashboard/course" isSubItem></SidebarItem>
          <SidebarItem expanded={expanded} name={"Test"} url="/dashboard/test" isSubItem></SidebarItem>
          <SidebarItem expanded={expanded} name={"Quiz"} url="/dashboard/quiz" isSubItem></SidebarItem>
        </SidebarSusbItem>

        <SidebarSusbItem key={"Test"} expanded={expanded} isOpenSubitem={isOpenSubitem} icon={<MdOutlineDashboard className="text-2xl" />} title="Course Manager">
          <SidebarItem expanded={expanded} name={"Course"} url="/dashboard/course" isSubItem></SidebarItem>
          <SidebarItem expanded={expanded} name={"Test"} url="/dashboard/test" isSubItem></SidebarItem>
          <SidebarItem expanded={expanded} name={"Quiz"} url="/dashboard/quiz" isSubItem></SidebarItem>
        </SidebarSusbItem>
      </div>
    </motion.div>

  );
}

const SidebarItem = ({ expanded, name, url }: SidebarItemProps) => {
  return (
    <div className={`w-full bg-background`}>
      <div className={` w-full flex flex-row justify-center items-center rounded-lg text-md`}>
        <Link href={url ? url : ""} className={`w-full h-full flex flex-row items-center bg-background ${expanded ? ("px-5") : ("")}`} >
          <Button className={`font-semibold min-w-0 justify-start bg-background data-[hover=true]:opacity-100 hover:bg-primary hover:text-primary-foreground w-full ${expanded ? ("") : ("rounded-none px-7")}`}>
            <p className="truncate">{name}</p>
          </Button>
        </Link>
      </div>
    </div>
  )
}

const SidebarSusbItem = ({ expanded, icon, title, children, url, isOpenSubitem }: SidebarSubItemProps) => {
  const [isDown, setIsDown] = useState<boolean>(isOpenSubitem);

  const [currentIsShow, setCurrentIsShow] = useState<boolean>(isDown);

  const router = useRouter();

  const [height, setHeight] = useState<number>(0);

  const currentRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!expanded) {
      setCurrentIsShow(isDown);
      setIsDown(false);

    }
    else {
      setIsDown(currentIsShow)
    }

  }, [expanded, currentIsShow])

  useEffect(() => {
    if (currentRef.current) {
      setHeight(currentRef.current.scrollHeight);
      console.log(currentRef.current.scrollHeight)
    }
  }, [])


  return (
    <div>
      <div className="relative px-1">
        {url ? (
          <Button
            className={` data-[hover=true]:opacity-100 hover:text-primary-foreground z-50 
                text-background-foreground bg-background my-2 w-full flex flex-row 
                min-w-0 justify-center items-center rounded-lg font-bold text-xl hover:bg-primary px-0
                ${expanded ? ("") : ("p-2")}`}

            onClick={() => { setIsDown(!isDown); router.push(url) }}>
            <div className={`w-full h-full flex flex-row items-center  ${expanded ? ("py-2 px-2 justify-start gap-3") : ("m-auto justify-center")}`} >
              <div>
                {icon}
              </div>
              <p className="truncate">{expanded ? (title) : ("")}</p>
            </div>
          </Button>
        ) : (<Button
          className={`data-[hover=true]:opacity-100 hover:text-primary-foreground z-50 text-background-foreground bg-background my-2 w-full flex flex-row min-w-0 justify-center items-center rounded-lg font-bold text-xl hover:bg-primary ${expanded ? ("") : ("p-2")}`}
          onClick={() => { setIsDown(!isDown) }}
        >
          <div className={` w-full h-full flex flex-row items-center  ${expanded ? ("py-2 px-2 justify-start gap-3") : ("m-auto justify-center")}`} >
            <div>
              {icon}
            </div>
            <p className="truncate">{expanded ? (title) : ("")}</p>
          </div>

          <motion.div className={`${expanded ? "block" : "hidden"}`} animate={{ rotate: isDown ? 0 : 90 }} transition={{ duration: 0.1 }}>
            <FaAngleDown />
          </motion.div>

        </Button>)}
        {/* <AnimatePresence>
          <motion.div
            className={`bg-background ${expanded ? ("") : (`${isDown ? ("min-w-[200px] border-2 absolute p-3 bg-background left-full ml-1 rounded-2xl  top-3 m-0 w-full whitespace-nowrap ") : ("")}`)}`}
            animate={{ height: isDown ? height : 0 }}
            exit={{ height: 0 }}
            transition={{ duration: 2 }}>

            <div >


            </div>

          </motion.div>
        </AnimatePresence> */}


        <AutoExpandedDiv>
          {isDown && (<div ref={currentRef} className="bg-background w-full">
            {!expanded && (<p className="text-center font-bold text-xl">{title}</p>)}
            {children}
          </div>)}

        </AutoExpandedDiv>
      </div>




    </div>
  )
}

export default Sidebar;


interface AutoExpandedDivProps {
  children: React.ReactNode;
}

const AutoExpandedDiv: React.FC<AutoExpandedDivProps> = ({children}: AutoExpandedDivProps) => {
    const [height, setHeight] = useState<number>(0);
    const currentRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentRef.current) {
            setHeight(currentRef.current.scrollHeight);
        }
    }, [children])

  return (
    <motion.div
    initial={{ height: 0 }}
    animate={{ height: height }}
    transition={{ duration: 0.5 }}
    
    >
      <div ref={currentRef} className="bg-background w-full">
        {children}
      </div>
    </motion.div>
  )
}