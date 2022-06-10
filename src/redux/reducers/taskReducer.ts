import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../components/timesheet/container/interface";
import {
  archiveTask,
  deArchiveTask,
  deleteTask,
  getDataTask,
  saveTask,
} from "../actions/taskAction";
import { ITasksRedux } from "../interface/ItaskRedux";
import { AppState } from "../store";

const initialState: ITasksRedux = {
  tasks: [],
  progress: "",
  success: false,
  error: {
    code: 0,
    details: "",
    validationErrors: {},
    message: "",
  },
  searchName: "",
};

const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    resetProgress(state) {
      state.progress = "";
    },
    
  },
  extraReducers: (builder) => {
    builder

      .addCase(getDataTask.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(saveTask.fulfilled, (state, action) => {
        const findOneTask = state.tasks.find(
          (task) => task.id === action.payload.result.id
        );
        if (findOneTask) {
          state.tasks = state.tasks.map((item) => {
            if (item.id === action.payload.result.id) {
              item.name = action.payload.result.name;
              item.type = action.payload.result.type;
            }
            return item;
          });
        } else state.tasks.push(action.payload.result);
      })
      // .addCase(saveTask.rejected, (state, action) => {
      //   console.log(action.payload + "bbbb");
      // })
      .addCase(archiveTask.fulfilled, (state, action) => {
        if (action.payload.success === true) {
          state.tasks = state.tasks.map((task) => {
            if (task.id === action.payload.id) {
              task.isDeleted = true;
            }
            return task;
          });
        }
      })
      .addCase(deArchiveTask.fulfilled, (state, action) => {
        if (action.payload.id) {
          state.tasks = state.tasks.map((task) => {
            if (task.id === action.payload.id) {
              task.isDeleted = false;
            }
            return task;
          });
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        if (action.payload.success === true) {
          state.tasks = state.tasks.filter(
            (task) => task.id !== action.payload.id
          );
        }
      });
  },
});

const selectSelf = (state: AppState) => state.task;

export const safeInfoSelect = createSelector(
  selectSelf,
  (state) => state.tasks
);
export const safeSelectTask = { safeInfoSelect };
export const { resetProgress } = taskReducer.actions;

export default taskReducer.reducer;
