import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { stringAvatar } from "app/index.js";
import { Item } from "app/index.js";

const CommentBody = ({ newUpdatedComments }) => {
  //First, sort mockComments Array by frequency of posts
  const mockCommentsTop3Sorted = newUpdatedComments.reduce((acc, item) => {
    if (!acc[item.name]) {
      acc[item.name] = 0;
    }
    acc[item.name]++;
    return acc;
  }, {});

  //Filtered Array for Top 3 Commentors
  const top3 = Object.entries(mockCommentsTop3Sorted)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <List>
              <ListItem>
                <h1>G.O.A.T. Contributors</h1>
              </ListItem>
            </List>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Commentors</TableCell>
                    <TableCell>Number of Comments</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {top3.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">
                        <ListItemAvatar sx={{ float: "left" }}>
                          <Avatar {...stringAvatar(row[0])} />
                        </ListItemAvatar>
                        {row[0]}
                      </TableCell>
                      <TableCell>{row[1]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Item>
          <Item>
            <List>
              <ListItem variant="body2">
                <h1>Comments from [mockComments] api.js</h1>
              </ListItem>
              {newUpdatedComments.map((mockComment) => {
                return (
                  <>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar {...stringAvatar(mockComment.name)} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={mockComment.name}
                        secondary={mockComment.comment}
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                );
              })}
            </List>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CommentBody;
