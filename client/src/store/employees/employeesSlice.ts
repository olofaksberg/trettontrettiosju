/** @format */

import { createSlice } from "@reduxjs/toolkit";

import { fetchActions, stateActions } from "./reducers";
import { IinitState } from "./employeesSlice.types";

const initialState: IinitState = {
    employees: [],
    chosenEmployee: null,
    layout: 0,
    filteredEmployees: [],
    status: 0,
    error: null,
    message: null,
};

export const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: stateActions,
    extraReducers(builder) {
        fetchActions(builder)
    }
});

// export actions
export const employeesActions = () => {
    const origin = employeesSlice.actions;
    return {

    };
};

// export data
export const employeesData = (state: any) => {
    const origin = state.employees;
    return {
        employees: origin.employees,
        chosenEmployee: origin.chosenEmployee,
        layout: origin.layout,
        filteredEmployees: origin.filteredEmployees,
        employeesStatus: origin.status,
        employeesMessage: origin.message,
    };
};

export default employeesSlice.reducer;
