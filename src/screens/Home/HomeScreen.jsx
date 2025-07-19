import React from "react";
import { Link } from "react-router-dom";
import "./HomeScreen.css";

const topics = [
  { name: "Science", emoji: "🔬" },
  { name: "Time Travel", emoji: "⏳" },
  { name: "Fermi Paradox", emoji: "🌌" },
  { name: "Fantasy", emoji: "🐉" },
];

const HomeScreen = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: "url('/assets/images/bed_moon_scene.png')" }}
    >
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/library">Library</Link></li>
          <li><Link to="/player">Player</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/setting">Setting</Link></li>
        </ul>
        <div className="credits-badge" title="Your available credits">
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

          <div className="topic-picker">
            {topics.map((topic, index) => (
              <div key={index} className="topic-card">
                {topic.emoji} {topic.name}
              </div>
            ))}
          </div>

          <input
            type="text"
            className="custom-topic-input"
            placeholder="Or enter a custom topic..."
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
