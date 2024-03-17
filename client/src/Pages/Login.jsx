import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../User/Login_auth";
import { updateUserInfo } from "../User/Login_auth";
const Login = ({ handleLogout }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    dispatch(updateUserInfo({ email: e.target.value, password }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    dispatch(updateUserInfo({ email, password: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handleLogin = () => {
    console.log("TRIGGERED");
    dispatch(loginUser());
  };
  return (
    <div className="home">
      <form action="" className="form" onSubmit={onSubmit}>
        <h1>Log In</h1>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="student@standard.edu"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password </label>
          <input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="password"
          />
        </div>
        <button className="btn" onClick={handleLogin}>
          Login
        </button>
        <Link to="/signup" className="link">
          Don't Have an Account?<span> Sign up</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
