/** @format */

import { useDispatch, useSelector } from "react-redux";
import {
 employeesActions,
 employeesData,
} from "../../../store/employees/employeesSlice";

import { Image } from "../../layouts";

import "./employeeModal.style.scss";

export const EmployeeModal = () => {
 const dispatch = useDispatch();
 const { chosenEmployee } = useSelector(employeesData);
 const { setChosenEmployee } = useSelector(employeesActions);

 return (
  <section className="employee-modal">
   <div className="container flex JC-SB">
    <div className="modal-left">
     <h1 className="emp-name">{chosenEmployee.name}</h1>

     <div>{chosenEmployee.mainText.replaceAll(/<[^>]*>/g, " ")}</div>
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
