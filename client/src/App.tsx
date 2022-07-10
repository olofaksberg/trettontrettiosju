/** @format */

import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { GET } from "./utils";

function App() {
 useEffect(() => {
  const abortController = new AbortController();
  GET("/get_employees", abortController.signal);
  return () => abortController.abort();
 }, []);

 return <div className="App"></div>;
}

export default App;
