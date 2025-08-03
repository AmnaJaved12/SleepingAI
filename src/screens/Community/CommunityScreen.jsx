import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./CommunityScreen.css";
import '../../components/Navbar.css';

const stories = [
  {
    title: "The Silent Watch of the Clay Guard",
    author: "Joanna Wellick",
    date: "June 17, 2025",
    shares: "1.1K",
    image: "/assets/images/sample6.jpg",
    excerpt:
      "Joanna shared this AI-generated bedtime tale about the silent defense watchers in a surreal world where stone comes alive.",
  },
  {
    title: "Lantern of the Meadow Sprite",
    author: "Joanna Wellick",
    date: "June 17, 2025",
    shares: "1.1K",
    image: "/assets/images/sample1.jpg",
    excerpt:
      "An elvish dreamscape where a glowing lantern guides a sprite across flower fields at twilight.",
  },
  {
    title: "The Silent Keep in the Morning Mist",
    author: "Joanna Wellick",
    date: "June 17, 2025",
    shares: "1.1K",
    image: "/assets/images/sample2.jpg",
    excerpt:
      "Mysterious ruins loom beyond fog and time as a wandering prince stumbles upon enchanted stone.",
  },
  {
    title: "The Night Stroll of the Metal Walker",
    author: "Joanna Wellick",
    date: "June 17, 2025",
    shares: "1.1K",
    image: "/assets/images/sample3.jpg",
    excerpt:
      "A robotic guardian discovers peace walking quiet alleys in a neon-fused sleeping city.",
  },
];

const CommunityScreen = () => {
  const [tab, setTab] = useState("Community");

  return (
    <div className="community-page">
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
      <header className="community-header">
        <h2>Community</h2>
        <p>Our bedtime story community</p>
        <div className="tab-switcher">
          <button className={tab === "Private" ? "active-tab" : ""} onClick={() => setTab("Private")}>Private</button>
          <button className={tab === "Community" ? "active-tab" : ""} onClick={() => setTab("Community")}>Community</button>
        </div>
      </header>

      <div className="search-bar-wrapper">
        <input
          className="search-input"
          type="text"
          placeholder="Search for stories..."
        />
      </div>

      <div className="community-grid">
        {stories.map((story, index) => (
          <div className="community-card" key={index}>
            <img src={story.image} alt={story.title} className="community-image" />
            <div className="community-info">
              <h4>{story.title}</h4>
              <p className="author-date">
                <span className="author">{story.author}</span> <span>•</span> <span>{story.date}</span> <span>•</span> <span>{story.shares} shares</span>
              </p>
              <p className="excerpt">{story.excerpt}</p>
              <button className="view-btn">View Post</button>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>Sleeping AI</p>
        <p>
          StoryNest Building, County 42, Lavender St 309, Layered Heights <br />
          contact@sleepingai.com | +01 234 567 890
        </p>
        <p>© Copyright 2025. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CommunityScreen;