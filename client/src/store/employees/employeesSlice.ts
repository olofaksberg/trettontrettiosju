/** @format */

import { createSlice } from "@reduxjs/toolkit";

import { employeesLayout, statuses } from "@/constants";

import { fetchActions, stateActions } from "./reducers";
import { IinitState } from "./employeesSlice.types";

const initialState: IinitState = {
    employees: [],
    chosenEmployee: null,
    layout: employeesLayout.CARD,
    filteredEmployees: false,
    status: statuses.IDLE,
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
        setChosenEmployee: origin.setChosenEmployee,
        setLayout: origin.setLayout,
        setFilteredEmployees: origin.setFilteredEmployees,
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
