import React, { useState } from "react";
import "./Login.css";
import logo_light from "../images/Amazon_logo_light.png";
import { auth } from "../firebase.js";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((ot) => {
        if (ot) {
          history("/");
        }
      })
      .catch((error) => alert.error);
  };

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((ot) => {
        if (ot) {
          history("/");
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="login">
      <Link to="/">
        <div className="logo-light">
          <img src={logo_light} alt="" />
        </div>
      </Link>

      <form action="">
        <h1>Sign-in</h1>
        <label htmlFor="Email">
          <p>Email</p>
          <input
            type="email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="Password">
          <p>Password</p>
          <input
            type="password"
            name="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="sign_in">
          <button onClick={signIn} type="submit">
            Sign in
          </button>
        </div>

        <p>
          By signing-in, you agree to Amazon fake clone's Conditions of Use and
          Privacy Notice.
        </p>
        <div className="register">
          <button onClick={signUp} type="submit">
            Create your Amazon account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
