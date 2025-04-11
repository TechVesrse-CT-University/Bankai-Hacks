// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "./components/Slidebar";
import Home from "./components/Home";
import Revaluation from "./components/Revaluation";
import Notifications from "./components/Notifications";
import Payments from "./components/Payments";
import Help from "./components/Help";
import StudentLogin from "./components/StudentLogin";
import ApplicationStatus from "./components/Application_status";
import StudentRegister from "./components/Studentregister"; 
import MentorLogin from "./components/Mentorlogin";




import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Student Revaluation & Services Dashboard</h1>
          </motion.header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/revaluation" element={<Revaluation />} />
            <Route path="/status" element={<ApplicationStatus status="Submitted" />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/Help" element={<Help/>} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/student-register" element={<StudentRegister />} />
            <Route path="/Mentorlogin" element={<MentorLogin />} />
            
          
          </Routes>
        </div>
      </div>
    </Router>
  );
}

