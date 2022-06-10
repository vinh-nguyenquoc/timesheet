import { Box, Button, List, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

// import { Container } from './styles';
interface IArchive{
    otherTasks:any[];

}
const Other: React.FC<IArchive> = (props) => {
  return <Box>
  <Box>Other Task ({props.otherTasks && props.otherTasks.length})</Box>
  <Box>These task must be manually added to projects</Box>
  {props.otherTasks &&
    props.otherTasks.map((item, index) => (
      <List key={index}>
        <ListItemButton>
          <Button>Edit</Button>
          <ListItemText primary={item.name} />
          <Box>
            <Button>Delete</Button>
          </Box>
          {console.log(item.billable)}
        </ListItemButton>
      </List>
    ))}
</Box>;
}

export default Other;