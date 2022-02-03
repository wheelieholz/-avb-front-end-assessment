import axios from "axios";
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import { stringAvatar } from "app/index.js";
import { Item } from "app/index.js";

const baseURL = "https://jsonplaceholder.typicode.com/comments";

export default function ApiComponent() {
  const [posts, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!posts) return null;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <List>
              <ListItem variant="body2">
                <h1>
                  Comments from API call:
                  https://jsonplaceholder.typicode.com/comments
                </h1>
              </ListItem>
              {posts.map((post) => {
                return (
                  <>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar {...stringAvatar(post.email)} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={post.email}
                        secondary={post.body}
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
}
