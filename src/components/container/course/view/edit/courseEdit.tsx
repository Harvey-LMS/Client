"use client"

import ChooseBarProps from "@/components/container/layout/ChooseBar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CourseGeneral from "../courseGeneral";

interface Props{
    
}

const tabs = ["General", "Units"] as [string, string, ...string[]];

const CourseEdit: React.FC<Props> = () => {
    const [initialTab, setInitialTab] = useState<string>(tabs[0]);

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathName = usePathname();

    useEffect(() => {
        if (searchParams.has("tab")) {
            const tab = searchParams.get("tab");
            if (tab && tabs.includes(tab)) {
                setInitialTab(tab);
            }
        }
    }, [searchParams]);
    return ( 
        <>
            <ChooseBarProps
                title="Course Edit"
                tabs={{ key: tabs, change: (a: string) => setInitialTab(a), value: initialTab }}
            />
            {initialTab === "General" && (
                <CourseGeneral/>
            )}
        </>
     );
}
 
export default CourseEdit;