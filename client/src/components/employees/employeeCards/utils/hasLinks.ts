import { IemployeeModel } from "../../../../constants/employees";

export const hasLinks = (e: IemployeeModel) => {
    if (e.gitHub || e.linkedIn || e.twitter) {
        return true;
    } else {
        return false;
    }
}