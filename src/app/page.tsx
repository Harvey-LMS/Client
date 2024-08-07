"use client"

import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    router.push("/login");
    return <div>We will be update this page</div>;
};

export default Page;
