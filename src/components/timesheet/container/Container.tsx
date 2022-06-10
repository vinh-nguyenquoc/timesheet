import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Project from "./projects/projects";
import { Tasks } from "./tasks/tasks";

// import { Container } from './styles';

const Container: React.FC = () => {
  return (
    <Box>
      <Tasks />
      <Project/>
    </Box>
  );
};

export default Container;
