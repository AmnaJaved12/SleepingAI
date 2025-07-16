import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/Home/HomeScreen";
import LibraryScreen from "./screens/Library/LibraryScreen";
import PlayerScreen from "./screens/Player/PlayerScreen";
import CommunityScreen from "./screens/Community/CommunityScreen";
import SettingScreen from "./screens/Setting/SettingScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/library" element={<LibraryScreen />} />
        <Route path="/player" element={<PlayerScreen />} />
        <Route path="/community" element={<CommunityScreen />} />
        <Route path="/setting" element={<SettingScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
