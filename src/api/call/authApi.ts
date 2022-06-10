import { client } from "../config";

export const authApi={
  postAuth:(data:any) =>{
    const url=`/TokenAuth/Authenticate`;
    return client.post(url,data)
  }
}

