import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiEndpoints } from "../../../../constants";
import { GET } from "../../../../utils";

export const fetchEmployees = createAsyncThunk("fetchEmployees", async (signal: AbortSignal) => {
    const res = await GET(apiEndpoints.EMPLOYEES.GET_ALL, signal);
    return res;
});

