/** @format */

import { IinputCheckboxProps } from "./inputCheckbox.types";

import "./inputCheckbox.style.scss";

export const InputCheckbox = (props: IinputCheckboxProps) => {
 const { name, label, value, reference, action } = props;
 return (
  <div>
   <input
    className="input-checkbox"
    type="checkbox"
    name={name}
    ref={reference}
    onChange={action}
   />
   <label>{label}</label>
  </div>
 );
};

{
 /* <div>
   <input type="checkbox" name={name} ref={reference} onChange={action} />
   <label>{label}</label>
  </div> */
}
