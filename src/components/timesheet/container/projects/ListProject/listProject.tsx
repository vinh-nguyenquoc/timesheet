import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { sx } from "../sx";
import Moment from "moment";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClearIcon from "@mui/icons-material/Clear";
import { format } from "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { formatDate } from "../../../../../utils/formatDate";
import { ICustomeName } from "../../../../../redux/interface/IProjectRedux";
import { IProject } from "../../../../../api/type/typeProject";
// import { Container } from './styles';
interface IListProject {
  projects: any[];
}
const ListProject: React.FC<IListProject> = (props) => {
  const list = props.projects.reduce((cus: ICustomeName, key: IProject) => {
    const cusN = cus[key.customerName] || [];
    cusN.push(key);
    cus[key.customerName] = cusN;
    return cus;
  }, {});
  // const test1 = Object.keys(test).map((group) => {
  //   props.projects
  //     .filter((item) => item.customerName === group)
  //     .map((item) => item.name);
  // });
  // console.log(test1);

  return (
    <Box sx={{ p: "20px" }}>
      {Object.keys(list).map((project) => {
        return (
          <Paper
            sx={{ width: "100%" }}
            key={Object.keys(list).indexOf(project)}
          >
            <TableContainer sx={{ maxHeight: "100%" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        backgroundColor: "lightgray",
                        borderRadius: "5px",
                      }}
                    >
                      <Box>{project}</Box>
                    </TableCell>
                  </TableRow>
                </TableHead>
                {props.projects
                  .filter((item) => item.customerName === project)
                  .map((item, index) => {
                    return (
                      <TableBody key={index}>
                        <TableRow hover>
                          <TableCell sx={sx.table}>
                            <Box sx={sx.flex}>
                              <Box>{item.name}</Box>
                              <Box sx={sx.pms}>
                                {item.pms.length >= 2
                                  ? `${item.pms}, `
                                  : item.pms}
                              </Box>
                              <Box sx={sx.member}>
                                {item.activeMember} member
                              </Box>
                              <Box sx={sx.time}>
                                {formatDate(item.timeStart)}{" "}
                                {item.timeEnd &&
                                  `- ${formatDate(item.timeEnd)}`}
                              </Box>
                            </Box>
                            <Box sx={sx.flex}>
                              {item.status == 1 ? (
                                <Box sx={sx.Inactive}>Inactive</Box>
                              ) : (
                                <Box sx={sx.Active}>Active</Box>
                              )}
                              <PopupState
                                variant="popover"
                                popupId="demo-popup-menu"
                              >
                                {(popupState) => (
                                  <React.Fragment>
                                    <Button
                                      color="inherit"
                                      sx={{
                                        color: "black",
                                        backgroundColor: "white",
                                      }}
                                      variant="contained"
                                      {...bindTrigger(popupState)}
                                      endIcon={<ArrowDropDownIcon />}
                                    >
                                      Actions
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                      <MenuItem
                                        sx={sx.iconAction}
                                        onClick={popupState.close}
                                      >
                                        <ModeEditIcon />
                                        Edit
                                      </MenuItem>
                                      <MenuItem
                                        sx={sx.iconAction}
                                        onClick={popupState.close}
                                      >
                                        <VisibilityIcon />
                                        View
                                      </MenuItem>

                                      {!item.isActive ? (
                                        <MenuItem
                                          sx={sx.iconAction}
                                          onClick={popupState.close}
                                        >
                                          <DoneIcon />
                                          Active
                                        </MenuItem>
                                      ) : (
                                        <MenuItem
                                          sx={sx.iconAction}
                                          onClick={popupState.close}
                                        >
                                          <ClearIcon />
                                          Deactive
                                        </MenuItem>
                                      )}
                                      <MenuItem
                                        sx={sx.iconAction}
                                        onClick={popupState.close}
                                      >
                                        <DeleteIcon />
                                        Delete
                                      </MenuItem>
                                    </Menu>
                                  </React.Fragment>
                                )}
                              </PopupState>
                            </Box>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    );
                  })}
              </Table>
            </TableContainer>
          </Paper>
        );
      })}
    </Box>
  );
};

export default ListProject;
