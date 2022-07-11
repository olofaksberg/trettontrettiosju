/** @format */

import { IinputTextProps } from "./inputText.types";

import "./inputText.style.scss";

export const InputText = (props: IinputTextProps) => {
 const { name, label, value, reference, action } = props;
 return (
  <div className="input-text">
   <input
    className="input__field"
    type={"text"}
    name={name}
    placeholder={label}
    ref={reference}
    value={value}
    onChange={action}
   />
   <label className="input__label">{label}</label>
  </div>
 );
};
