/** @format */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { EmployeeListCard, EmployeeMainCard } from "@/components/employees";
import { If } from "@/components/helpers";
import { useSmallScreen } from "@/components/helpers";
import { LayoutSettings } from "./components";

import { IemployeeModel, employeesLayout } from "@/constants";

import { employeesData } from "@/store/employees";

import "./employeesContainer.style.scss";

export const EmployeesContainer = () => {
 const { employees, filteredEmployees, layout } = useSelector(employeesData);
 const { isSmallScreen } = useSmallScreen();

 const [employeesArray, setEmployeesArray] = useState<IemployeeModel[]>([]);

 useEffect(() => {
  if (filteredEmployees.length > 0) {
   setEmployeesArray(filteredEmployees);
  } else {
   setEmployeesArray(employees);
  }
 }, [filteredEmployees]);

 return (
  <>
   <If condition={!isSmallScreen}>
    <LayoutSettings />
   </If>

   <section
    className={`employees-container ${
     layout === employeesLayout.CARD ? "cards" : "list"
    }`}
   >
    {employeesArray.map((d) => {
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
