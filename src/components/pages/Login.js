import React, { useState } from "react";
import AuthService from "../../services/AuthService";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.loginUser({
        email,
        password,
      });
      setMessage(response.data.message);
      localStorage.setItem("auth-token", response.data.token);
    } catch (err) {
      if (err.response) setMessage(err.response.data.error);
    }
    /* 
    AuthService.loginUser({
      email,
      password,
    })
      .then((response) => {
        setMessage(response.data.message);
        console.log(response.headers.Authorization);
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response) setMessage(error.response.data.error);
      }); */
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => submit(e)}>
        <input
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Accedi" />
      </form>
      <div className="messaggio">{message}</div>
    </div>
  );
}

export default Login;
