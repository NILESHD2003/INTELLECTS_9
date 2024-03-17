import React from "react";
import OtpInput from "../Components/OtpInput";
const Otp_page = () => {
  const handleOtpComplete = (otp) => {
    console.log("OTP entered:", otp);
    // Do something with the completed OTP, such as validating it
  };
  return (
    <div>
      <OtpInput onComplete={handleOtpComplete} />
    </div>
  );
};

export default Otp_page;
