import React, { useEffect, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { sx } from "./sx";
import SearchIcon from "@mui/icons-material/Search";
// import { Container } from './styles';
import AddIcon from "@mui/icons-material/Add";
import ListProject from "./ListProject/listProject";
import AddProject from "./AddProject/addProject";
import { useDispatch } from "react-redux";
import { getDataProject } from "../../../../redux/actions/projectAction";
import { useAppSelector } from "../../../../redux/store";
import { safeSelect } from "../../../../redux/reducers/projectReducer";
const Project: React.FC = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const project = useAppSelector(safeSelect.safeInfoSelect);

  useEffect(() => {
    dispatch(getDataProject());
  }, []);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openAddProject, setOpenAddProject] = useState(false);

  const handleCloseCreateProject = () => {
    setOpenAddProject(false);
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={sx.container}>
      <Box sx={sx.c}>
        <Box sx={sx.header}>
          <Box>Manage Projects</Box>
          <Box>
            <MoreHorizIcon sx={sx.moreHorizIcon}></MoreHorizIcon>
          </Box>
        </Box>
        <Box sx={sx.nav}>
          <Box>
            <Button
              sx={{ height: 56 }}
              variant="contained"
              size="medium"
              startIcon={<AddIcon sx={sx.bluegrey} />}
              onClick={() => setOpenAddProject(true)}
            >
              New Project
            </Button>
            <AddProject
              open={openAddProject}
              handleCloseCreateProject={handleCloseCreateProject}
              dataProject={project}
            />
          </Box>
          <Box>
            <FormControl sx={{ m: 1, width: 200 }}>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                defaultValue={1}
              >
                <MenuItem value={1}>Active Projects</MenuItem>
                <MenuItem value={2}>Deactive Projects</MenuItem>
                <MenuItem value={3}>All Projects</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={sx.search}>
            <FormControl sx={sx.textSearch}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Search by client or project name
              </InputLabel>
              <OutlinedInput
                sx={sx.textSearch}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                id="outlined-textarea"
                label="Search by client or project name"
                multiline
              />
            </FormControl>
          </Box>
        </Box>
        <ListProject projects={project} />
      </Box>
    </Box>
  );
};

export default Project;
