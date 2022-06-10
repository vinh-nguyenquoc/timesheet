import {
  Box,
  Button,
  Checkbox,
  Collapse,
  FormControlLabel,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { sx } from "./sx";
import ClearIcon from "@mui/icons-material/Clear";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
// import { Container } from './styles';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ITask } from "../../../../../interface";
import {
  pushTask,
  removeTask,
  updateBillable,
} from "../../../../../../../../redux/reducers/projectReducer";
import { UseFormRegister } from "react-hook-form";
import { ICreateProject } from "../../../../../../../../api/type/typeProject";
interface ITaskProject {
  selectTasks: ITask[];
  filterTasks: ITask[];
}
const Tasks: React.FC<ITaskProject> = (props) => {
  const [checked, setChecked] = useState(true);
  const [openSearchMember, setOpenSearchMember] = useState(false);
  const handleClickOpenSearchMember = () => {
    setOpenSearchMember(!openSearchMember);
  };
  const dispatch = useDispatch();

  const handleCommonTasks = (item: ITask) => {
    dispatch(removeTask(item));
  };
  const handleOtherTasks = (item: ITask) => {
    dispatch(pushTask(item));
  };
  return (
    <Box>
      <Box>
        <Box sx={sx.header}>
          <Box sx={sx.container}>
            <Box>Tasks</Box>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Box>Billable</Box>
            <FormControlLabel
              label=""
              control={
                <Checkbox
                // checked={checked[0] && checked[1]}
                // indeterminate={checked[0] !== checked[1]}
                />
              }
            />
          </Box>
        </Box>
        {props.selectTasks &&
          props.selectTasks.map((item, index) => (
            <Box key={index} sx={() => sx.containerTask(index)}>
              <Box sx={sx.container}>
                <Button onClick={() => handleCommonTasks(item)}>
                  <ClearIcon />
                </Button>
                <Box>{item.name}</Box>
              </Box>
              <Box sx={sx.container}>
                <FormControlLabel
                  label=""
                  control={
                    <Checkbox
                      checked={item.billable}
                      onChange={(e) =>
                        dispatch(
                          updateBillable({
                            ...item,
                            billable: e.target.checked,
                          })
                        )
                      }
                    />
                  }
                />
              </Box>
            </Box>
          ))}
      </Box>
      <Box
        sx={{
          p: "0 24px",
          borderTop: "1px solid rgb(238, 238, 238)",
          borderBottom: "1px solid rgb(238, 238, 238)",
        }}
      >
        <ListItemButton onClick={handleClickOpenSearchMember}>
          <ListItemText primary="Select task" />
          {openSearchMember ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openSearchMember} timeout="auto" unmountOnExit>
          {props.filterTasks &&
            props.filterTasks.map((item, index) => (
              <Box key={item.id}>
                <Box sx={() => sx.containerTask(index)}>
                  <Box sx={sx.container} onClick={() => handleOtherTasks(item)}>
                    <Button>
                      <AddCircleOutlineIcon />
                    </Button>
                    <Box>{item.name}</Box>
                  </Box>
                  <Box sx={sx.container}>
                    {item.type === 1 ? "Other task" : "Common Task"}
                  </Box>
                </Box>
              </Box>
            ))}
        </Collapse>
      </Box>
    </Box>
  );
};

export default Tasks;
