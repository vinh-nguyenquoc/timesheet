import Box from '@mui/material/Box';
import React from 'react'
import FormLogin from './FormLogin';
import { sx } from './sx';


const Login: React.FC = () => {
  return <Box sx={sx.container}>
    <FormLogin />

  </Box>;
}

export default Login;