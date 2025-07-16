// src/screens/Home/HomeScreen.jsx

import React from "react";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: "url('/assets/images/bed_moon_scene.png')" }}
    >
      <nav className="navbar">
        <ul className="nav-links">
          <li>Home</li>
          <li>Library</li>
          <li>Player</li>
          <li>Community</li>
          <li>Setting</li>
        </ul>
        <div className="credits-badge">
          437 <span role="img" aria-label="sparkles">✨</span>
        </div>
      </nav>

      <div className="hero-section">
        <div className="hero-text">
          <h1>Sleeping AI</h1>
          <p>
            Create your own bedtime story with the help of artificial
            intelligence. Use your imagination to come up with characters,
            settings, and plots. AI will assist you in bringing your story to life.
          </p>
          <button className="generate-btn">✨ Generate Story for 10 credits</button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
