import { IGET } from "./http.types";

const api_address = "http://localhost:8001";

export const GET: IGET = async (endpoint, signal) => {
    try {
        const res = await fetch(api_address + endpoint, {
            method: "GET",
            signal,
        })
        return res.json();
    } catch (err: any) {
        return Promise.reject({
            message: err.message,
            success: false,
            data: null,
        })
    }
};