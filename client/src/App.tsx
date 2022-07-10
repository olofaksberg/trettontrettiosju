/** @format */

import { useEffect } from "react";
import { GET } from "./utils";

const App = () => {
 useEffect(() => {
  const abortController = new AbortController();
  GET("/get_employees", abortController.signal);
  return () => abortController.abort();
 }, []);

 return <div className="App"></div>;
};

export default App;
