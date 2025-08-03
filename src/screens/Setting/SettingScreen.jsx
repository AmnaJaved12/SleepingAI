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

  const [promoCode, setPromoCode] = useState("");
  const userName = "UserName"; // ✅ Removed setUserName since it's not used

  const toggleSwitch = (key) => {
    setPreferences({ ...preferences, [key]: !preferences[key] });
  };

  const handlePromoApply = () => {
    alert(`Promo code "${promoCode}" applied!`);
  };

  return (
    <>
      <div className="settings-page">
        {/* User Info */}
        <div className="user-info">
          <h2>@{userName}</h2>
          <p>example@gmail.com</p>
          <button className="edit-btn" onClick={() => alert("Edit modal here")}>
            Edit User Name
          </button>
        </div>

        {/* Main Sections */}
        <div className="settings-sections">
          {/* Account Info */}
          <div className="section-box">
            <h3>Account</h3>
            {/* Google Login Button */}
            {/* Remove this section if you are not using email/password login */}
            {/* {user ? (
              <>
                <div className="row"><span>📧 Email</span><p>{user.email}</p></div>
                <button onClick={() => signOut(auth)}>Sign Out</button>
              </>
            ) : (
              <button onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</button>
            )} */}
            <div className="row"><span>🔒 Password</span><p>••••••••</p></div>
            <div className="row"><span>📞 Phone</span><p>+44•••••••••</p></div>
            <div className="row"><span>✨ My Credits</span><p>437</p></div>
            <div className="row"><span>📧 Email</span><p>example@gmail.com</p></div>
          </div>

          {/* Store */}
          <div className="section-box">
            <h3>Store</h3>
            <div className="row"><span>💳 20 Credits</span><p>£1.99</p></div>
            <div className="row"><span>💳 50 Credits</span><p>£3.99</p></div>
            <div className="row"><span>💳 120 Credits</span><p>£6.99</p></div>
            <div className="promo-row">
              <input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={handlePromoApply}>Apply</button>
            </div>
            <div className="row"><span>📜</span><p>View transaction history</p></div>
          </div>

          {/* Preferences */}
          <div className="section-box">
            <h3>Preferences</h3>
            {["pushNotifications", "emailUpdates", "soundEffects"].map((pref) => (
              <div className="row" key={pref}>
                <span>
                  {pref === "pushNotifications" && "🔔"}
                  {pref === "emailUpdates" && "📩"}
                  {pref === "soundEffects" && "🔊"}{" "}
                  {pref.replace(/([A-Z])/g, " $1")}
                </span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={preferences[pref]}
                    onChange={() => toggleSwitch(pref)}
                  />
                  <span className="slider" />
                </label>
              </div>
            ))}
          </div>

          {/* Accessibility */}
          <div className="section-box">
            <h3>Accessibility</h3>
            {["highContrast", "screenReader"].map((pref) => (
              <div className="row" key={pref}>
                <span>
                  {pref === "highContrast" && "🦾"} {pref === "screenReader" && "📖"}{" "}
                  {pref.replace(/([A-Z])/g, " $1")}
                </span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={preferences[pref]}
                    onChange={() => toggleSwitch(pref)}
                  />
                  <span className="slider" />
                </label>
              </div>
            ))}
          </div>

          {/* Save Settings */}
          <button className="save-btn" onClick={() => alert("Settings saved!")}>
            Save Changes
          </button>
        </div>
      </div>

      {/* Footer */}
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
