import React, { useState } from "react";
import "./PlayerScreen.css";

const PlayerScreen = () => {
  const [music, setMusic] = useState("Sunset Waves");
  const [speed, setSpeed] = useState(1.0);

  return (
    <div className="player-page">
      {/* Header */}
      <div className="credit-header">
        <button className="credit-btn" title="Your available credits">437 ✨</button>
      </div>

      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), #001c3f), url('/assets/images/fox.jpg')",
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

        <div className="audio-controls">
          <button className="skip-btn">⏪ 10s</button>
          <audio controls playbackRate={speed}>
            <source src="/winter-fox.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <button className="skip-btn">10s ⏩</button>
        </div>

        <div className="extras">
          <label>
            Ambient Music:
            <select value={music} onChange={(e) => setMusic(e.target.value)}>
              <option value="Sunset Waves">Sunset Waves</option>
              <option value="Rainfall">Rainfall</option>
              <option value="Night Breeze">Night Breeze</option>
            </select>
          </label>

          <label>
            Speed:
            <select value={speed} onChange={(e) => setSpeed(Number(e.target.value))}>
              <option value={1.0}>1x</option>
              <option value={1.25}>1.25x</option>
              <option value={1.5}>1.5x</option>
            </select>
          </label>
        </div>

        <div className="actions">
          <button className="action-btn">💾 Save</button>
          <button className="action-btn">🔗 Share</button>
          <button className="action-btn">🌓 Toggle Dark Mode</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <strong>Sleeping AI</strong><br />
            Reverie Building, Country Pk, London 202, PKE, United Kingdom<br />
            +44-01234567890 | support@sleepingai.com
          </div>
        </div>
        <p>© 2025 - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PlayerScreen;
