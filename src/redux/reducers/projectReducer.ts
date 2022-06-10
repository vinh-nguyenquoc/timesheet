import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ITask } from "../../components/timesheet/container/interface";
import {
  getDataCustomer,
  getDataProject,
  getDataUse,
  saveDataProject,
} from "../actions/projectAction";
import { getDataTask } from "../actions/taskAction";
import { IProjectRedux } from "../interface/IProjectRedux";
import { AppState } from "../store";

const initialState: IProjectRedux = {
  project: [],
  user: [],
  customer: [],
  createProject: [],
  selectTasks: [],
  filterTasks: [],
  tasks: [],
  searchName: "",
  projects: {
    name: "",
    code: "",
    status: 0,
    timeStart: new Date(),
    timeEnd: new Date(),
    note: "",
    projectType: 0,
    customerId: 0,
    tasks: [
      {
        taskId: 0,
        billable: false,
        id: 0,
      },
    ],
    users: [
      {
        userId: 0,
        type: 0,
        id: 0,
      },
    ],
    projectTargetUsers: [
      {
        userId: 0,
        roleName: "",
        id: 0,
      },
    ],
    komuChannelId: "",
    isNotifyToKomu: false,
    isAllUserBelongTo: false,
    id: 0,
  },
};

const projectReducer = createSlice({
  name: "project",
  initialState,
  reducers: {
    setSearchName: (state, action) => {
      state.searchName = action.payload.searchName;
    },
    updateBillable: (state, action: PayloadAction<ITask>) => {
      state.selectTasks = state.selectTasks.map((task) => {
        if (task.id === action.payload.id) {
          task.billable = action.payload.billable;
        }
        return task;
      });
    },
    pushTask: (state, action: PayloadAction<ITask>) => {
      state.filterTasks = state.filterTasks.filter(
        (task) => task.id !== action.payload.id
      );
      state.selectTasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.selectTasks = state.selectTasks.filter(
        (task) => task.id !== action.payload.id
      );
      state.filterTasks.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataProject.fulfilled, (state, action) => {
        state.project = action.payload;
        toast.success("🦄 data!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .addCase(getDataProject.rejected, (state, action) => {
        toast.error("🦄 Not data!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .addCase(getDataUse.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getDataCustomer.fulfilled, (state, action) => {
        state.customer = action.payload;
      })
      .addCase(saveDataProject.fulfilled, (state, action) => {
        console.log(action.payload);

        const findOneProject = state.createProject.find(
          (project) => project.id === action.payload.result.id
        );
        if (findOneProject) {
          state.createProject = state.createProject.map((item) => {
            if (item.id === action.payload.result.id) {
              item.name = action.payload.result.name;
              item.code = action.payload.result.code;
              item.status = action.payload.result.status;
              item.timeStart = action.payload.result.timeStart;
              item.timeEnd = action.payload.result.timeEnd;
              item.note = action.payload.result.note;
              item.projectType = action.payload.result.projectType;
              item.customerId = action.payload.result.customerId;
              item.tasks = action.payload.result.tasks;
              item.users = action.payload.result.users;
              item.projectTargetUsers =
                action.payload.result.projectTargetUsers;
              item.komuChannelId = action.payload.result.komuChannelId;
              item.isNotifyToKomu = action.payload.result.isNotifyToKomu;
              item.isAllUserBelongTo = action.payload.result.isAllUserBelongTo;
              item.id = action.payload.result.id;
            }
            return item;
          });
        } else state.createProject.push(action.payload.result);
      })
      .addCase(saveDataProject.rejected, (state, action) => {
        toast.error("🦄 Not data!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .addCase(getDataTask.fulfilled, (state, action) => {
        state.tasks = action.payload;

        state.selectTasks = state.tasks.filter((item) => item.type === 0);
        state.filterTasks = state.tasks.filter((item) => item.type === 1);
      });
  },
});

const selectSelf = (state: AppState) => state.project;

export const safeInfoSelect = createSelector(
  selectSelf,
  (state) => state.project
);
export const safeInfoSelectTask = createSelector(
  selectSelf,
  (state) => state.tasks
);
export const safeInfoSelectUser = createSelector(
  selectSelf,
  (state) => state.user
);
export const safeInfoSelectCustomer = createSelector(
  selectSelf,
  (state) => state.customer
);
export const safeSelect = {
  safeInfoSelect,
  safeInfoSelectUser,
  safeInfoSelectCustomer,
  safeInfoSelectTask,
};
export const {
  updateBillable,
  pushTask,
  removeTask,
  setSearchName,
} = projectReducer.actions;

export default projectReducer.reducer;
