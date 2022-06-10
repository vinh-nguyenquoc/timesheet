 import { Create } from "@mui/icons-material";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { projectApi } from "../../api/call/projectApi";
import { ICreateProject, ICreateProjectRes } from "../../api/type/typeProject";

const getData = "/services/app/Project/GetAll";
const getDataUser = "/services/app/User/GetUserNotPagging";
const urlDataCustomer = "/services/app/Customer/GetAll";
const urlSaveData = "/services/app/Project/Save";
export const getDataProject = createAsyncThunk(getData, async () => {
  const response: any = await projectApi.getAll();

  return response.result;
});
export const getDataUse = createAsyncThunk(getDataUser, async () => {
  const response: any = await projectApi.getUser();

  return response.result;
});
export const getDataCustomer = createAsyncThunk(urlDataCustomer, async () => {
  const response: any = await projectApi.getCustomer();
  return response.result;
});
export const saveDataProject = createAsyncThunk(
  urlSaveData,
  async ({
    name,
    code,
    status,
    timeStart,
    timeEnd,
    note,
    projectType,
    customerId,
    tasks,
    users,
    projectTargetUsers,
    komuChannelId,
    isNotifyToKomu,
    isAllUserBelongTo,
    id,
  }: ICreateProject) => {
    const response = await projectApi.saveData({
      name,
      code,
      status,
      timeStart,
      timeEnd,
      note,
      projectType,
      customerId,
      tasks,
      users,
      projectTargetUsers,
      komuChannelId,
      isNotifyToKomu,
      isAllUserBelongTo,
      id,
    });
    return response as { result: ICreateProject };
  }
);
