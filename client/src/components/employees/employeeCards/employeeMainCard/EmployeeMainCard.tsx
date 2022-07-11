/** @format */

import { Image } from "../../../layouts";
import { IemployeeMainCardProps } from "./employeeMainCard.types";

import "./employeeMainCard.style.scss";
import { If } from "../../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { employeesActions } from "../../../../store/employees/employeesSlice";

export const EmployeeMainCard = (props: IemployeeMainCardProps) => {
 const { employee } = props;
 const dispatch = useDispatch();
 const { setChosenEmployee } = useSelector(employeesActions);

 return (
  <div className={`employee-maincard flex FD-C JC-SB`}>
   <div className="card-top">
    <Image source={employee.imagePortraitUrl} />

    <div className="info-container">
     <h2 className="emp-name">{employee.name}</h2>

     <div className="icons flex JC-C">
      <If condition={!!employee.linkedIn}>
       <a href={`https://linkedin.com${employee.linkedIn}`}>
        <i className="fa-brands fa-linkedin"></i>
       </a>
      </If>

      <If condition={!!employee.gitHub}>
       <a href={`https://github.com/${employee.gitHub}`}>
        <i className="fa-brands fa-github"></i>
       </a>
      </If>

      <If condition={!!employee.twitter}>
       <a href={`https://twitter.com/${employee.twitter}`}>
        <i className="fa-brands fa-twitter"></i>
       </a>
      </If>
     </div>
    </div>
   </div>

   <div className="card-bottom">
    <div>
     location: <span>{employee.office}</span>
    </div>
    <div>
     phone: <span>{employee.phoneNumber}</span>
    </div>
    <div>
     email: <span>{employee.email}</span>
    </div>

    <div
     className="more-info"
     onClick={() => dispatch(setChosenEmployee(employee))}
    >
     More about {employee.name?.split(" ")[0]}
    </div>
   </div>
  </div>
 );
};
