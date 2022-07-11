/** @format */

import { EmployeesContainer } from "./components/employees";
import { Header, ToolsArea } from "./components/layouts";

const App = () => {
 return (
  <div className="App">
   <Header />
   <ToolsArea />
   <EmployeesContainer />
  </div>
 );
};

export default App;
