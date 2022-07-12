/** @format */

import { If } from "@/components/helpers";
import { Button, InputText, InputCheckbox } from "@/components/layouts";

import { IemployeeModel, offices } from "@/constants";

import { useHandleToolsArea } from "./utils";
import "./toolsArea.style.scss";

export const ToolsArea = () => {
 const {
  employees,
  showSearch,
  setShowSearch,
  filter,
  setFilter,
  reset,
  search,
 } = useHandleToolsArea();

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
         setFilter((prev) => {
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
          .filter((d: IemployeeModel) => d.name.includes(filter.name))
          .map((d: IemployeeModel) => {
           return (
            <div
             onClick={() => {
              setFilter((prev) => {
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
           setFilter((prev) => {
            return {
             ...prev,
             office: prev.office.includes(e.target.name)
              ? prev.office.filter((d) => d !== e.target.name)
              : [...prev.office, e.target.name],
            };
           })
          }
         />
        );
       })}
      </div>
     </section>

     <div className="flex JC-C FG-2 m-top-1">
      <Button
       text="Reset"
       iconClassName="fa-solid fa-minus"
       action={() => reset()}
      />
      <Button
       text="Search"
       iconClassName="fa-solid fa-magnifying-glass"
       action={() => search()}
      />
     </div>
    </>
   </If>
  </section>
 );
};
