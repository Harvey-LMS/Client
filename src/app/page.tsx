"use client"

import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    router.push("/login");
    return <div>Page</div>;
};

export default Page;
