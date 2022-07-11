
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
}