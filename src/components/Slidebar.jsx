
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


export default function Sidebar() {
  return (
    <motion.div
      className="sidebar"
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Dashboard
        
      </h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/revaluation">Revaluation</NavLink>
        <NavLink to="/status">application status</NavLink>
        <NavLink to="/notifications">Notifications</NavLink>
        <NavLink to="/payments">Payments</NavLink>
        <NavLink to="/refunds">Help</NavLink>
      </nav>
    </motion.div>
  );
}
