import React from "react";
import TextField from "@mui/material/TextField";

const TextInput = ({ required, label, name, type, help, value, onChange }) => {
  return (
    <TextField
      required={required}
      id={name}
      label={label}
      variant="standard"
      fullWidth
      type={type}
      value={value}
      name={name}
      margin="dense"
      onChange={onChange}
      helperText={help}
    />
  );
};
export default TextInput;
