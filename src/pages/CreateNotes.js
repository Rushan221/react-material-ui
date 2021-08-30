import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@material-ui/core";
import React, { useState } from "react";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";
import { useHistory } from "react-router-dom";

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
  const [categories, setCategories] = useState("work");
  const history = useHistory();

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
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details: detail, category: categories }),
      }).then(() => {
        history.push("/");
      });
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

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={categories}
            onChange={(e) => {
              setCategories(e.target.value);
            }}
          >
            <FormControlLabel control={<Radio />} label="Money" value="money" />
            <FormControlLabel control={<Radio />} label="Todos" value="todos" />
            <FormControlLabel
              control={<Radio />}
              label="Reminders"
              value="reminders"
            />
            <FormControlLabel control={<Radio />} label="Work" value="work" />
          </RadioGroup>
        </FormControl>

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
