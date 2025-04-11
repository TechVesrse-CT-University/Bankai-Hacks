import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function LoginPage() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // this will help navigate between pages

  const handleLoginClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const handleOptionClick = (role) => {
    setShowPopup(false);
    if (role === 'Student') {
      navigate('/student-login'); //redirects to student login page
    } else if (role === 'Mentor') {
      navigate('/Mentorlogin'); 
    }
  };

  return (
    <div className="login-page">
      <h1>Welcome! to <u>RevalEase</u></h1>
      <button className="login-button" onClick={handleLoginClick}>Login</button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Select Role</h2>
            <button onClick={() => handleOptionClick('Student')}>Student</button>
            <button onClick={() => handleOptionClick('Mentor')}>Mentor</button>
            <button className="close-button" onClick={handleClosePopup}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;


