"use server";

import { apiPost } from "@/api/api";
import { revalidateTag } from "next/cache";

const handle = async (username: string, gmail: string, password: string) => {
  const input = {
    username,
    gmail,
    password,
  };
  const result = await apiPost("user", input);
  revalidateTag("user");
  console.log(result);
};

export default handle;
