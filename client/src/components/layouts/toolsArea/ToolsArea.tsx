/** @format */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { offices } from "../../../constants/employees";
import {
 employeesActions,
 employeesData,
} from "../../../store/employees/employeesSlice";
import { If } from "../../helpers";
import { Button, InputText, InputCheckbox } from "../general";

import "./toolsArea.style.scss";

export const ToolsArea = () => {
 const dispatch = useDispatch();
 const { employees } = useSelector(employeesData);
 const { setFilteredEmployees } = useSelector(employeesActions);

 const [showSearch, setShowSearch] = useState(false);

 const [filter, setFilter] = useState({
  name: "",
  office: [],
 });

 return (
  <section className="tools-container">
   <h1 onClick={() => setShowSearch(!showSearch)}>
    Search Employees{" "}
    <span>
     <i
      className={`fa-solid ${showSearch ? "fa-angle-up" : "fa-angle-down"}`}
     ></i>
    </span>
   </h1>
   <If condition={showSearch}>
    <>
     <section className="input-container flex JC-C FG-10">
      <div className="m-top-1">
       <InputText
        name="search"
        label="Name"
        value={filter.name}
        action={(e) =>
         setFilter((prev: any) => {
          return {
           ...prev,
           name: e.target.value,
          };
         })
        }
       />

       <If condition={filter.name !== ""}>
        <div className="searchRes">
         {employees
          .filter((d: any) => d.name.includes(filter.name))
          .map((d: any) => {
           return (
            <div
             onClick={() => {
              setFilter((prev: any) => {
               return {
                ...prev,
                name: d.name,
               };
              });
             }}
            >
             {d.name}
            </div>
           );
          })}
        </div>
       </If>
      </div>

      <div className="flex FD-C JC-SA">
       <h4>Offices</h4>
       {offices.map((d) => {
        return (
         <InputCheckbox
          name={d}
          label={d}
          action={(e) =>
           setFilter((prev: any) => {
            return {
             ...prev,
             office: prev.office.includes(e.target.name)
              ? prev.office.filter((d: any) => d !== e.target.name)
              : [...prev.office, e.target.name],
            };
           })
          }
         />
        );
       })}
      </div>
     </section>
     <div className="flex JC-C FG-2">
      <Button
       text="Reset"
       iconClassName="fa-solid fa-minus"
       action={() => dispatch(setFilteredEmployees(false))}
      />
      <Button
       text="Search"
       iconClassName="fa-solid fa-magnifying-glass"
       action={() => dispatch(setFilteredEmployees(filter))}
      />
     </div>
    </>
   </If>
  </section>
 );
};
