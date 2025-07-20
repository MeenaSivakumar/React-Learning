import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { EmailPage } from "./pages/email_page";
import { NameDetails } from "./pages/name_info";
import { SummaryDetails } from "./pages/summary";

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
