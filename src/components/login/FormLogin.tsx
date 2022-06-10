import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { sx } from "./sx";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAccessToken, setAccessToken } from "../../utils/getAccessToken";
import { authApi } from "../../api/call/authApi";
import CheckLogin from "./checkLogin/CheckLogin";

interface ILoginForm {
  userNameOrEmailAddress: string;
  password: string;
  rememberClient: boolean;
}
const FormLogin: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigator = useNavigate();
  const accessToken = getAccessToken();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ILoginForm>({
    mode: "onChange",
    defaultValues: {
      userNameOrEmailAddress: "",
      password: "",
      rememberClient: true,
    },
  });
  const handleLoginAction = async (data: ILoginForm, e: any) => {
    if (data) {
      const response: any = await authApi.postAuth(data);
      if (response.error === undefined) {
        handleClickOpen();
      } else {
        setAccessToken(response.result.accessToken);
        navigator("/main", { replace: true });
      }
    }
  };
  return (
    <Box sx={sx.all}>
      <CheckLogin open={open} handleClose={handleClose} />
      <form onSubmit={handleSubmit(handleLoginAction)}>
        <Box sx={sx.form}>
          <Box sx={sx.header}>Timesheet</Box>
          <Box sx={sx.wrapper}>
            <Box sx={sx.title}>Log in</Box>
            <Box sx={sx.formLogin}>
              <Box sx={sx.login}>
                <PersonIcon sx={sx.icon} />
                {
                  <TextField
                    sx={sx.input}
                    id="standard-basic"
                    label="User name or email"
                    variant="standard"
                    {...register("userNameOrEmailAddress", { required: true })}
                  />
                }
              </Box>
              <Box sx={sx.login}>
                <LockIcon sx={sx.icon} />
                <TextField
                  sx={sx.input}
                  id="standard-basic"
                  label="Password *"
                  type="password"
                  variant="standard"
                  {...register("password", { required: true })}
                />
              </Box>
            </Box>
            <Box sx={sx.boxLogin}>
              <Box sx={sx.rememberme}>
                <Checkbox sx={sx.checkBox} />
                <Box>Remember me</Box>
              </Box>
              <Button
                variant="contained"
                disabled={!isValid}
                type="submit"
                sx={sx.btnLogin}
              >
                Log in
              </Button>
            </Box>
            <Box sx={sx.btnLoginWGG}>
              <Button
                variant="contained"
                sx={sx.loginWGG}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <Box sx={sx.color}>Log In With Google</Box>
              </Button>
            </Box>
            <Box>
              <TextField
                sx={sx.input}
                type="password"
                variant="standard"
                label="Sercurity Code"
                id="standard-basic"
              ></TextField>
              <Box>
                <i></i>
                <i></i>
              </Box>
            </Box>
          </Box>

          <Box sx={sx.color}>@2022 Timesheet. Version 4.3.0.0 [20222001]</Box>
        </Box>
      </form>
    </Box>
  );
};

export default FormLogin;
