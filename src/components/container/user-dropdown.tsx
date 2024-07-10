"use client"
import Image from "next/image";

import Avatar from "@/assets/avatarProfileDefault.jpg";
import Account from "@/assets/icon/account-icon.svg";
import Setting from "@/assets/icon/setting-icon.svg";
import Support from "@/assets/icon/support-icon.svg";
import Logout from "@/assets/icon/logout-icon.svg";
import Link from "next/link";

const UserDropdown = () => {
  return (
    <div className="flex flex-col py-3 bg-white rounded-md shadow-lg w-[200px]">
      <div className="flex ml-3">
        <Image
          alt={"avatar"}
          src={Avatar}
          className="shrink-0 w-10 aspect-square rounded-full"
          width={20}
        />
        <div className="flex flex-col flex-1 px-5 my-auto">
          <div className="text-sm font-semibold tracking-normal leading-5 text-zinc-700 text-opacity-90">
            Le Hoang An
          </div>
          <div className="text-xs tracking-wide leading-4 text-zinc-700 text-opacity-40">
            Instructor
          </div>
        </div>
      </div>
      <div className="mt-3 w-full border border-solid bg-zinc-700 bg-opacity-10 border-zinc-700 border-opacity-10 min-h-[1px]" />
      <div className="ml-2">
        <Link href={""}>
          <div className="flex gap-2.5 mt-2.5 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
            <Image
              alt={"profile"}
              src={Account}
              className="shrink-0 aspect-square"
              width={16}
            />
            <span className="flex-1">Profile</span>
          </div>
        </Link>
        <div className="mt-3 w-full border border-solid bg-zinc-700 bg-opacity-10 border-zinc-700 border-opacity-10 min-h-[1px]" />
        <Link href={""}>
          <div className="flex gap-2.5 my-2.5 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
            <Image
              alt={"setting"}
              src={Setting}
              className="shrink-0 aspect-square"
              width={16}
            />
            <span className="flex-1">Setting</span>
          </div>
        </Link>
        <Link href={""}>
          <div className="flex gap-2.5 my-2.5 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
            <Image
              alt={"support"}
              src={Support}
              className="shrink-0 aspect-square"
              width={16}
            />
            <span className="flex-1">Support</span>
          </div>
        </Link>
        <div className="mt-3 w-full border border-solid bg-zinc-700 bg-opacity-10 border-zinc-700 border-opacity-10 min-h-[1px]" />
        <Link href={""}>
          <div className="flex gap-2.5 mt-2.5 text-base tracking-normal leading-6 whitespace-nowrap text-zinc-700 text-opacity-90">
            <Image
              alt={"logout"}
              src={Logout}
              className="shrink-0 aspect-square"
              width={16}
            />
            <span className="flex-1">Logout</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserDropdown;
