/** @format */

import { IbuttonProps } from "./button.types";

import "./button.style.scss";

export const Button = (props: IbuttonProps) => {
 const { iconClassName, text, action } = props;

 return (
  <button className="button" onClick={action}>
   {text}{" "}
   <span className="icon">
    <i className={iconClassName}></i>
   </span>
  </button>
 );
};
