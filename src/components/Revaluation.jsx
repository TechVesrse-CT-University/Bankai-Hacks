// components/Revaluation.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Revaluation.css";

export default function Revaluation() {
  const handleApplyClick = () => {
    alert("Application process started!");
  };

  const handleStatusClick = () => {
    alert("Redirecting to application status...");
  };

  return (
    <motion.div
      className="revaluation-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="revaluation-title">Apply for Revaluation</h2>
      <p>Here you can apply for exam paper revaluation.</p>
      <div className="button-group">
        <button className="revaluation-button" onClick={handleApplyClick}>
          Apply Now
        </button>
        <button className="revaluation-button" onClick={handleStatusClick}>
          View Application Status
        </button>
      </div>
    </motion.div>
  );
}

