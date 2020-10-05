import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/UserContext";
import AuthService from "../../services/AuthService";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [referer, setReferer] = useState("/");

  const history = useHistory();
  const { setUserData } = useAuth();

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
      localStorage.setItem("auth-token", response.data.token);
      console.log("Token salvatao");
      setMessage(response.data.message);
      await setUserData({
        id: response.data.user.id,
        name: response.data.user.name,
      });
      setTimeout(() => {
        history.push(referer);
      }, 1000);
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
    </div>
  );
}

export default Login;
