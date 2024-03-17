import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../User/Login_auth";
import { updateUserInfo } from "../User/Login_auth";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="form">
        <h1>Log In</h1>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="student@standard.edu"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <Link to="/signup" className="link">
          Don't Have an Account? <span>Sign up</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
