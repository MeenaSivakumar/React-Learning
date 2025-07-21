import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { EmailPage,NameDetails,SummaryDetails } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EmailPage/>} />
      <Route path="/nameInfo" element={<NameDetails/>} />
      <Route path="/summary" element={<SummaryDetails/>} />
    </Routes>
  );
}

export default App;
