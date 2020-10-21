import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/UserContext";
import AuthService from "../../services/AuthService";
import GoogleLogo from "../../asset/logo_google.svg";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [referer, setReferer] = useState("/");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
      setMessage(response.data.message);
      await setUserData({
        id: response.data.user.id,
        name: response.data.user.name,
      });
      setIsAuthenticated(true);
      setTimeout(() => {
        history.push(referer);
      }, 1000);
    } catch (err) {
      if (err.response) setMessage(err.response.data.error);
    }
  };

  const onGoogleLoginSuccess = async (googleUser) => {
    try {
      const response = await AuthService.loginGoogleUser(
        googleUser.getAuthResponse().id_token
      );

      localStorage.setItem("auth-token", response.data.token);
      setMessage(response.data.message);
      await setUserData({
        id: response.data.user.id,
        name: response.data.user.name,
        email: response.data.user.email,
        picture: response.data.user.picture,
      });
      setIsAuthenticated(true);
      setTimeout(() => {
        history.push(referer);
      }, 1000);
    } catch (err) {
      if (err.response) setMessage(err.response.data.error);
    }
  };

  const onGoogleLoginFailure = (res) => {
    console.log(res);
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
          <input type="submit" className="submitForm" value="Accedi" />
          <div className="oppure">oppure</div>
          <GoogleLogin
            clientId="189102113218-vlo8jfnijik7dkjn4n6jrs0htk5okobf.apps.googleusercontent.com"
            onSuccess={onGoogleLoginSuccess}
            onFailure={onGoogleLoginFailure}
            render={(renderProps) => (
              <button onClick={renderProps.onClick} className="googleButton">
                <img src={GoogleLogo} alt="Google Logo" />
                <span>Accedi con Google</span>
              </button>
            )}
            cookiePolicy={"single_host_origin"}
          />
          <Link to="/register" className="linkForm">
            Non sei registrato?
          </Link>
        </form>
        <div
          className={`messaggioForm ${
            isAuthenticated ? "successMessage" : "errorMessage"
          }`}
        >
          {message}
        </div>
      </div>
      <div className="footer">
        <div className="nomeApp">timesheet.app</div>
        <div className="descrizioneApp">Rilevazione tempo di lavoro</div>
      </div>
    </div>
  );
}

export default Login;
