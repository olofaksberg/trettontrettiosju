/** @format */

import { IemployeeMainCardProps } from "./employeeMainCard.types";

import "./employeeMainCard.style.scss";

export const EmployeeMainCard = (props: IemployeeMainCardProps) => {
 const { employee } = props;
 return <div className={`employee-maincard`}></div>;
};
