import { Box, Button, Dialog, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { sx } from "./sx";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import General from "./create/General/General/general";
import Team from "./create/General/Team/team";
import Tasks from "./create/General/Tasks/task";
import Notifications from "./create/General/Notification/notification";
import {
  ICreateProject,
  IProject,
  IUser,
  tasks,
  users,
} from "../../../../../api/type/typeProject";
import { AppState, useAppSelector } from "../../../../../redux/store";
import { safeSelectTask } from "../../../../../redux/reducers/taskReducer";
import { safeSelect } from "../../../../../redux/reducers/projectReducer";
import { useDispatch } from "react-redux";
import {
  getDataCustomer,
  getDataUse,
  saveDataProject,
} from "../../../../../redux/actions/projectAction";
import { useForm } from "react-hook-form";
import { getDataTask } from "../../../../../redux/actions/taskAction";
import Moment from "moment";
import { ITask } from "../../interface";

// import { Container } from './styles';
interface IAddProject {
  open: boolean;
  handleCloseCreateProject: () => void;
  dataProject: IProject[];
}
const AddProject: React.FC<IAddProject> = (props) => {
  const dispatch = useDispatch();
  const formatDate = Moment().format("DD-MM-YYYY");
  const [Message, setMessage] = useState("");
  const customer = useAppSelector(safeSelect.safeInfoSelectCustomer);
  const [value, setValue] = React.useState("1");

  const [projectType, setProjectType] = useState<number>(1);
  const [client, setClient] = useState(0);
  const [valueStart, setValueStart] = useState<Date | null>(
    new Date(formatDate)
  );
  const user = useAppSelector(safeSelect.safeInfoSelectUser);

  const [valueEnd, setValueEnd] = useState<Date | null>(new Date(formatDate));
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [lists, setList] = useState<IUser[]>([]);
  const [users, setUser] = useState<IUser[]>([]);
  const [listUser, setUserList] = useState<users[]>([]);
  const [task, setTask] = useState<any[]>([]);

  const selectTasks = useAppSelector(
    (state: AppState) => state.project.selectTasks
  );
  const filterTasks = useAppSelector(
    (state: AppState) => state.project.filterTasks
  );
  let tasks: { taskId: number; id: number; billable?: boolean }[] = [];
  selectTasks &&
    selectTasks.forEach((task) => {
      tasks.push({ taskId: task.id, id: 0, billable: task.billable || false });
    });
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<ICreateProject>({
    mode: "onChange",
    defaultValues: {
      name: "",
      code: "",
      status: 0,
      timeStart: valueStart as Date,
      timeEnd: valueEnd as Date,
      note: "",
      projectType: projectType,
      customerId: client,
      tasks: tasks,
      users: listUser,
      projectTargetUsers: [],
      komuChannelId: Message,
      isNotifyToKomu: false,
      isAllUserBelongTo: false,
      id: 0,
    },
  });
  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);
  useEffect(() => {
    if (lists) {
      lists.map((item) => {
        setUserList([
          ...listUser,
          {
            userId: item.id,
            type: item.type,
            id: 0,
          },
        ]);
      });
    }
  }, [lists]);

  useEffect(() => {
    dispatch(getDataTask());
    dispatch(getDataCustomer());
    dispatch(getDataUse());
  }, []);

  const handleAddProject = (data: ICreateProject) => {
    dispatch(saveDataProject(data));
    reset;
    props.handleCloseCreateProject();
  };
  return (
    <Dialog
      fullWidth
      open={props.open}
      onClose={props.handleCloseCreateProject}
      maxWidth="lg"
    >
      <form onSubmit={handleSubmit(handleAddProject)}>
        <Box sx={{ p: "24px" }}>
          <Box sx={sx.header}>
            <Box>Create Project</Box>
            <Button
              onClick={props.handleCloseCreateProject}
              sx={{ borderRadius: "30px", color: "black" }}
            >
              <ClearIcon />
            </Button>
          </Box>
          <Box
            sx={{
              borderTop: "1px solid #aaa",
              mt: "20px",
              mb: "10px",
              width: "100%",
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              typography: "body1",
              overflowY: "auto",
              maxHeight: "685px",
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="General" value="1" />
                  <Tab label="Team" value="2" />
                  <Tab label="Tasks" value="3" />
                  <Tab label="Notification" value="4" />
                </TabList>
              </Box>
              <Box>
                <TabPanel value="1">
                  <Box>
                    <General
                      dataProject={props.dataProject}
                      register={register}
                      customer={customer}
                      setValueStart={setValueStart}
                      setValueEnd={setValueEnd}
                      setProjectType={setProjectType}
                      setClient={setClient}
                      valueStart={valueStart}
                      valueEnd={valueEnd}
                      client={client}
                      projectType={projectType}
                    />
                  </Box>
                </TabPanel>
                <TabPanel value="2">
                  <Box>
                    <Team
                      lists={lists}
                      setList={setList}
                      users={users}
                      setUser={setUser}
                    />
                  </Box>
                </TabPanel>
                <TabPanel value="3">
                  <Box>
                    <Tasks
                      selectTasks={selectTasks}
                      filterTasks={filterTasks}
                    />
                  </Box>
                </TabPanel>
                <TabPanel value="4">
                  <Box>
                    <Notifications setMessage={setMessage} />
                  </Box>
                </TabPanel>
              </Box>
            </TabContext>
          </Box>
          <Box sx={sx.footer}>
            <Button sx={sx.btnCancel} onClick={props.handleCloseCreateProject}>
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </Box>
        </Box>
      </form>
    </Dialog>
  );
};

export default AddProject;
