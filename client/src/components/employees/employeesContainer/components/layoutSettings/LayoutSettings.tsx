/** @format */

import { useDispatch, useSelector } from "react-redux";
import {
 employeesActions,
 employeesData,
} from "../../../../../store/employees/employeesSlice";

import "./layoutSettings.style.scss";

export const LayoutSettings = () => {
 const dispatch = useDispatch();
 const { layout } = useSelector(employeesData);
 const { setLayout } = useSelector(employeesActions);

 return (
  <div className="layouts">
   <i
    className={`fa-solid fa-list ${layout === 1 ? "active" : ""}`}
    onClick={() => {
     if (layout !== 1) dispatch(setLayout(1));
    }}
   ></i>
   <i
    className={`fa-solid fa-qrcode ${layout === 0 ? "active" : ""}`}
    onClick={() => {
     if (layout !== 0) dispatch(setLayout(0));
    }}
   ></i>
  </div>
 );
};
