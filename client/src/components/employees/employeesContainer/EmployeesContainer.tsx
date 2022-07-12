/** @format */

import { useSelector } from "react-redux";
import { employeesData } from "../../../store/employees/employeesSlice";

import "./employeesContainer.style.scss";
import { EmployeeListCard, EmployeeMainCard } from "../employeeCards";
import { useEffect, useState } from "react";
import { LayoutSettings } from "./components";
import { IemployeeModel } from "../../../constants/employees";
import { employeesLayout } from "../../../constants/layouts";

export const EmployeesContainer = () => {
 const { employees, filteredEmployees, layout } = useSelector(employeesData);

 const [employeesArray, setEmployeesArray] = useState([]);

 useEffect(() => {
  if (filteredEmployees.length > 0) {
   setEmployeesArray(filteredEmployees);
  } else {
   setEmployeesArray(employees);
  }
 }, [filteredEmployees]);

 return (
  <>
   <LayoutSettings />
   <section
    className={`employees-container ${
     layout === employeesLayout.CARD ? "cards" : "list"
    }`}
   >
    {employeesArray.map((d: IemployeeModel) => {
     return layout === employeesLayout.CARD ? (
      <EmployeeMainCard employee={d} />
     ) : (
      <EmployeeListCard employee={d} />
     );
    })}
   </section>
  </>
 );
};
