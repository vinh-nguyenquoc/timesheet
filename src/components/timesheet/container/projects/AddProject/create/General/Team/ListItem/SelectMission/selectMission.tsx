import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

// import { Container } from './styles';

const SelectMission: React.FC = () => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <NativeSelect defaultValue={1}>
        <option value={1}>Member</option>
        <option value={2}>Project Manager</option>
        <option value={3}>Shadow</option>
        <option value={4}>Deactive</option>
      </NativeSelect>
    </FormControl>
  );
};

export default SelectMission;
