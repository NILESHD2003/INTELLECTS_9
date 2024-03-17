import React from "react";
import OtpInput from "../Components/OtpInput";
const Otp_page = () => {
  const handleOtpComplete = (otp) => {
    console.log("OTP entered:", otp);
  };
  return (
    <div>
      <OtpInput onComplete={handleOtpComplete} />
    </div>
  );
};

export default Otp_page;
