import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SelectField({ label }) {
  const [value, SetValue] = useState("");

  const handleChange = () => {};

  return (
    <>
      <Box mt={3} width="100%">
        <FormControl size="small" fullWidth className="bord">
          <InputLabel className="dark:text-white">{label}</InputLabel>
          <Select value={value} label={label} onChange={handleChange}>
            <MenuItem>Ten</MenuItem>
            <MenuItem>Twenty</MenuItem>
            <MenuItem>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
