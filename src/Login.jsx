import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, TextField } from "@material-ui/core";

const LoginPage = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function errorChecking() {
    const newErrors = [];
    if (
      localStorage.getItem(username) === null ||
      localStorage.getItem(username) !== password
    ) {
      newErrors.push("Invalid credentials!");
    }
    setErrors(newErrors);
    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errorChecking().length === 0) {
      localStorage.setItem("currentUser", username);
      setUser(username);
      history.push("/");
    }
  };

  return (
    <Box>
      <h1>Login</h1>
      {errors.map((e) => (
        <p>{e}</p>
      ))}
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

export default LoginPage;
