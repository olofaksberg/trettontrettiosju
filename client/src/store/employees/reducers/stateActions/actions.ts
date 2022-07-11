
import { PayloadAction } from "@reduxjs/toolkit";
import { IinitState } from "../../employeesSlice.types";

interface Iaction {
    payload: any;
    type: string;
}

export const stateActions = {
    setChosenEmployee: (state: IinitState, action: Iaction) => {
        state.chosenEmployee = action.payload;
    },
    setLayout: (state: IinitState, action: Iaction) => {
        state.layout = action.payload;
    },
    setFilteredEmployees: (state: IinitState, action: Iaction) => {
        const filter = action.payload;
        if (!!filter) {
            state.filteredEmployees = state.employees.filter((d: any) => {
                if (filter.office.length > 0) {
                    return d.name.includes(filter.name) && filter.office.includes(d.office)
                } else {
                    return d.name.includes(filter.name)
                }
            })
        } else {
            state.filteredEmployees = [];
        }
    },
}