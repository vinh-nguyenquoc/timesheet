import axios, { AxiosRequestConfig } from "axios";
import { getAccessToken } from "../utils/getAccessToken";

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
client.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const accessToken = getAccessToken();

    if (config && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
client.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    console.log(error);
    
    console.log( Promise.reject(error));
    
    return Promise.reject(error);
  }
);
