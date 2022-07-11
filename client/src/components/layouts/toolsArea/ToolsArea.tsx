/** @format */

import { useState } from "react";
import { useSelector } from "react-redux";
import { offices } from "../../../constants/employees";
import { employeesData } from "../../../store/employees/employeesSlice";
import { If } from "../../helpers";
import { Button, InputText, InputCheckbox } from "../general";

import "./toolsArea.style.scss";

export const ToolsArea = () => {
 const { employees, layout } = useSelector(employeesData);

 const [filter, setFilter] = useState({
  name: "",
  office: [],
 });

 return (
  <section className="tools-container">
   <h1>Search Employees</h1>
   <section className="input-container flex JC-SB">
    <div className="flex FG-4">
     <div className="m-top-1">
      <InputText
       name="search"
       label="Search employee"
       value={filter.name}
       action={() => console.log("swag")}
      />

      <If condition={filter.name !== ""}>
       <div className="searchRes">
        {employees
         .filter((d: any) => d.name.includes(filter.name))
         .map((d: any) => {
          return <div onClick={() => console.log("swag")}>{d.name}</div>;
         })}
       </div>
      </If>
     </div>

     <div className="flex FD-C JC-SA">
      {offices.map((d) => {
       return (
        <InputCheckbox name={d} label={d} action={() => console.log("swag")} />
       );
      })}
     </div>
    </div>

    <div className="flex FD-C JC-C AI-C FG-2">
     <Button
      text="Reset"
      iconClassName="fa-solid fa-minus"
      action={() => console.log("swag")}
     />
     <Button
      text="Search"
      iconClassName="fa-solid fa-magnifying-glass"
      action={() => console.log("swag")}
     />
    </div>
   </section>
   <div className="layouts">
    <i
     className="fa-solid fa-list"
     onClick={() => {
      if (layout !== 1) console.log("swag");
     }}
    ></i>
    <i
     className="fa-solid fa-qrcode"
     onClick={() => {
      if (layout !== 0) console.log("swag");
     }}
    ></i>
   </div>
  </section>
 );
};
