import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import React from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { ITask } from "../../interface";

// import { Container } from './styles';
interface IEditTask {
  setInputType: (id: number) => void;
  register: UseFormRegister<ITask>;
  open: boolean;
  handleSubmit: UseFormHandleSubmit<ITask>;
  handleClose: () => void;
  handleSaveTask: (data:ITask) => void;
  isValid: boolean;
}
const Edit: React.FC<IEditTask> = (props) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      
          <form onSubmit={props.handleSubmit(props.handleSaveTask)}>
            <DialogTitle>Edit Task: {}</DialogTitle>

            <DialogContent>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Task Type
                </InputLabel>
                <NativeSelect
                  defaultValue={"CommonTask"}
                  {...props.register("type", { required: true })}
                  onChange={(e) => {
                    props.setInputType(Number(e.target.value));
                  }}
                >
                  <option value={0}>Common Task</option>
                  <option value={1}>Other Task</option>
                </NativeSelect>
              </FormControl>
            </DialogContent>

            <DialogActions>
              <Button onClick={props.handleClose}>Cancel</Button>
              <Button disabled={!props.isValid} type="submit">
                Save
              </Button>
            </DialogActions>
          </form>
    </Dialog>
  );
};

export default Edit;
