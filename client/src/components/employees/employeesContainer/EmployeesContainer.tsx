/** @format */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { EmployeeListCard, EmployeeMainCard } from "@/components/employees";
import { If } from "@/components/helpers";
import { useSmallScreen } from "@/components/helpers";
import { LayoutSettings } from "./components";
import { useHandleToolsArea } from "@/components/layouts/toolsArea/utils";

import { IemployeeModel, employeesLayout } from "@/constants";

import { employeesData } from "@/store/employees";

import "./employeesContainer.style.scss";
import { Button } from "@/components/layouts";

export const EmployeesContainer = () => {
 const { employees, filteredEmployees, layout } = useSelector(employeesData);
 const { reset } = useHandleToolsArea();
 const { isSmallScreen } = useSmallScreen();

 const [employeesArray, setEmployeesArray] = useState<IemployeeModel[]>([]);

 useEffect(() => {
  if (!!filteredEmployees) {
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
    <If condition={employeesArray.length > 0}>
     <>
      {employeesArray.map((d) => {
       return layout === employeesLayout.CARD ? (
        <EmployeeMainCard employee={d} />
       ) : (
        <EmployeeListCard employee={d} />
       );
      })}
     </>
    </If>
    <If condition={employeesArray.length < 1}>
     <div className="no-results">
      <h3 className="m-bottom-1">No employees found :(</h3>
      <Button
       text="Show all employees"
       iconClassName="fa-solid fa-user-group"
       action={() => reset()}
      />
     </div>
    </If>
   </section>
  </>
 );
};
