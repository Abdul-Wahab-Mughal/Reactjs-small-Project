import React from "react";
import SelectField from "../Component/SelectField";
import { Box, Button, FormControl, TextField } from "@mui/material";

export default function Settings() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {};

  return (
    <>
      <div className="h-full w-full px-10 max-w-96">
        <div className="text-center text-black dark:text-white">Settings</div>
        <form onSubmit={handleSubmit}>
          <SelectField label="Category" />
          <SelectField label="Difficulty" />
          <SelectField label="Type" />
          <Box mt={3} width="100%">
            <FormControl className="dark:text-white" fullWidth size="small">
              <TextField
                className="inp dark:text-white"
                onChange={handleChange}
                variant="outlined"
                label="Amount of Question"
                type="number"
                size="small"
              />
            </FormControl>
          </Box>
          <Box mt={3} width="100%">
            <Button fullWidth variant="contained" type="submit">
              Get Started
            </Button>
          </Box>
        </form>
      </div>
      <style>
        {`
        .inp label {
          color: unset;
        }
        .dark .bord svg {
          fill: white;
        }
        .dark .inp fieldset,
        .dark .bord fieldset {
          border-color: white;
        }
        `}
      </style>
    </>
  );
}
