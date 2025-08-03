import React, { useState } from "react";
import "./LibraryScreen.css";
import { Link } from "react-router-dom";

import '../../components/Navbar.css';
const categories = ["My stories", "Saved Stories", "Published"];
const sections = ["Private", "Community"];

const initialStories = [
  { title: "Lantern of the Meadow Sprite", image: "/assets/images/bed_moon_scene.png" },
  { title: "The Silent Keep in the Morning Mist", image: "/assets/images/fox.jpg" },
  { title: "Dawnlight at the Round-Door Burrow", image: "/assets/images/moon_bunny.png" },
  { title: "Enchantress of the Silver Grove", image: "/assets/images/chat_phone.png" },
  { title: "First Moonwalk Beneath the Stars", image: "/assets/images/fingerprint_face.png" },
  { title: "The Silent Watch of the Clay Guard", image: "/assets/images/bed_moon_scene.png" },
  { title: "Whispers of the Winter Fox", image: "/assets/images/fox.jpg" },
  { title: "The Flamingo's Mirror: Still Lagoon", image: "/assets/images/moon_bunny.png" },
  { title: "Whispers of the Sacred Book", image: "/assets/images/chat_phone.png" },
  { title: "Dawn Over the Shining Shrine", image: "/assets/images/fingerprint_face.png" },
  { title: "Moon-Rover and the Whispering Waters", image: "/assets/images/bed_moon_scene.png" },
  { title: "Whispers of the Ancient Arena", image: "/assets/images/fox.jpg" },
];

const LibraryScreen = () => {
  const [activeTab, setActiveTab] = useState("Private");
  const [category, setCategory] = useState("My stories");
  const [searchTerm, setSearchTerm] = useState("");
  const [savedStories, setSavedStories] = useState(initialStories);

  const handleDelete = (indexToDelete) => {
    const confirmed = window.confirm("Are you sure you want to delete this story?");
    if (confirmed) {
      setSavedStories((prevStories) =>
        prevStories.filter((_, idx) => idx !== indexToDelete)
      );
    }
  };

  const storiesToDisplay =
    category === "Saved Stories" ? savedStories : initialStories;

  const filteredStories = storiesToDisplay.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="library-page">
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
      <header className="library-header">
        <h2>My Library</h2>
        <p>Your bedtime story collection</p>
        <div className="tab-switcher">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => setActiveTab(sec)}
              className={activeTab === sec ? "active-tab" : ""}
            >
              {sec}
            </button>
          ))}
        </div>
      </header>

      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={category === cat ? "active-category" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="search-bar-wrapper">
        <input
          className="search-input"
          type="text"
          placeholder="Search for stories..."
 id="story-search"
 name="story-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="story-grid">
        {filteredStories.map((story, index) => (
          <div className="story-card" key={index}>
            <img
              src={story.image || "/assets/images/placeholder.jpg"}
              alt={story.title}
              className="story-image"
            />
            <p className="story-title">{story.title}</p>
            <div className="card-actions">
              <button title="Play">▶️</button>
              <button title="Save">💾</button>
              <button title="Share">🔗</button>
              {category === "Saved Stories" && (
                <button
                  className="delete-button"
                  title="Delete"
                  onClick={() => handleDelete(index)}
                >
                  🗑️
                </button>
              )}
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

export default LibraryScreen;
