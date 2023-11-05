import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].email);
          history.push("/dashboard"); // Redirect to dashboard after successful login
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form>
      <h4>Login Here</h4>
      <label htmlFor="username">Username</label>
      <input
        className="textInput"
        type="text"
        name="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="Enter your Username"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        className="textInput"
        type="password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter your Password"
        required
      />
      <input className="button" type="submit" onClick={login} value="Login" />
      <h1
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        {loginStatus}
      </h1>
    </form>
  );
}

export default Login;
