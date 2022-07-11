/** @format */

import { useDispatch, useSelector } from "react-redux";
import {
 employeesActions,
 employeesData,
} from "../../../store/employees/employeesSlice";

import "./employeesContainer.style.scss";
import { EmployeeListCard, EmployeeMainCard } from "../employeeCards";
import { useEffect, useState } from "react";
import { LayoutSettings } from "./components";

export const EmployeesContainer = () => {
 const dispatch = useDispatch();
 const { employees, filteredEmployees, layout } = useSelector(employeesData);
 const { setLayout } = useSelector(employeesActions);

 const [showData, setShowData] = useState([]);

 useEffect(() => {
  if (filteredEmployees.length > 0) {
   setShowData(filteredEmployees);
  } else {
   setShowData(employees);
  }
 }, [filteredEmployees]);

 return (
  <>
   <LayoutSettings />
   <section
    className={`employees-container ${layout === 0 ? "cards" : "list"}`}
   >
    {showData.map((d: any, i: number) => {
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
