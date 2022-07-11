import { ActionReducerMapBuilder } from "@reduxjs/toolkit"
import { statuses } from "../../../../constants/http/statuses";

import { IinitState } from "../../employeesSlice.types";
import { fetchEmployees } from "./fetches";


export const fetchActions = (builder: ActionReducerMapBuilder<IinitState>) => {
    builder
        .addCase(fetchEmployees.pending, (state, action) => {
            state.status = statuses.LOADING;
        })
        .addCase(fetchEmployees.fulfilled, (state, action) => {
            const { success, message, data } = action.payload;
            if (success) {
                state.status = statuses.SUCCEEDED;
                state.employees = data;
            } else {
                state.status = statuses.FAILED;
                state.message = message;
            }
        })
        .addCase(fetchEmployees.rejected, (state, action) => {
            state.status = statuses.FAILED;
            state.error = action.error.message;
        })
}
