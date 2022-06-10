import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Main from "./components/timesheet/Main";
import { Tasks } from "./components/timesheet/container/tasks/tasks";
import { Provider } from "react-redux";
import store from "./redux/store";
import Project from "./components/timesheet/container/projects/projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<App></App>}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route>
            <Route path="/main" element={<Main />}>
              <Route path="task" element={<Tasks />} />
              <Route path="project" element={<Project />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
