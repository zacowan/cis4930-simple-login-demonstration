import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };

  return (
    <Box>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default RegisterPage;
