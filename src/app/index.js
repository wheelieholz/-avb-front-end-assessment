import React, { useState, useEffect } from "react";

import "app/App.css";
import ApiComponent from "components/ApiComponent";
import Header from "components/Header";
import CommentBody from "components/CommentBody";
import CommentModal from "components/CommentModal";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { mockComments } from "store/api.js";

//Creates Neato Avatar
export function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function stringAvatar(name) {
  //Check if user enters complete name, if not assign the last name as 'L'
  if (name.indexOf(" ") === -1) {
    name = name + " L";
  }

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [updatedComments, setUpdatedComments] = useState([...mockComments]);
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <CommentModal
        setUpdatedComments={setUpdatedComments}
        newUpdatedComments={updatedComments}
      />
      <div className="App-header">
        <CommentBody newUpdatedComments={updatedComments} />
        <ApiComponent />
      </div>
    </>
  );
}

export default App;
