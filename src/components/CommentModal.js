import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@material-ui/core/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import {
  closeCommentsModal,
  getViewCommentsModalOpen,
} from "store/slices/view";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CommentModal = ({ setUpdatedComments, newUpdatedComments }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getViewCommentsModalOpen);
  const handleClose = () => dispatch(closeCommentsModal());

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event, field) => {
    if (field === "name") {
      setName(event.target.value);
    } else {
      setMessage(event.target.value);
    }
  };

  const handleClick = (event) => {
    const commentObj = {
      id: newUpdatedComments.length + 1,
      name,
      comment: message,
    };
    const newArray = [...newUpdatedComments];
    newArray.push(commentObj);
    setUpdatedComments(newArray);
    console.log(newArray);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box sx={style}>
        <Typography id="simple-modal-title" variant="h6" component="h2">
          <h4>New comment</h4>
        </Typography>
        <Stack spacing={5} direction="column">
          <TextField
            name="name"
            id="name"
            onChange={(e) => {
              const field = "name";
              handleChange(e, field);
            }}
            label="Name"
            variant="standard"
          />
          <TextField
            name="comment"
            id="comment"
            onChange={(e) => {
              const field = "comment";
              handleChange(e, field);
            }}
            label="Comment"
            multiline
            maxRows={4}
            variant="standard"
          />
          <Button variant="contained" onClick={handleClick}>
            Add Comment
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default CommentModal;
