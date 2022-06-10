import { IError } from "../../api/type/type";
import { ITask } from "../../components/timesheet/container/interface";

export interface ITasksRedux {
  tasks: ITask[];
  progress: string;
  success: boolean;
  error: IError;
  searchName: string;
}
