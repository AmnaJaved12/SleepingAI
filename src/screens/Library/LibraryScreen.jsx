import React, { useState } from "react";
import "./LibraryScreen.css";

const categories = ["My stories", "Saved Stories", "Published"];
const sections = ["Private", "Community"];

const allStories = [
  { title: "Lantern of the Meadow Sprite", image: "/assets/images/sample1.jpg" },
  { title: "The Silent Keep in the Morning Mist", image: "/assets/images/sample2.jpg" },
  { title: "Dawnlight at the Round-Door Burrow", image: "/assets/images/sample3.jpg" },
  { title: "Enchantress of the Silver Grove", image: "/assets/images/sample4.jpg" },
  { title: "First Moonwalk Beneath the Stars", image: "/assets/images/sample5.jpg" },
  { title: "The Silent Watch of the Clay Guard", image: "/assets/images/sample6.jpg" },
  { title: "Whispers of the Winter Fox", image: "" },
  { title: "The Flamingo's Mirror: Still Lagoon", image: "" },
  { title: "Whispers of the Sacred Book", image: "" },
  { title: "Dawn Over the Shining Shrine", image: "" },
  { title: "Moon-Rover and the Whispering Waters", image: "" },
  { title: "Whispers of the Ancient Arena", image: "" },
];

const LibraryScreen = () => {
  const [activeTab, setActiveTab] = useState("Private");
  const [category, setCategory] = useState("My stories");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStories = allStories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="library-page">
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
              <button>▶️</button>
              <button>💾</button>
              <button>🔗</button>
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
