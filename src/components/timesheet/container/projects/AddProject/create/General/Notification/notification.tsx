import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useState } from "react";

// import { Container } from './styles';
interface INotification{
  setMessage:(data:string)=>void;
}
const Notifications: React.FC<INotification> = (props) => {
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{  width: "100%" }}>
      <Box>
        <FormControlLabel
          control={<Checkbox onChange={handleChange} name="gilad" />}
          defaultChecked
          sx={{
            "&.Mui-checked": {
              color: pink[200],
            },
          }}
          label="Gửi thông báo đến Komu"
        />
      </Box>
      <Box>
        <TextField
          sx={{ width: "100%" }}
          id="standard-basic"
          label="Komu Channel Id"
          variant="standard"
          disabled={open}
          onChange={(e) =>props.setMessage(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default Notifications;
