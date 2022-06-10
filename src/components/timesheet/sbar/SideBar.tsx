import {
  Avatar,
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import React from "react";
import avatar from "../../../assets/avatar/me.png";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import DateRangeIcon from "@mui/icons-material/DateRange";
import HomeIcon from "@mui/icons-material/Home";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import { sx } from "./sx";
import {useNavigate} from "react-router-dom"
const SideBar: React.FC = () => {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const loadPayProject = () => {
    navigate(`project`)
  };
  const loadPayTask= () => {
    
    navigate(`task`)
  };
  return (
    <Box sx={sx.form}>
      <Box sx={sx.login}>
        <Avatar alt="me" src={avatar}></Avatar>
        <Box>
          <Box>admin admin</Box>
          <Box>admin@aspnetboilerplate.com</Box>
        </Box>
      </Box>
      <MenuList sx={sx.menu}>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home page" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary="Admin" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PeopleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Roles" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <SettingsApplicationsIcon />
              </ListItemIcon>
              <ListItemText primary="Configuration" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PeopleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Clients" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={loadPayTask}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary="Tasks" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText primary="Leave types" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={loadPayProject}>
          <ListItemIcon>
            <InsertChartIcon />
          </ListItemIcon>
          <ListItemText primary="Project" />
        </ListItemButton>
      </MenuList>
    </Box>
  );
};

export default SideBar;
