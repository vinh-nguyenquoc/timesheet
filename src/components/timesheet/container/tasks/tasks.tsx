import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  List,
  ListItemButton,
  ListItemText,
  NativeSelect,
  TextField,
  ToggleButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { sx } from "./sx";
import { purple, blueGrey } from "@mui/material/colors";
// import { Container } from './styles';
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { ITask } from "../interface";
import { useForm } from "react-hook-form";
import axios from "axios";
import { getAccessToken } from "../../../../utils/getAccessToken";
import { useDispatch, useSelector } from "react-redux";
import {
  archiveTask,
  deArchiveTask,
  deleteTask,
  getDataTask,
  saveTask,
} from "../../../../redux/actions/taskAction";
import { AppState, useAppSelector } from "../../../../redux/store";
import {
  resetProgress,
  safeSelectTask,
} from "../../../../redux/reducers/taskReducer";
import Common from "./Common/commonTask";
import Other from "./Other/otherTask";
import Edit from "./Edit/editTask";
// import Edit from "./Edit/editTask";
export const Tasks: React.FC = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [inputType, setInputType] = useState<number>(0);
  const [commonTasks, setcommonTasks] = useState<any[]>([]);
  const [otherTasks, setotherTasks] = useState<any[]>([]);
  const progress = useSelector((state: AppState) => state.task.progress);
  const [selected, setSelected] = React.useState(false);
  const tasks = useAppSelector(safeSelectTask.safeInfoSelect);
  useEffect(() => {
    if (tasks) {
      const commonTask = tasks.filter((item) => item.type === 0);
      const otherTask = tasks.filter((item) => item.type === 1);
      setcommonTasks(commonTask);
      setotherTasks(otherTask);
    }
  }, [tasks]);
  useEffect(() => {
    dispatch(getDataTask());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ITask>({
    mode: "onChange",
    defaultValues: {
      name: "",
      type: inputType,
      isDeleted: false,
      id: 0,
    },
  });

  const hadleArchiveTask = async (id: number) => {
    dispatch(archiveTask(id));
  };
  const hadleDeArchiveTask = async (id: number) => {
    
    dispatch(deArchiveTask(id));
  };
  const handleAddTask = async (data: ITask) => {
    dispatch(saveTask(data));
    setOpen(!open);
  };
  const handleSaveTask = async (data: ITask) => {
    dispatch(saveTask(data));
    setOpen(!open);
  };
  const hadleDeleteTask = async (id: number) => {
    dispatch(deleteTask(id));
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const showEditTask = () => {
    setOpenEdit(true);
  };
  const handleCloseEdit = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setOpenEdit(false);
  };
  return (
    <Box sx={sx.container}>
      <Box>
        <Edit
          setInputType={setInputType}
          register={register}
          open={openEdit}
          handleSubmit={handleSubmit}
          handleClose={handleCloseEdit}
          handleSaveTask={handleSaveTask}
          isValid={isValid}
        />

        <Dialog open={open} onClose={handleClose}>
          <form onSubmit={handleSubmit(handleAddTask)}>
            <DialogTitle>New Task</DialogTitle>
            <DialogContent sx={sx.formAdd}>
              <TextField
                variant="standard"
                fullWidth
                label="Name"
                {...register("name", { required: true })}
              />
            </DialogContent>
            <DialogContent>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Task Type
                </InputLabel>
                <NativeSelect
                  defaultValue={"CommonTask"}
                  {...register("type", { required: true })}
                  onChange={(e) => {
                    setInputType(Number(e.target.value));
                  }}
                >
                  <option value={0}>Common Task</option>
                  <option value={1}>Other Task</option>
                </NativeSelect>
              </FormControl>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button disabled={!isValid} type="submit">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Box>
      <Box sx={sx.c}>
        <Box sx={sx.header}>
          <Box>Manage Tasks</Box>
          <MoreHorizIcon sx={sx.moreHorizIcon} />
        </Box>
        <Box sx={sx.p}>
          <Box sx={sx.AS}>
            <Box>
              <Button
                variant="contained"
                size="medium"
                onClick={handleClickOpen}
                startIcon={<AddIcon sx={sx.bluegrey} />}
              >
                New Task
              </Button>
            </Box>
            <Box>
              <TextField
                sx={sx.TFSearch}
                // InputProps={{
                //   startAdornment: <SearchIcon/>,
                // }}
                label="Search by task name"
              />
            </Box>
          </Box>
          <Common
            showEditTask={showEditTask}
            commonTasks={commonTasks}
            setSelected={setSelected}
            hadleArchiveTask={hadleArchiveTask}
            hadleDeleteTask={hadleDeleteTask}
            hadleDeArchiveTask={hadleDeArchiveTask}
          ></Common>
          <Other otherTasks={otherTasks}></Other>
        </Box>
      </Box>
    </Box>
  );
};
