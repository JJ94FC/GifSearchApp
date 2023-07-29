import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    }
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <Grid item xs={12}>
      <Box component="form" onSubmit={onSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <TextField
              fullWidth={true}
              id="filled-basic"
              label="Theme"
              variant="filled"
              placeholder="Add a new theme"
              value={inputValue}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              sx={{ height: "3.5rem" }}
              type="submit"
              variant="contained"
              onClick={onSubmit}
            >
              Add new theme
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
