/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { EmployeesContainer, EmployeeModal } from "@/components/employees";
import { If } from "@/components/helpers";
import { Header, ToolsArea } from "@/components/layouts";

import { statuses } from "@/constants";

import { AppDispatch } from "@/store";
import { employeesData, fetchEmployees } from "@/store/employees";

import "./style/main.scss";

import { SmallScreenContext } from "./components/helpers/smallScreenContext/SmallScreenContext";

// export const ScreenContext = createContext<>(null);

const App = () => {
 const dispatch = useDispatch<AppDispatch>();
 const { employeesStatus, chosenEmployee } = useSelector(employeesData);

 const isSmallScreen = useMediaQuery({ query: "(max-width: 900px)" });

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
   <SmallScreenContext.Provider value={{ isSmallScreen }}>
    <If condition={!!chosenEmployee}>
     <EmployeeModal />
    </If>

    <Header />
    <ToolsArea />
    <EmployeesContainer />
   </SmallScreenContext.Provider>
  </div>
 );
};

export default App;
