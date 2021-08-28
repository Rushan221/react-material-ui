import {
  Button,
  Container,
  makeStyles,
  Radio,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function CreateNotes() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailError, setDetailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      setTitleError(true);
    }

    if (detail === "") {
      setDetailError(true);
    }

    if (title && detail) {
      setTitleError(false);
      setDetailError(false);
      console.log(title, detail);
    }
  };
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a new Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          error={titleError}
        />
        <TextField
          className={classes.field}
          label="Note Detail"
          variant="outlined"
          color="secondary"
          multiline
          rows="4"
          fullWidth
          required
          onChange={(e) => {
            setDetail(e.target.value);
          }}
          error={detailError}
        />
        <Radio value="hello" />
        <Radio value="bye" />

        <Button
          variant="contained"
          color="primary"
          endIcon={<BackupOutlinedIcon />}
          type="submit"
        >
          Save Note
        </Button>
      </form>
    </Container>
  );
}
