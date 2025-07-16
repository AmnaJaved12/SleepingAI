import React, { useState } from "react";
import "./LibraryScreen.css";

const categories = ["My stories", "Saved Stories", "Published"];
const sections = [
  "Private",
  "Community",
];

const stories = [
  "Lantern of the Meadow Sprite",
  "The Silent Keep in the Morning Mist",
  "Dawnlight at the Round-Door Burrow",
  "Enchantress of the Silver Grove",
  "First Moonwalk Beneath the Stars",
  "The Silent Watch of the Clay Guard",
  "Whispers of the Winter Fox",
  "The Flamingo's Mirror: Still Lagoon",
  "Whispers of the Sacred Book",
  "Dawn Over the Shining Shrine",
  "Moon-Rover and the Whispering Waters",
  "Whispers of the Ancient Arena",
];

const LibraryScreen = () => {
  const [activeTab, setActiveTab] = useState("Private");
  const [category, setCategory] = useState("My stories");

  return (
    <div className="library-page">
      <nav className="navbar">
        <ul className="nav-links">
          <li>Home</li>
          <li className="active">Library</li>
          <li>Player</li>
          <li>Community</li>
          <li>Setting</li>
        </ul>
        <div className="credits-badge">437 ✨</div>
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
        />
      </div>

      <div className="story-grid">
        {stories.map((story, index) => (
          <div className="story-card" key={index}>
            <img
              src={`/assets/images/sample${(index % 6) + 1}.jpg`}
              alt={story}
              className="story-image"
            />
            <p className="story-title">{story}</p>
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
