import React from "react";
import { Link } from "react-router-dom";
const PostCard = ({
  _id,
  createdBy,
  company_name,
  role,
  location,
  desc,
  skillsRequired,
  experienceRequired,
  questionary,
  applicationDeadline,
}) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <h3>{role}</h3>
        <p>Posted by {createdBy}</p>
      </div>
      <div className="post-content">
        <p>{desc}</p>
        <ul>
          <li>
            <strong>Company:</strong> {company_name}
          </li>
          <li>
            <strong>Location:</strong> {location}
          </li>
          <li>
            <strong>Skills Required:</strong> {skillsRequired.join(", ")}
          </li>
          <li>
            <strong>Experience Required:</strong> {experienceRequired}
          </li>
        </ul>
      </div>
      <div className="post-footer">
        <p>Application Deadline: {applicationDeadline}</p>
      </div>
      <div>
        <Link to={`/post/${_id}`} className="btn btn-post">
          {" "}
          Info
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
