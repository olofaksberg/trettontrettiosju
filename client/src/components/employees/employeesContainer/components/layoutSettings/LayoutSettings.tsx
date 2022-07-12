/** @format */

import { useDispatch, useSelector } from "react-redux";
import { employeesLayout } from "../../../../../constants/layouts";
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
    className={`fa-solid fa-list ${
     layout === employeesLayout.LIST ? "active" : ""
    }`}
    onClick={() => {
     if (layout !== employeesLayout.LIST)
      dispatch(setLayout(employeesLayout.LIST));
    }}
   ></i>
   <i
    className={`fa-solid fa-qrcode ${
     layout === employeesLayout.CARD ? "active" : ""
    }`}
    onClick={() => {
     if (layout !== employeesLayout.CARD)
      dispatch(setLayout(employeesLayout.CARD));
    }}
   ></i>
  </div>
 );
};
