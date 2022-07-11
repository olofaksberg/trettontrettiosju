/** @format */

import { useSelector } from "react-redux";
import { employeesData } from "../../../store/employees/employeesSlice";

import "./employeesContainer.style.scss";
import { EmployeeListCard, EmployeeMainCard } from "../employeeCards";
import { useEffect, useState } from "react";
import { LayoutSettings } from "./components";

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
    className={`employees-container ${layout === 0 ? "cards" : "list"}`}
   >
    {employeesArray.map((d: any, i: number) => {
     return layout === 1 ? (
      <EmployeeListCard employee={d} />
     ) : (
      <EmployeeMainCard employee={d} />
     );
    })}
   </section>
  </>
 );
};
