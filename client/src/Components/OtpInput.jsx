import React, { useState } from "react";
import { SignupUser } from "../User/SignUp_auth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
const OtpInput = ({ onComplete }) => {
  const navigate = useNavigate();
  const [Otp, setOtp] = useState(["", "", "", ""]);

  const inputRefs = [];

  const dispatch = useDispatch();

  const { confirmPassword, phone, password, lastName, firstName, email } =
    useSelector((state) => state.sign.FormData);

  const handleChange = (index, value) => {
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      const newOtp = [...Otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (newOtp.every((digit) => digit !== "")) {
        onComplete(newOtp.join(""));
      } else if (value === "") {
        inputRefs[index - 1].focus();
      } else {
        inputRefs[index + 1]?.focus();
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handeleSubmit");

    dispatch(
      SignupUser({
        confirmPassword,
        phone,
        password,
        lastName,
        firstName,
        email,
        Otp,
      })
    )
      .then((response) => {
        toast.success(`Successfully  Sign up `);
        navigate("/login");
      })
      .catch((error) => {
        toast.danger(`Try Again`);
        console.error("Signup error:", error);
      });
  };
  const handleKeyDown = (index, e) => {
    // Move focus to the previous input when Backspace is pressed on an empty input
    if (e.key === "Backspace" && Otp[index] === "" && index > 0) {
      inputRefs[index - 1].focus();
    }
  };

  return (
    <div className="otp-container" onSubmit={handleSubmit}>
      <form action="">
        <div className="opt-container-input">
          <h2>Enter OTP</h2>
          {Otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>
        <button type="submit" className="otp-btn">
          Verify
        </button>
      </form>
    </div>
  );
};

export default OtpInput;
