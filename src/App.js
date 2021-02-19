import React, { useState, useEffect } from "react";
import Register from "./Register";
import Login from "./Login";
import Hello from "./Hello";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(localStorage.getItem("currentUser"));

  if (localStorage.getItem("currentUser") !== user) {
    setUser(localStorage.getItem("currentUser"));
  }

  return (
    <Router>
      <div>
        <h1>Simple Login Demonstration</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            {user === null ? (
              <Redirect to="/login" />
            ) : (
              <Hello
                user={{ username: user, password: localStorage.getItem(user) }}
              />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
