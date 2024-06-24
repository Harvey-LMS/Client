"use server";

import { get, post } from "@/service/api";

export const getUser = async (url: string, param = {}) => {
    try {
        const response = await get(url, param);
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

export const postUser = async (url: string, body = {}) => {
    try {
        const response = await post(url, body);
        return response.json();
    } catch (error) {
        console.error(error);
    }
}