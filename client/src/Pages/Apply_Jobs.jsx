import React, { useEffect } from "react";
import Input from "../Components/Input";

const Apply_Jobs = () => {
  useEffect(() => {}, []);

  return (
    <div className="apply_jobs">
      <h1> Apply to Campus Jobs</h1>
      <div className="form-group">
        <Input
          label="First name"
          type="text"
          placeholder="Your First Name"
        ></Input>
      </div>
      <div className="form-group">
        <Input
          label="Last name"
          type="text"
          placeholder="Your Last Name"
        ></Input>
      </div>
      <div className="form-group">
        <Input
          label="Email Address"
          type="email"
          placeholder="you@gmail.com"
        ></Input>
      </div>
      <div className="form-group">
        <Input
          label="Phone Number"
          type="text"
          placeholder="1234567890"
        ></Input>
      </div>
      <h3>Education</h3>
      <div className="form-group">
        <Input
          label="University"
          type="text"
          placeholder="Search for University"
        ></Input>
      </div>
      <div className="form-group">
        <Input label="Degree" type="text" placeholder="Your Degree"></Input>
      </div>
      <div className="form-group">
        <Input label="Major" type="text" placeholder="Major Degree"></Input>
      </div>
      <div className="form-group">
        <Input
          label="Graduation Year"
          type="text"
          placeholder="Your Graduation Year"
        ></Input>
      </div>
      <h3>Experience</h3>
      <div className="form-group">
        <Input
          label="Year of experience"
          type="text"
          placeholder="Year of experience"
        ></Input>
      </div>
      <div className="form-group">
        <Input
          label="Current Employment status"
          type="text"
          placeholder="Employment status"
        ></Input>
      </div>
      <button className="btn btn-apply">Submit</button>
    </div>
  );
};

export default Apply_Jobs;
