import { orange } from "@mui/material/colors";

export const sx = {
  btnType: {
    disabled: "block",
    width: "200px",
    padding: "10px",
    "	&.Mui-selected": {
      backgroundColor: orange[800],
      color: "white",
    },
    "&.MuiToggleButton-root:hover": {
      backgroundColor: orange[800],
      color: "white",
    },
    "&.MuiToggleButton-root": {},
  },
  name: {
    px: "10px",
    width: "190px",
  },
  general: {
    width: "100%",
  },
  container: {
    display: "flex",
    mb: "20px",
    "&:first-of-type": {
      marginRight: "15px",
    },
    
  },
  
};
