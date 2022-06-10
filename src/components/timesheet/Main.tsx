import { Box } from "@mui/material";
import React from "react";
import SideBar from "./sbar/SideBar";
import Header from "./header/Header";
import { sx } from "./sx";
import Container from "./container/Container";
import { Outlet } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <Box sx={sx.form}>
      <Header />
      <SideBar />
      <Outlet/>
    </Box>
  );
};

export default Main;
