import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Project from "./components/timesheet/container/projects/projects";
import { Tasks } from "./components/timesheet/container/tasks/tasks";
import Main from "./components/timesheet/Main";

function App() {
  return (
    <Project></Project>
  );
}

export default App;
