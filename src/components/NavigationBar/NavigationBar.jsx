// src/components/NavigationBar/NavigationBar.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig'; // Correct path to firebaseConfig
import './NavigationBar.css';

const NavigationBar = () => {
  const navigate = useNavigate();

  const renderSignOutButton = () => {
    return (
      <div className="nav-link-item">
        <button onClick={async () => {
          await signOut(auth);
          navigate('/');
        }}>Sign Out</button>
      </div>
    );
  };
  return (
    <nav className="navbar">
      <div className="nav-links">
        <div className="nav-link-item">
          <Link to="/">Onboarding</Link>
        </div>
        <div className="nav-link-item">
          <Link to="/home">Home</Link>
        </div>
        <div className="nav-link-item">
          <Link to="/library">Library</Link>
        </div>
        <div className="nav-link-item">
          <Link to="/community">Community</Link>
        </div>
        <div className="nav-link-item">
          <Link to="/setting">Setting</Link>
        </div>
        <div className="nav-link-item">
          <Link to="/player">Player</Link>
        </div>
        {renderSignOutButton()}
     </div>
    </nav>
  );
};
export default NavigationBar;