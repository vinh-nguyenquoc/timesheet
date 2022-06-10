import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ITasksRedux } from "./interface/ItaskRedux";
import projectReducer from "./reducers/projectReducer";
import taskReducer from "./reducers/taskReducer";

const reducer = {
  task: taskReducer,
  project: projectReducer,
};
const store = configureStore({
  reducer,
});
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export default store;
