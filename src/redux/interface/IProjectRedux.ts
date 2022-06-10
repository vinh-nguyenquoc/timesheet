import { ICreateTask } from "../../api/type/type";
import { ICustomer, IGetCustomer } from "../../api/type/typeCustomer";
import { ICreateProject, IProject, IUser } from "../../api/type/typeProject";
import { ITask } from "../../components/timesheet/container/interface";

export interface IProjectRedux {
  project: IProject[];
  createProject: ICreateProject[];
  user: IUser[];
  customer: IGetCustomer[];
  searchName: string;
  projects: ICreateProject;
  selectTasks: ITask[];
  filterTasks: ITask[];
  tasks: ITask[];
}
export interface ICustomeName {
  [key: string]: IProject[];
}
