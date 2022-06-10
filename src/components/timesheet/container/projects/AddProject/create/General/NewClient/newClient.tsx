import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React from "react";
import { sx } from "./sx";

// import { Container } from './styles';
interface INewClient {
  open: boolean;
  handleClose: () => void;
  hadleNewClient: () => void;
}
const NewClient: React.FC<INewClient> = (props) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose} >
      <Box sx={sx.container}>
        <DialogTitle sx={{ textAlign: "center" }}>New Client</DialogTitle>
        <Box>
          <TextField
            autoComplete=""
            variant="standard"
            sx={sx.tp}
            label="Name*"
          ></TextField>
        </Box>
        <Box>
          <TextField variant="standard" sx={sx.tp} label="Code*"></TextField>
        </Box>
        <Box>
          <TextareaAutosize
            style={{
              minWidth: "395px",
              maxWidth: "395px",
              width: "395px",
              height: "35px",
              minHeight: "35px",
              paddingBottom: "18px",
            }}
          />
        </Box>
        <Box sx={sx.footer}>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={props.hadleNewClient}>Save</Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default NewClient;
