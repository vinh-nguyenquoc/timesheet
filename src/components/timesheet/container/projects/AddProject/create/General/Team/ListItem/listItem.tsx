import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Collapse,
  FormControl,
  FormControlLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  NativeSelect,
  TextField,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { sx } from "../sx";
import { andress, levels, types } from "../TeamMember/lever";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ClearIcon from "@mui/icons-material/Clear";
import SelectMission from "./SelectMission/selectMission";
import { IUser } from "../../../../../../../../../api/type/typeProject";
interface IListItem {
  list: IUser[];
  hadleAddSearch: (id: number) => void;
}
const ListItem: React.FC<IListItem> = (props) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box sx={sx.listTeam}>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Team" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit sx={sx.containerSearch}>
        <Box sx={{ display: "flex" }}>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                sx={{
                  "&.Mui-checked": {
                    color: pink[200],
                  },
                }}
              />
            }
            label="Show deactive member"
          ></FormControlLabel>
          <Box sx={sx.search}>
            <SearchIcon />
            <TextField
              id="standard-basic"
              label="Search by name, email"
              variant="standard"
              sx={{ width: "100%" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <List sx={sx.list}>
            {props.list &&
              props.list.map((item, index) => (
                <Box key={item.id} sx={() => sx.listContainer(index)}>
                  <Button
                    onClick={() => props.hadleAddSearch(item.id)}
                    sx={{ width: "10%" }}
                  >
                    <ClearIcon />
                  </Button>
                  <Box sx={{ width: "10%" }}>
                    <Avatar
                      src={`http://timesheetapi.nccsoft.vn${item.avatarPath}`}
                    ></Avatar>
                  </Box>

                  <Box sx={{ width: "50%" }}>
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
                              ? "#F44336"
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "30%",
                    }}
                  >
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <NativeSelect defaultValue={item.type}>
                        <option value={0}>Member</option>
                        <option value={1}>Project Manager</option>
                        <option value={2}>Shadow</option>
                        <option value={3}>Deactive</option>
                      </NativeSelect>
                    </FormControl>

                    <ArrowForwardIosIcon
                      onClick={() => props.hadleAddSearch(item.id)}
                    />
                  </Box>
                </Box>
              ))}
          </List>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ListItem;
