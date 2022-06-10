import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Collapse,
  FormControlLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { sx } from "./sx";
import TeamMember from "./TeamMember/teamMember";
import ListItem from "./ListItem/listItem";
import { useAppSelector } from "../../../../../../../../redux/store";
import { safeSelect } from "../../../../../../../../redux/reducers/projectReducer";
import { useDispatch } from "react-redux";
import { getDataUse } from "../../../../../../../../redux/actions/projectAction";
import { IUser } from "../../../../../../../../api/type/typeProject";
// import { Container } from './styles';
interface ITeam {
  lists: IUser[];
  setList: (data: any) => void;
  users: IUser[];
  setUser: (data: any) => void;
}
const Team: React.FC<ITeam> = (props) => {
  const hadleAddTeam = (id: number) => {
    let search = props.users.filter((item) => item.id === id);
    let memberr = props.users.filter((item) => item.id !== id);
    if (props.lists.length === 0) {
      search = search.map((user) => {
        return { ...user, type: 1 };
      });
    }
    props.setUser(memberr);
    props.setList(props.lists.concat(search));
  };
  const hadleAddSearch = (id: number) => {
    const search = props.lists.filter((item) => item.id === id);
    const memberr = props.lists.filter((item) => item.id !== id);

    props.setUser(props.users.concat(search));
    props.setList(memberr);
  };
  return (
    <Box sx={sx.container}>
      <ListItem list={props.lists} hadleAddSearch={hadleAddSearch} />
      <TeamMember
        hadleAddTeam={hadleAddTeam}
        user={props.users}
        setUser={props.setUser}
      />
    </Box>
  );
};

export default Team;
