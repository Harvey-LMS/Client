"use client"

import { apiGet, apiPost } from "@/api/api";
import { IUser } from "@/types/register";
import { useState } from "react";
import { revalidateTag } from "next/cache";
import handle from "@/app/handle";

interface TestProps{
    user: IUser[]
}

const Test:React.FC<TestProps> = ({user}) => {
    const [username, setUsername] = useState<string>('')
    const [gmail, setGmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    const data:IUser[] = user

    const handleCreate = () => {
        handle(username, gmail, password)
    }

    return ( 
        <div>
            <div>
                    <input type="text" className="border border-black" value={username} onChange={(e)=> {setUsername(e.target.value)}}/>
                    <input type="text" className="border border-black" value={gmail} onChange={(e)=> {setGmail(e.target.value)}}/>
                    <input type="text" className="border border-black" value={password} onChange={(e)=> {setPassword(e.target.value)}}/>

                    <button type="submit" onClick={handleCreate}>Submit</button>
            </div>

            {data ? 
                data.map((item: IUser) => (
                    <div key={item.id} className="flex flex-row gap-5">
                        <h1>{item.username}</h1>
                        <p>{item.gmail}</p>
                        <p>{item.password}</p>
                    </div>
                ))
            : 
                <div>Loading</div>
            }


        </div>
     );
}
 
export default Test;