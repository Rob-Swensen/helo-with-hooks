import React, { useState } from "react";
import axios from "axios";

function Auth(props) {
  const [usernameInput, setUsername] = useState(""),
    [passwordInput, setPassword] = useState("");

  const register = () => {
    axios
      .post("/api/auth/register", {
        username: usernameInput,
        password: passwordInput,
      })
      .then((response) => {
        props.history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const login = () => {
    axios
      .post("/api/auth/login", {
        username: usernameInput,
        password: passwordInput,
      })
      .then((response) => {
        props.history.push("/dashboard");
      })
      .catch(err => console.log(err))
  };

  console.log(props)
  return (
    <div>
      <input
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        value={usernameInput}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
        value={passwordInput}
      />
      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>
    </div>
  );
}

export default Auth;
