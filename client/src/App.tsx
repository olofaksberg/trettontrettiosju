/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmployeesContainer } from "./components/employees";
import { EmployeeModal } from "./components/employees/employeeModal/EmployeeModal";
import { If } from "./components/helpers";
import { Header, ToolsArea } from "./components/layouts";
import { statuses } from "./constants/http/statuses";
import { AppDispatch } from "./store";
import { employeesData } from "./store/employees/employeesSlice";
import { fetchEmployees } from "./store/employees/reducers";

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
