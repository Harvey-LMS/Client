import { apiGet, apiPost } from "@/api/api";

const getUser = async (param: RequestInit = {}) => {
  return await apiGet("user", param);
};

const postUser = async (data: any) => {
  return await apiPost("user", data);
};

export { getUser, postUser };
