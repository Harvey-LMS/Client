

import { apiGet } from "@/api/api";
import CreateProfile from "@/components/container/create-profile";
import { IUser } from "@/types/register";
import { useState } from "react";

import Test from "@/components/container/test1";
import { getUser } from "@/api/register/register";

const Page = async () => {


    const data:IUser[] = await getUser({next: 
        {tags: ["user"]},
        cache: "no-cache"
    } 
    );

    return (
        <Test user={data}></Test>
    )
   
}
 
export default Page;