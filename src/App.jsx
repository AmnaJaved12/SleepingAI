import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnboardingScreen from "./screens/Onboarding/OnboardingScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import LibraryScreen from "./screens/Library/LibraryScreen";
import PlayerScreen from "./screens/Player/PlayerScreen";
import CommunityScreen from "./screens/Community/CommunityScreen";
import SettingScreen from "./screens/Setting/SettingScreen";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {isLoggedIn ? (
        <React.Fragment>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/library" element={<LibraryScreen />} />
            <Route path="/player" element={<PlayerScreen />} />
            <Route path="/community" element={<CommunityScreen />} />
            <Route path="/setting" element={<SettingScreen />} />
          </Routes>
        </React.Fragment>
      ) : (
        <Routes>
          <Route
            path="*"
            element={<OnboardingScreen onContinue={() => setIsLoggedIn(true)} />}
          />
        </Routes>
      )}
    </Router>
  );
}

export default App;