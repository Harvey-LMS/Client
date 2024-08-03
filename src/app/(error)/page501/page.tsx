import Image from "next/image";
import { Button } from "@/components/ui/button";
import Error501 from "@/assets/Error_501.svg";

const Page = () => {
    return (
        <div className={"h-screen bg-background"}>
            <div className={"flex flex-col items-center justify-center h-full"}>
                <div className={"text-4xl lg:text-7xl text-gray-400 font-bold"}>NOT IMPLEMENT</div>
                <div className="flex justify-center items-center">
                    <Image
                        className={"w-full"}
                        src={Error501}
                        alt={"Error 501"}
                    />
                </div>
                <div className={"text-1xl lg:text-2xl text-gray-500"}>Contact us: admin@gmail.com</div>
                <Button className={"mt-5 bg-green-500 w-40 lg:w-60 h-9 lg:h-12 font-semibold text-1xl"}>
                    GO BACK
                </Button>
            </div>
        </div>
    );
}

export default Page;