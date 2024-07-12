import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";


interface Props {
    id: number;
    name: string;
    update: string;
    price: number;
    level: string;
    status: string;
    image: string;
}

const data = [
    {
        id: 1,
        name: "React Perfect Course for Beginner sdflkajsdlkjalskdjflaksjdfsdlkfjsldfjlsdjf lsajdf;l jasl;dfjsdfaslkdfjlsdj asldkjf sadjflaskdjflasdfjlksajdflkjsadflkjalskdjflkasjflkjsdfljsaldf lsjafljsdfljalsdjfasjdlfjasdl asldfasflasdjf sdf",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Not Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 2,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Not Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 3,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Not Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 4,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Not Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 5,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Not Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 6,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Not Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 7,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Not Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 8,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Not Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 9,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Not Active",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
    {
        id: 10,
        name: "React",
        update: "22-12-2003",
        price: 20,
        level: "Hard",
        status: "Upcomming",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    }
]
    


const DraftCourse = () => {
    return ( 
    <div>
        <table className="table-fixed w-full">
            <thead>
                <tr>
                    <th className="w-1 "></th>
                    <th className="w-7 ">Image</th>
                    <th className="w-32 ">Name</th>
                    <th className="w-6 ">Update</th>
                    <th className="w-6 ">Price</th>
                    <th className="w-6 ">Level</th>
                    <th className="w-6 ">Status</th>
                    <th className="w-6 ">Edit</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item: Props) => (
                    <tr key={item.id} className="hover:bg-gray-100">
                        <td className="py-4 px-3 font-semibold text-center">{item.id}</td>
                        <td className="py-4 flex justify-center items-center">
                            <Image src={item.image} alt={item.name} width={100} height={70}/>
                        </td>
                        <td className="py-4 font-semibold text-lg truncate">{item.name}</td>
                        <td className="py-4 text-center text-sm">{item.update}</td>
                        <td className="py-4 text-center">
                            <div className=" flex flex-row justify-center items-center gap-1">
                            <p className="font-bold text-primary">$</p>
                            <p className="font-semibold">{item.price}</p>
                            </div>
                        </td>

                        <td className="py-4 text-center">{item.level}</td>
                        <td className="py-4 text-center">
                            <button 
                            className={`bg-primary rounded-md py-1 px-5 font-bold text-primary-foreground cursor-default
                            ${item.status === "Active" ? "bg-primary" : "bg-secondary"}`
                            }
                            >
                            {item.status}
                            </button>
                        </td>
                        <td className="py-4 text-center">
                            <div className="items-center justify-center flex flex-row gap-5 text-3xl">
                                <MdOutlineDelete />
                                <MdModeEdit />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div> 
    );
}
 
export default DraftCourse;