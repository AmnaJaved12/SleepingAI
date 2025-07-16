import React from "react";
import "./PlayerScreen.css";

const PlayerScreen = () => {
  return (
    <div className="player-page">
      {/* Credit Badge Only */}
      <div className="credit-header">
        <button className="credit-btn">437 🪙</button>
      </div>

      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), #001c3f), url('/assets/images/fox.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="highlight-box">
          <h2>Whispers of the Winter Fox</h2>
          <p>
            On a moonlit ridge above a quiet forest, a lone red fox follows
            silver pawprints only it can see.
          </p>
          <div className="tags">
            <span>⏱ 20 min</span>
            <span>🐾 Animal</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <img
          src="/assets/images/fox.jpg"
          alt="Winter Fox"
          className="main-image"
        />
        <h3>Whispers of the Winter Fox</h3>
        <audio controls>
          <source src="/winter-fox.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Footer (Only company info and copyright) */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <strong>Sleeping AI</strong>
            <br />
            Reverie Building, Country Pk, London 202, PKE, United Kingdom
            <br />
            +44-01234567890 | support@sleepingai.com
          </div>
        </div>
        <p>© 2025 - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PlayerScreen;
