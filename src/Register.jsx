import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function errorChecking() {
    const newErrors = []
    if (username.length < 3) {
      newErrors.push('Username too short! 3 chars minimum');
    }
    if (password.length < 5) {
      newErrors.push('Password too short! 5 chars minimum')
    }
    setErrors(newErrors);
    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(errorChecking().length === 0) {
      localStorage.setItem(username, password);
    }
  };

  return (
    <Box>
      {errors.map(e => {
        <p>{e}</p>
      })}
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
