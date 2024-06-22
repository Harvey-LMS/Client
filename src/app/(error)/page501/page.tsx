import Image from "next/image";
import Error501 from "../../../assets/Error_501.svg"
import {Button} from "@/components/ui/button";

const Page = () => {
    return (
        <div className={"h-screen"}>
            <div className={"flex flex-col items-center justify-center h-full"}>
                <div className={"text-7xl text-gray-400 font-bold"}>NOT IMPLEMENT</div>
                <Image
                    src={Error501}
                    alt={"Error 501"}
                />
                <div className={"text-2xl text-gray-500"}>Contact us: admin@gmail.com</div>
                <Button className={"mt-5 bg-green-500 w-60 h-12 font-semibold text-1xl"}>
                    GO BACK
                </Button>
            </div>
        </div>
    );
}

export default Page;