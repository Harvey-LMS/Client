"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { IoAddOutline } from "react-icons/io5";

interface ChooseBarProps {
    tabs: {
        key: [string, string, ...string[]];
        change: (a: string) => void;
        value: string;
    }
    create?: {
        title: string;
        onClick: () => void;
    }
    title: string
}

const ChooseBarProps: React.FC<ChooseBarProps> = ({ tabs, create, title }: ChooseBarProps) => {

    const { theme } = useTheme();

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const handleTabClick = (tab: string) => {
        tabs.change(tab);
        const params = new URLSearchParams(searchParams);
        params.set('tab', tab);
        router.replace(`${pathName}?${params.toString()}`);
    };


    return (
        <div className="flex flex-col justify-center items-start w-full gap-5 border-b-1 border-hover-2">

            <div className="flex flex-col justify-center items-start w-full gap-5 px-5">
                <motion.div className="rounded-md group flex flex-row justify-center items-center cursor-pointer gap-3" 
                onClick={() => { router.back() }}>
                    <motion.div
                    >
                        <IoIosArrowRoundBack className="text-3xl group-hover:-translate-x-2 transition-transform duration-300"/>
                    </motion.div>
                    <p className="font-medium text-lg ">Go back</p>
                </motion.div>

                <div className="rounded-md flex flex-row justify-center items-center">
                    <p className="font-bold text-3xl">{title}</p>
                </div>
            </div>

            <div className="rounded-md py-2 w-full">
                <div className="rounded-md px-5 py-2 flex flex-row gap-5 justify-start items-center bg-hover w-full bg-zinc-100 dark:bg-stone-950">
                    <div className=" w-full flex flex-row justify-start items-center gap-3">
                        {
                            tabs && tabs.key.map((tab, index) => {
                                return (
                                    <div key={index} className="z-0 relative px-5 py-1 min-w-10 cursor-pointer"
                                        onClick={() => { handleTabClick(tab) }}>

                                        <motion.p
                                            className={`font-medium ${tab === tabs.value ? "text-primary-foreground" : (theme === "dark" ? "text-white" : "text-black")}`}
                                            animate={{
                                                color: tab === tabs.value ?
                                                    "#FFFFFF" :
                                                    (theme === "dark" ?
                                                        "#FFFFFF" :
                                                        "#000000"
                                                    )
                                            }}
                                            transition={{ duration: 1, type: "spring", bounce: 0.25 }}
                                        >{tab}</motion.p>

                                        {
                                            tab === tabs.value &&
                                            <motion.div
                                                layoutId="-z-10 left-0 w-full px-5  bg-primary absolute top-0 m-0 bottom-0"
                                                className={`rounded-md -z-10 left-0 w-full px-5  bg-primary absolute top-0 m-0 bottom-0`}
                                                transition={{ duration: 0.5, type: "spring", bounce: 0.25 }}
                                            />
                                        }
                                    </div>
                                );
                            })
                        }


                    </div>

                    {create &&
                        <Button 
                        variant="flat"
                        color="primary"
                        onClick={create.onClick} 
                            className="font-medium text-md"
                        startContent={
                            <div className=" ">
                                <IoAddOutline />
                            </div>

                        }>{create?.title}</Button>
                    }
                </div>
            </div>


        </div >
    );
}

export default ChooseBarProps;