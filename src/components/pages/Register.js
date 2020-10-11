import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthService from "../../services/AuthService";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setMessage("Attenzione! Le due password non coincidono");
      return;
    }

    AuthService.registerUser({
      name,
      email,
      password,
    })
      .then((response) => {
        setMessage(response.data.message);

        if (response.statusText === "OK") {
          setIsAuthenticated(true);
          setTimeout(() => {
            history.push("/login");
          }, 1000);
        }
      })
      .catch((error) => {
        if (error.response) setMessage(error.response.data.error);
      });
  };

  return (
    <div className="registerPage">
      <div className="contenitoreRegister">
        <h1>Registrazione</h1>
        <form onSubmit={(e) => submit(e)}>
          <div className="rigaForm">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="rigaForm">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
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
          <div className="rigaForm">
            <label htmlFor="passwordConfirmation">Conferma Password</label>
            <input
              id="passwordConfirmation"
              type="password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <input type="submit" className="submitForm" value="Conferma" />
          <Link to="/login" className="linkForm">
            Già registrato?
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

export default Register;
