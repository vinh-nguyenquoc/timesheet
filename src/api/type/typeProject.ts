export interface ICreateProject {
  name: string;
  code: string;
  status: number;
  timeStart: Date;
  timeEnd: Date;
  note: string;
  projectType: number;
  customerId: number;
  tasks: tasks[];
  users: users[];
  projectTargetUsers: projectTargetUsers[];
  komuChannelId: string;
  isNotifyToKomu: boolean;
  isAllUserBelongTo: boolean;
  id: number;
}
export interface ICreateProjectRes {
  result: {
    name: string;
    code: string;
    status: number;
    timeStart: Date;
    timeEnd: Date;
    note: string;
    projectType: number;
    customerId: number;
    tasks: tasks[];
    users: users[];
    projectTargetUsers: projectTargetUsers[];
    komuChannelId: string;
    isNotifyToKomu: boolean;
    isAllUserBelongTo: boolean;
    id: number;
  };
}
export interface IProject {
  customerName: string;
  name: string;
  code: string;
  status: number;
  pms: string[];
  activeMember: number;
  projectType: number;
  timeStart: string;
  timeEnd: string;
  id: number;
}
export interface tasks {
  taskId: number;
  billable?: boolean;
  id: number;
}
export interface users {
  userId: number;
  type: number;
  id: number;
}
export interface projectTargetUsers {
  userId: number;
  roleName: string;
  id: number;
}
export interface IUser {
  name: string;
  emailAddress: string;
  isActive: boolean;
  type: number;
  jobTitle: string;
  level: number;
  userCode: string;
  avatarPath: string;
  branch: number;
  id: number;
}
export interface IActiveProjectRes {
  success: boolean;
}
