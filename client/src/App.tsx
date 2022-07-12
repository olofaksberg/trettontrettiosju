/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { EmployeesContainer, EmployeeModal } from "@/components/employees";
import { If } from "@/components/helpers";
import { Header, ToolsArea } from "@/components/layouts";

import { statuses } from "@/constants";

import { AppDispatch } from "@/store";
import { employeesData, fetchEmployees } from "@/store/employees";

import "./style/main.scss";

const App = () => {
 const dispatch = useDispatch<AppDispatch>();
 const { employeesStatus, chosenEmployee } = useSelector(employeesData);

 useEffect(() => {
  if (employeesStatus === statuses.IDLE) {
   const abortController = new AbortController();
   dispatch(fetchEmployees(abortController.signal));
   return () => abortController.abort();
  }
 }, []);

 if (employeesStatus !== statuses.SUCCEEDED) {
  return <div>loading</div>;
 }

 return (
  <div className="App">
   <If condition={!!chosenEmployee}>
    <EmployeeModal />
   </If>

   <Header />
   <ToolsArea />
   <EmployeesContainer />
  </div>
 );
};

export default App;
