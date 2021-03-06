/** @format */

import { If } from "@/components/helpers";
import { Image } from "@/components/layouts";

import { hasLinks } from "../utils/hasLinks";
import { IemployeeListCardProps } from "./employeeListCard.types";
import "./employeeListCard.style.scss";

export const EmployeeListCard = (props: IemployeeListCardProps) => {
 const { employee } = props;

 return (
  <div className={`employee-listcard flex`}>
   <Image source={employee.imagePortraitUrl} />

   <div className="info-container">
    <h2 className="emp-name">{employee.name}</h2>

    <If condition={hasLinks(employee)}>
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
    </If>

    <div className="contact-info">
     <div>
      location: <span>{employee.office}</span>
     </div>
     <div>
      phone: <span>{employee.phoneNumber}</span>
     </div>
     <div>
      email: <span>{employee.email}</span>
     </div>
    </div>
   </div>
   <div className="more-info">
    <div>{employee.mainText?.replaceAll(/<[^>]*>/g, " ")}</div>
   </div>
  </div>
 );
};
