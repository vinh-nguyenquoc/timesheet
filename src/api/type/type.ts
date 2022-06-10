import { ITask } from "../../components/timesheet/container/interface";


export interface ICreateTask {
  id?: number,
  name?: string,
  type?: number,
}
export interface ITaskRes {
  result: {
    name: string,
    type: number,
    isDeleted: boolean,
    id: number
  }

}
export interface ILoadTask {
  result: ITask[];
}
export interface IArchive {
  id: number,
  success:boolean,
  error: IError,

}
export interface IError {
  code: number,
  message: string | null,
  details: string,
  validationErrors: object,
}


