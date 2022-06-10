import { AxiosRequestConfig } from "axios";
import { client } from "../config";
import { IArchive, ICreateTask, ILoadTask, ITaskRes } from "../type/type";

export const taskApi = {
  getAll: () => {
    const url = "/services/app/Task/GetAll";
    return client.get<ILoadTask>(url);
  },
  save: (data: ICreateTask) => {
    const url = "/services/app/Task/Save";
    return client.post<ICreateTask, ITaskRes>(url, data);
  },
  archive: (id: number) => {
    const url = `/services/app/Task/Archive?Id=${id}`;
    return client.delete<IArchive>(url);
  },
deArchive: ({id}: ICreateTask) => {
    const url = `/services/app/Task/DeArchive?Id=${id}`;
    return client.post<ICreateTask, ITaskRes>(url, { id });
  },
  delete: (id: number) => {
    const url = `/services/app/Task/Delete?Id=${id}`;
    return client.delete<IArchive>(url);
  },
};
