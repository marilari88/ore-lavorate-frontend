import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthService from "../../services/AuthService";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [referer, setReferer] = useState("/");

  useEffect(() => {
    props.location.state !== undefined &&
      setReferer(props.location.state.referer);
  }, [props]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.loginUser({
        email,
        password,
      });
      setMessage(response.data.message);
      localStorage.setItem("auth-token", response.data.token);
      setLoggedIn(true);
    } catch (err) {
      if (err.response) setMessage(err.response.data.error);
    }
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
      <Link to="/register">Non sei registrato?</Link>
      {loggedIn && <Redirect to={referer} />}
    </div>
  );
}

export default Login;
