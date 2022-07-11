/** @format */

import { useSelector } from "react-redux";
import { employeesData } from "../../../store/employees/employeesSlice";

import "./employeesContainer.style.scss";
import { EmployeeListCard, EmployeeMainCard } from "../employeeCards";
import { useEffect, useState } from "react";

export const EmployeesContainer = () => {
 const { employees, filteredEmployees, layout } = useSelector(employeesData);

 const [showData, setShowData] = useState([]);

 useEffect(() => {
  if (filteredEmployees.length > 0) {
   setShowData(filteredEmployees);
  } else {
   setShowData(employees);
  }
 }, [filteredEmployees]);

 return (
  <section className={`employees-container ${layout === 0 ? "cards" : "list"}`}>
   {showData.map((d: any, i: number) => {
    return layout === 1 ? (
     <EmployeeListCard employee={d} />
    ) : (
     <EmployeeMainCard employee={d} />
    );
   })}
  </section>
 );
};
