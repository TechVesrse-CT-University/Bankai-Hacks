import React from "react";
import "./ApplicationStatus.css";

const ApplicationStatus = ({ status }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "Submitted":
        return "status-badge status-submitted";
      case "In Review":
        return "status-badge status-review";
      case "Approved":
        return "status-badge status-approved";
      case "Rejected":
        return "status-badge status-rejected";
      default:
        return "status-badge status-default";
    }
  };

  return (
    <div className="application-container">
      <h2 className="application-title">Application Status</h2>
      <div className={getStatusClass(status)}>
        {status}
      </div>
    </div>
  );
};

export default ApplicationStatus;
