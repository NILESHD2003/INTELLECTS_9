import React, { useState } from "react";
import Input from "../Components/Input";
import { useDispatch } from "react-redux";
import { Otp } from "../User/SignUp_auth";
import { useNavigate } from "react-router-dom";
import { store_data } from "../User/SignUp_auth";
import { toast } from "react-toastify";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (label, value) => {
    setFormData({
      ...formData,
      [label]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Otp(formData))
      .then((response) => {
        console.log("Signup successful:", response.meta.arg);
        dispatch(store_data(response.meta.arg));
        toast.success("Seccesfully");
        navigate("/otp");
      })
      .catch((error) => {
        toast.danger("Try Again");
        console.error("Signup error:", error);
      });
  };

  return (
    <div className="home">
      <form action="" className="form" onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <div className="form-group">
          <Input
            label="First Name"
            type="text"
            placeholder="First Name"
            value={formData["firstName"]}
            onChange={(value) => handleChange("firstName", value)}
          ></Input>
        </div>
        <div className="form-group">
          <Input
            label="Last Name"
            type="text"
            value={formData["lastName"]}
            onChange={(value) => handleChange("lastName", value)}
            placeholder="Last Name"
          ></Input>
        </div>
        <div className="form-group">
          <Input
            label="Email"
            type="text"
            value={formData["email"]}
            onChange={(value) => handleChange("email", value)}
            placeholder="student@standard.edu"
          ></Input>
        </div>
        <div className="form-group">
          <Input
            label="Phone"
            type="text"
            value={formData["phone"]}
            onChange={(value) => handleChange("phone", value)}
            placeholder="Enter Your Phone Number"
          ></Input>
        </div>
        <div className="form-group">
          <Input
            label="Password"
            type="password"
            value={formData["password"]}
            onChange={(value) => handleChange("password", value)}
            placeholder="Password"
          ></Input>
        </div>
        <div className="form-group">
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            value={formData["confirmPassword"]}
            onChange={(value) => handleChange("confirmPassword", value)}
          ></Input>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
