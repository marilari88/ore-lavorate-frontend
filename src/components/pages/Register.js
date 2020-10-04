import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");

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
        console.log(response);
      })
      .catch((error) => {
        if (error.response) setMessage(error.response.data.error);
      });
  };

  return (
    <div>
      <h1>Registrazione</h1>
      <form onSubmit={(e) => submit(e)}>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
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
        <label htmlFor="passwordConfirmation">Conferma Password</label>
        <input
          id="passwordConfirmation"
          type="password"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <input type="submit" value="Conferma" />
      </form>
      <div className="messaggio">{message}</div>
      <Link to="/login">Già registrato?</Link>
    </div>
  );
}

export default Register;
