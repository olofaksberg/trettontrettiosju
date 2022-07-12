/** @format */

import { IinputCheckboxProps } from "./inputCheckbox.types";

import "./inputCheckbox.style.scss";

export const InputCheckbox = (props: IinputCheckboxProps) => {
 const { name, label, reference, action } = props;
 return (
  <div className="input-checkbox">
   <input type="checkbox" name={name} ref={reference} onChange={action} />
   <label>{label}</label>
  </div>
 );
};
