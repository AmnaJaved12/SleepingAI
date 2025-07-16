import React, { useState } from "react";
import "./SettingScreen.css";

const SettingScreen = () => {
  const [preferences, setPreferences] = useState({
    pushNotifications: false,
    emailUpdates: true,
    soundEffects: false,
    highContrast: false,
    screenReader: true,
  });

  const toggleSwitch = (key) => {
    setPreferences({ ...preferences, [key]: !preferences[key] });
  };

  return (
    <>
      <div className="settings-page">
        <div className="user-info">
          <h2>@UserName</h2>
          <p>example@gmail.com</p>
          <button className="edit-btn">Edit User Name</button>
        </div>

        <div className="settings-sections">
          {/* Account */}
          <div className="section-box">
            <h3>Account</h3>
            <div className="row">
              <span>📧 Email</span>
              <p>example@gmail.com</p>
              <span className="arrow"></span>
            </div>
            <div className="row">
              <span>🔒 Password</span>
              <p>••••••••</p>
              <span className="arrow"></span>
            </div>
            <div className="row">
              <span>📞 Phone</span>
              <p>Enter your phone no:</p>
              <span className="arrow"></span>
            </div>
            <div className="row">
              <span>✨ My Credits</span>
              <span className="arrow"></span>
            </div>
          </div>

          {/* Preferences */}
          <div className="section-box">
            <h3>Preferences</h3>
            <div className="row">
              <span>🔔 Push Notifications</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={preferences.pushNotifications}
                  onChange={() => toggleSwitch("pushNotifications")}
                />
                <span className="slider" />
              </label>
            </div>
            <div className="row">
              <span>📩 Email Updates</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={preferences.emailUpdates}
                  onChange={() => toggleSwitch("emailUpdates")}
                />
                <span className="slider" />
              </label>
            </div>
            <div className="row">
              <span>🔊 Sound Effects</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={preferences.soundEffects}
                  onChange={() => toggleSwitch("soundEffects")}
                />
                <span className="slider" />
              </label>
            </div>
          </div>

          {/* Accessibility */}
          <div className="section-box">
            <h3>Accessibility</h3>
            <div className="row">
              <span>🦾 High-Contrast</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={preferences.highContrast}
                  onChange={() => toggleSwitch("highContrast")}
                />
                <span className="slider" />
              </label>
            </div>
            <div className="row">
              <span>📖 Screen Reader</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={preferences.screenReader}
                  onChange={() => toggleSwitch("screenReader")}
                />
                <span className="slider" />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Footer moved outside */}
      <footer className="footer">
        <p>Sleeping AI</p>
        <p>
          StoryNest Building, County 42, Lavender St 309, Layered Heights <br />
          contact@sleepingai.com | +01 234 567 890
        </p>
        <p>© Copyright 2025. All rights reserved.</p>
      </footer>
    </>
  );
};

export default SettingScreen;
