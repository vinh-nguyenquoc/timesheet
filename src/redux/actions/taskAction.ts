import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { taskApi } from "../../api/call/taskApi";
import {
  IArchive,
  ICreateTask,
  ILoadTask,
  ITaskRes,
} from "../../api/type/type";
import { ITask } from "../../components/timesheet/container/interface";
const urlGetAll = "/services/app/Task/GetAll";
const urlGetArchive = `/services/app/Task/Archive`;
const urlGetDeArchive = `/services/app/Task/DeArchive`;
const urlDelete = `/services/app/Task/Delete`;

const urlSave = "/services/app/Task/Save";
export const getDataTask = createAsyncThunk(urlGetAll, async () => {
  const response: any = await taskApi.getAll();
  return response.result;
});
export const saveTask = createAsyncThunk(
  urlSave,
  async ({ id, name, type }: ICreateTask) => {
    const response = await taskApi.save({ id, name, type });
    return response as { result: ITask };
  }
);
export const archiveTask = createAsyncThunk(
  urlGetArchive,
  async (id: number) => {
    const response: any = { ...(await taskApi.archive(id)), id };

    return response;
  }
);
export const deArchiveTask = createAsyncThunk(
  urlGetDeArchive,
  async (id: number) => {
    const response = { ...(await taskApi.deArchive({ id })), id };
    return response;
  }
);
export const deleteTask = createAsyncThunk(urlDelete, async (id: number) => {
  const response: any = { ...(await taskApi.delete(id)),id };
  return response;
});
