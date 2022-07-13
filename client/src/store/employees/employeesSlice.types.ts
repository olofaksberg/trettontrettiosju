import { IemployeeModel } from "@/constants";

export interface IinitState {
    employees: IemployeeModel[],
    chosenEmployee: IemployeeModel | null,
    layout: number,
    filteredEmployees: IemployeeModel[] | false,
    status: number,
    error: string | null | undefined,
    message: string | null,
}