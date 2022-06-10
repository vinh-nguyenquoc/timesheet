import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  ToggleButton,
} from "@mui/material";
import React from "react";
import { ITask } from "../../interface";
import { sx } from "../sx";

// import { Container } from './styles';
interface ICommon {
  commonTasks: any[];
  setSelected: (a: boolean) => void;
  hadleArchiveTask: (id: number) => void;
  hadleDeleteTask: (id: number) => void;
  showEditTask: (id: number) => void;
  hadleDeArchiveTask: (id: number) => void;
}
const Common: React.FC<ICommon> = (props) => {
  return (
    <Box sx={sx.commonTask}>
      <Box>Common Task ({props.commonTasks && props.commonTasks.length})</Box>
      <Box>These tasks are automatically added to all new projects</Box>
      {props.commonTasks &&
        props.commonTasks.map((item, index) => (
          <List key={item.id}>
            <ListItemButton>
              <Button
                onClick={() => {
                  props.showEditTask(item.id);
                }}
              >
                Edit
              </Button>
              <ListItemText primary={item.name} />
              <Box>
                {item.isDeleted ? (
                  <Button
                    onClick={() => {
                      props.hadleDeArchiveTask(item.id);
                    }}
                  >
                    DeArchive
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      props.hadleArchiveTask(item.id);
                    }}
                  >
                    Archive
                  </Button>
                )}
                <Button
                  disabled={!item.isDeleted}
                  onClick={() => {
                    props.hadleDeleteTask(item.id);
                  }}
                >
                  Delete
                </Button>
              </Box>
            </ListItemButton>
          </List>
        ))}
    </Box>
  );
};

export default Common;
