import React, { useState } from "react";
import Input from "../Components/Input";
import TextField from "../Components/TextField";
import CalendarInput from "../Components/CalenderInput";
const handleChange = (e) => {
  setText(e.target.value);
};
const Create_Job = () => {
  // const [text, setText] = useState("");
  // const [epochTime, setEpochTime] = useState(0);

  // const handleEpochChange = (epoch) => {
  //   setEpochTime(epoch);
  // };

  const [formData, setFormData] = useState({
    Company_name: "",
    Role: "",
    Location: "",
    Your_Label: "",
    SkillsRequired: "",
    Experience_Required: "",
    CreatedBy: "",
    Select_Date: 0, // Initial epoch time
  });

  const handleChange = (label, value) => {
    setFormData({
      ...formData,
      [label]: value,
    });
    console.log(formData);
  };

  const handleEpochChange = (epoch) => {
    setFormData({
      ...formData,
      Select_Date: epoch,
    });
  };

  return (
    <div className="Create_Job">
      <h3>Create new job Post</h3>
      <p>lets get started</p>
      <form action="" className="Create_Job-form">
        <div className="Create_job-grid">
          <div>
            <div className="form-group">
              <Input
                label="Company_name"
                type="text"
                placeholder="Company"
                value={formData.Company_name}
                onChange={(value) => handleChange("Company_name", value)}
              ></Input>
            </div>
            <div className="form-group">
              <Input
                label="Role"
                type="text"
                value={formData.Role}
                onChange={(value) => handleChange("Role", value)}
                placeholder="Role"
              ></Input>
            </div>
            <div className="form-group">
              <Input
                label="Location"
                type="text"
                placeholder="Location"
                value={formData.Location}
                onChange={(value) => handleChange("Location", value)}
              ></Input>
            </div>
            <div className="form-group">
              <TextField
                label="Your Label"
                value={formData.Your_Label}
                onChange={(value) => handleChange("Your_Label", value)}
                placeholder="Enter your text here"
                description="This is a larger description providing more details about the input field."
              />
            </div>
          </div>
          <div>
            <div className="form-group">
              <Input
                label="SkillsRequired"
                type="text"
                placeholder="SkillsRequired"
                value={formData.SkillsRequired}
                onChange={(value) => handleChange("SkillsRequired", value)}
              ></Input>
            </div>
            <div className="form-group">
              <Input
                label="Experience Required"
                type="text"
                value={formData.Experience_Required}
                onChange={(value) => handleChange("Experience_Required", value)}
                placeholder="Experience Required"
              ></Input>
            </div>
            <div className="form-group">
              <Input
                label="CreateBy"
                type="text"
                placeholder="CreateBy"
                value={formData.CreatedBy}
                onChange={(value) => handleChange("CreatedBy", value)}
              ></Input>
            </div>
            <div className="form-group">
              <CalendarInput label="Select Date" onChange={handleEpochChange} />
            </div>
          </div>
        </div>
        <button className="btn Create_Job--btn">Submit</button>
      </form>
    </div>
  );
};

export default Create_Job;
