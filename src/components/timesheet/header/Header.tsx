import { Box, IconButton, MenuItem, Select } from "@mui/material";
import React from "react";
import logo from "../../../assets/icon/logoNcc.png";
import styled from "@emotion/styled";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { sx } from "./sx";
// import { Container } from './styles';
const Img = styled.img`
  width: 30px;
  height: 30px;
`;

const Header: React.FC = () => {
  return (
    <Box sx={sx.main}>
      <Box sx={sx.logo}>
        <Img src={logo} alt="logo" />
        <Box sx={sx.white}>Timesheet</Box>
      </Box>
      <Box sx={sx.headerNav}>
        <MoreHorizIcon sx={sx.moreHorizIcon} />
      </Box>
    </Box>
  );
};

export default Header;
