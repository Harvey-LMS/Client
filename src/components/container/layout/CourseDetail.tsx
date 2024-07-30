"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";

const CourseDetail = () => {
    const router = useRouter();

    const [isGeneral, setIsGeneral] = useState<boolean>(true);

    return (
        <div className="flex flex-col justify-center items-start w-full gap-5 border-b-1 border-hover-2">
            <div className="px-6 rounded-md flex flex-row justify-center items-center cursor-pointer" onClick={() => { router.back() }}>
                <IoIosArrowRoundBack className="text-3xl" />
                <p className="font-medium">Go back</p>
            </div>
            <div className="px-6 rounded-md flex flex-row justify-center items-center cursor-pointer hover:bg-hover">
                <p className="font-bold text-2xl">Course Detail</p>
            </div>
            <div className="rounded-md px-1 py-2 w-full">
                <div className="rounded-md px-5 py-2 flex flex-row gap-5 justify-start items-center bg-hover w-full bg-zinc-100 dark:bg-stone-950">
                    <motion.div layout className={`cursor-pointer ${isGeneral ? ("py-1 px-12 font-semibold bg-primary text-primary-foreground rounded-md") : ("")}`}
                        onClick={() => setIsGeneral(true)}
                    >
                        General
                    </motion.div>
                    <div className={`cursor-pointer ${!isGeneral ? ("py-1 px-12 font-semibold bg-primary text-primary-foreground rounded-md") : ("")}`}
                        onClick={() => setIsGeneral(false)}
                    >Units</div>
                    
                </div>
            </div>

            
        </div>
    );
}

export default CourseDetail;