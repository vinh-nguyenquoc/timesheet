import { DatePicker, DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  Stack,
  styled,
  TextareaAutosize,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { orange, pink, red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { sx } from "../../sx";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Add } from "@mui/icons-material";
import NewClient from "../NewClient/newClient";
import {
  ICreateProject,
  IProject,
} from "../../../../../../../../api/type/typeProject";
import { UseFormRegister } from "react-hook-form";
import { IGetCustomer } from "../../../../../../../../api/type/typeCustomer";

interface IGeneral {
  dataProject: IProject[];
  register: UseFormRegister<ICreateProject>;
  customer:IGetCustomer[];
  setValueStart:(date:any) => void;
  setValueEnd:(date:any) => void;
  setProjectType:(date:any) => void;
  setClient:(date:any) => void;
  valueStart:any;
  valueEnd:any;
  client:any;
  projectType:number;
}
const General: React.FC<IGeneral> = (props) => {
  const [openNewClient, setOpenNewClient] = useState(false);
  

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: number
  ) => {
    if (newAlignment !== null) {
      props.setProjectType(newAlignment);
    }
  };

  const selectValueClient = (e: any) => {
    props.setClient(e.target.value);
  };

  const handleDateStart = (newValue: Date | null) => {
    props.setValueStart(newValue);
  };
  const handleDateEnd = (newValue: Date | null) => {
    props.setValueEnd(newValue);
  };
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      margin: theme.spacing(0.5),
      border: 0,
      "&.Mui-disabled": {
        border: 0,
      },
      "&:not(:first-of-type)": {
        borderRadius: theme.shape.borderRadius,
        margin: "0 15px 10px 0",
        border: "1px solid #aaa",
      },
      "&:first-of-type": {
        borderRadius: theme.shape.borderRadius,
        margin: "0 15px 10px 0",

        border: "1px solid #aaa",
      },
    },
  }));

  const hadleNewClient = () => {
    setOpenNewClient(true);
  };
  const handleCloseNewClient = () => {
    setOpenNewClient(false);
  };
  return (
    <Box sx={sx.general}>
      <Box sx={sx.container}>
        <Box sx={sx.name}>Client*</Box>
        <FormControl sx={{ minWidth: 400 }} size="small">
          <Select onChange={selectValueClient} autoWidth value={props.client} >
            {props.customer &&
              props.customer.map((item, index) => (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          
          startIcon={<Add />}
          onClick={hadleNewClient}
        >
          New Client
        </Button>
      </Box>
      <NewClient
        open={openNewClient}
        handleClose={handleCloseNewClient}
        hadleNewClient={hadleNewClient}
      />
      <Box sx={sx.container}>
        <Box sx={sx.name}>Project Name*</Box>
        <TextField
          placeholder="Project name"
          {...props.register("name")}
           
        ></TextField>
      </Box>
      <Box sx={sx.container}>
        <Box sx={sx.name}>Project Code*</Box>
        <TextField
          placeholder="Project code"
          {...props.register("code")}
        ></TextField>
      </Box>
      <Box sx={sx.container}>
        <Box sx={sx.name}>Dates*</Box>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <DesktopDatePicker
                  label="Date desktop"
                  inputFormat="MM/dd/yyyy"
                  value={props.valueStart}
                  onChange={handleDateStart}
                  renderInput={(params) => <TextField {...params} />}
                />
                <Box> to </Box>
                <DesktopDatePicker
                  label="Date desktop"
                  inputFormat="MM/dd/yyyy"
                  value={props.valueEnd}
                  onChange={handleDateEnd}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>
            </Stack>
          </LocalizationProvider>
        </Box>
      </Box>
      <Box sx={sx.container}>
        <Box sx={sx.name}>Note</Box>
        <Box aria-label="empty textarea">
          <TextareaAutosize
            style={{
              width: "836px",
              maxWidth: "836px",
              minWidth: "836px",
              height: "55px",
              minHeight: "55px",
            }}
            {...props.register("note")}
          />
        </Box>
      </Box>
      <Box sx={sx.container}>
        <Box sx={sx.name}>All User</Box>
        <FormGroup sx={{ display: "flex", alignItems: "center" }}>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                sx={{
                  "&.Mui-checked": {
                    color: pink[200],
                  },
                }}
              />
            }
            label="Auto add user as a member of this project when creating new user"
          />
        </FormGroup>
      </Box>
      <Box sx={sx.container}>
        <Box sx={sx.name}>Project Type*</Box>
        <Box sx={{}}>
          <StyledToggleButtonGroup
            value={props.projectType}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              gap: 3,
              width: "875px",
              display: "webkit-flex",
              top: 0,
              left: 0,
            }}
          >
            <ToggleButton value={0} sx={sx.btnType}>
              <Box>Time & Naterials</Box>
            </ToggleButton>
            <ToggleButton value={1} sx={sx.btnType}>
              <Box>Fixed Fee</Box>
            </ToggleButton>
            <ToggleButton value={2} sx={sx.btnType}>
              <Box>Non-Billable</Box>
            </ToggleButton>
            <ToggleButton value={3} sx={sx.btnType}>
              <Box>ODC</Box>
            </ToggleButton>
            <ToggleButton value={4} sx={sx.btnType}>
              <Box>Product</Box>
            </ToggleButton>
            <ToggleButton value={5} sx={sx.btnType}>
              <Box>Tranning</Box>
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default General;
