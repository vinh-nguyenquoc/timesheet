import { client } from "../config";
import { IGetCustomer } from "../type/typeCustomer";
import { ICreateProject, ICreateProjectRes, IProject, IUser } from "../type/typeProject";

export const projectApi = {
  getAll: () => {
    const url = "/services/app/Project/GetAll";
    return client.get<IProject>(url);
  },
  getUser: () => {
    const url = "/services/app/User/GetUserNotPagging";
    return client.get<IUser>(url);
  },
  //Customer
  getCustomer: () => {
    const url = "/services/app/Customer/GetAll";
    return client.get<IGetCustomer>(url);
  },
  saveData: (data: ICreateProject) => {
    const url = "/services/app/Project/Save";
    return client.post<ICreateProject,ICreateProjectRes>(url, data);
  },
};
