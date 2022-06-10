import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Collapse,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  NativeSelect,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { sx } from "../sx";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { andress, levels, types } from "./lever";
import SelectMission from "../ListItem/SelectMission/selectMission";
import { useDispatch } from "react-redux";
import { getDataUse } from "../../../../../../../../../redux/actions/projectAction";
import { IUser } from "../../../../../../../../../api/type/typeProject";
import { useAppSelector } from "../../../../../../../../../redux/store";
import { safeSelect } from "../../../../../../../../../redux/reducers/projectReducer";
import { useDebounce } from "../../../../../../../../../hooks/useDebounce";
// import { Container } from './styles';

interface ITeamMember {
  hadleAddTeam: (id: number) => void;
  user: IUser[];
  setUser: (user: IUser[]) => void;
}
const TeamMember: React.FC<ITeamMember> = (props) => {
  const [openSearchMember, setOpenSearchMember] = useState(false);
  const handleClickOpenSearchMember = () => {
    setOpenSearchMember(!openSearchMember);
  };
  const [stateSearch, setStateSearch] = useState<any[]>([]);
  const [searchMember, setSearchMember] = useState<string>("");
  const debouncedValue: string = useDebounce<string>(searchMember, 2000);
  const handleSearchMember = () => {
    const search = props.user.filter((item) => item.name === debouncedValue);
    setStateSearch(search);
  };
  useEffect(() => {
    const b = setTimeout(() => {
      handleSearchMember();
    });
    return () => {
      clearTimeout(b);
    };
  }, [debouncedValue]);
  return (
    <Box sx={sx.listMember}>
      <ListItemButton onClick={handleClickOpenSearchMember}>
        <ListItemText primary="Team" />
        {openSearchMember ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSearchMember} timeout="auto" unmountOnExit>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ width: "20%" }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Branch
              </InputLabel>
              <NativeSelect defaultValue={1}>
                <option value={1}>All</option>
                <option value={2}>Ha Noi</option>
                <option value={3}>Da Nang</option>
                <option value={4}>Ho Chi Minh</option>
                <option value={5}>Vinh</option>
              </NativeSelect>
            </FormControl>
          </Box>
          <Box sx={{ width: "20%" }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Type
              </InputLabel>
              <NativeSelect defaultValue={1}>
                <option value={1}>All</option>
                <option value={2}>Staff</option>
                <option value={3}>Internship</option>
                <option value={4}>Collaborator</option>
              </NativeSelect>
            </FormControl>
          </Box>
          <Box sx={{ width: "60%", display: "flex" }}>
            <SearchIcon />
            <TextField
              id="standard-basic"
              label="Search by name, email"
              variant="standard"
              sx={{ width: "100%" }}
              onChange={(e) => setSearchMember(e.target.value)}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <List sx={sx.list}>
            {props.user &&
              props.user.map((item, index) => (
                <Box
                  key={item.id}
                  sx={() => sx.listContainer(index)}
                  onClick={() => props.hadleAddTeam(item.id)}
                >
                  <ArrowBackIosNewRoundedIcon />
                  <Avatar
                    src={`http://timesheetapi.nccsoft.vn${item.avatarPath}`}
                  ></Avatar>
                  <Box>
                    <Box sx={sx.content}>
                      <Box>{item.name}</Box>
                      <Box
                        sx={{
                          backgroundColor:
                            item.branch == 0
                              ? andress[0].backgroundColor
                              : item.branch === null
                              ? "#F44336"
                              : andress[item.branch].backgroundColor,
                          borderRadius:
                            item.branch == 0
                              ? andress[0].borderRadius
                              : item.branch === null
                              ? "10px"
                              : andress[item.branch].borderRadius,
                          padding: "2px 6px 3px 6px",
                          fontSize: "75%",
                          height: "22px",
                          color: "white",
                        }}
                      >
                        {item.branch == 0 ? (
                          andress[0].name
                        ) : item.branch === null ? (
                          <Box>Null</Box>
                        ) : (
                          andress[item.branch].name
                        )}
                      </Box>

                      <Box
                        sx={{
                          backgroundColor:
                            item.type == 0
                              ? types[0].backgroundColor
                              : item.type === null
                              ? "#F44336"
                              : types[item.type].backgroundColor,
                          borderRadius:
                            item.type == 0
                              ? types[0].borderRadius
                              : item.type === null
                              ? "10px"
                              : types[item.type].borderRadius,
                          padding: "2px 6px 3px 6px",
                          fontSize: "75%",
                          height: "22px",
                          color: "white",
                        }}
                      >
                        {item.type == 0 ? (
                          types[0].name
                        ) : item.type === null ? (
                          <Box>Null</Box>
                        ) : (
                          types[item.type].name
                        )}
                      </Box>
                      <Box
                        sx={{
                          backgroundColor:
                            item.level == 0
                              ? levels[0].backgroundColor
                              : item.level === null
                              ? "#F44336"
                              : levels[item.level].backgroundColor,
                          borderRadius:
                            item.level == 0
                              ? levels[0].borderRadius
                              : item.level === null
                              ? "10px"
                              : levels[item.level].borderRadius,
                          padding: "2px 6px 3px 6px",
                          fontSize: "75%",
                          height: "22px",
                          color: "white",
                        }}
                      >
                        {item.level == 0 ? (
                          levels[0].name
                        ) : item.level === null ? (
                          <Box>Null</Box>
                        ) : (
                          levels[item.level].name
                        )}
                      </Box>
                    </Box>
                    <Box>{item.emailAddress}</Box>
                  </Box>
                </Box>
              ))}
          </List>
        </Box>
      </Collapse>
    </Box>
  );
};

export default TeamMember;
