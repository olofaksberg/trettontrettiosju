import { IGET } from "./http.types";

const api_address = "https://trettontrettiosju.herokuapp.com/";


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