/** @format */

import { useDispatch, useSelector } from "react-redux";

import { Image } from "@/components/layouts";

import { employeesActions, employeesData } from "@/store/employees";

import "./employeeModal.style.scss";

export const EmployeeModal = () => {
 const dispatch = useDispatch();
 const { chosenEmployee } = useSelector(employeesData);
 const { setChosenEmployee } = useSelector(employeesActions);

 const mainText = chosenEmployee.mainText
  ? chosenEmployee.mainText.replaceAll(/<[^>]*>/g, " ")
  : `No text about ${chosenEmployee.name.split(" ")[0]}`;

 return (
  <section className="employee-modal">
   <div className="container flex JC-SB">
    <div className="modal-left">
     <h1 className="emp-name">{chosenEmployee.name}</h1>

     <div>{mainText}</div>
    </div>
    <div className="modal-right">
     <Image source={chosenEmployee.imageWallOfLeetUrl} />
    </div>

    <div
     className="close-modal"
     onClick={() => dispatch(setChosenEmployee(null))}
    >
     <i className="fa-solid fa-xmark"></i>
    </div>
   </div>
  </section>
 );
};
