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
    <div className="loginPage">
      <div className="contenitoreLogin">
        <h1>Login</h1>
        <form onSubmit={(e) => submit(e)} className="formLogin">
          <div className="rigaForm">
            <label htmlFor="email">Email </label>
            <input
              id="email"
              type="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="rigaForm">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <input type="submit" className="submitForm" value="Accedi" />
        <Link to="/register" className="linkForm">
          Non sei registrato?
        </Link>
        <div className="messaggioForm">{message}</div>
        <div className="footer">
          <div className="nomeApp">timesheet.app</div>
          <div className="descrizioneApp">Rilevazione tempo di lavoro</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
