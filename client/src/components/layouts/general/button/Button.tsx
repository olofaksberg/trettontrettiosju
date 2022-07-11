/** @format */

import { IbuttonProps } from "./button.types";

import "./button.style.scss";

export const Button = (props: IbuttonProps) => {
 const { iconClassName, text, action, customStyle } = props;

 return (
  <button className="button" onClick={action} style={customStyle}>
   {text}{" "}
   <span className="icon">
    <i className={iconClassName}></i>
   </span>
  </button>
 );
};
