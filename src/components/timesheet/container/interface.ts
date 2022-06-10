export interface ITask {
  name: string;
  isDeleted: boolean;
  type: number;
  id: number;
  billable?: boolean;
}
