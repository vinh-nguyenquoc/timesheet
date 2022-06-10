export interface ICustomer {
  name: string;
  address: string;
  IGetCustomer: IGetCustomer[];
}
export interface IGetCustomer {
  name: string;
  id: number;
}
