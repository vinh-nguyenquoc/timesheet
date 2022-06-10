import { Box, Button, Dialog } from "@mui/material";
import React from "react";
import DangerousIcon from "@mui/icons-material/Dangerous";
import { sx } from "./sx";
// import { Container } from './styles';
interface ICheckLogin {
  open: boolean;
  handleClose: () => void;
}
const checkLogin: React.FC<ICheckLogin> = (props) => {
  return (
    <Dialog
      sx={sx.form}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box sx={sx.center}>
        <DangerousIcon sx={sx.icon}></DangerousIcon>
      </Box>
      <Box sx={sx.center} px="16px" pt="13px" mb="13px">
        <Box sx={sx.text}>Login failed</Box>
      </Box>

      <Box sx={sx.center}>
        <Box sx={sx.text1}>Invalid user name or password</Box>
      </Box>
      <Box sx={sx.center} px="16px" py="13px" mt="13px">
        <Button variant="contained" color="info" onClick={props.handleClose} >ok</Button>
      </Box>
    </Dialog>
  );
};

export default checkLogin;
