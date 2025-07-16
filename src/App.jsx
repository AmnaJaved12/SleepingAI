// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnboardingScreen from "./screens/Onboarding/OnboardingScreen";
import HomeScreen from "./screens/Home/HomeScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
