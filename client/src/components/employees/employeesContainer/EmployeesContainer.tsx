/** @format */

import { useDispatch, useSelector } from "react-redux";
import {
 employeesActions,
 employeesData,
} from "../../../store/employees/employeesSlice";

import "./employeesContainer.style.scss";
import { EmployeeListCard, EmployeeMainCard } from "../employeeCards";
import { useEffect, useState } from "react";

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
   <div className="layouts">
    <i
     className="fa-solid fa-list"
     onClick={() => {
      if (layout !== 1) dispatch(setLayout(1));
     }}
    ></i>
    <i
     className="fa-solid fa-qrcode"
     onClick={() => {
      if (layout !== 0) dispatch(setLayout(0));
     }}
    ></i>
   </div>
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
