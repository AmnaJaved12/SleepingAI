// src/screens/Onboarding/OnboardingScreen.jsx

import React, { useState } from "react";
import "./OnboardingScreen.css"; // We’ll create this CSS file next

const onboardingSlides = [
  {
    id: 1,
    image: "/assets/images/moon_bunny.png",
  },
  {
    id: 2,
    image: "/assets/images/chat_phone.png",
  },
  {
    id: 3,
    image: "/assets/images/fingerprint_face.png",
  },
];

const OnboardingScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? onboardingSlides.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === onboardingSlides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-left">
        <div className="image-wrapper">
          <img
            src={onboardingSlides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            className="onboarding-image"
          />
          <div className="nav-buttons">
            <button onClick={handlePrev} className="nav-btn">←</button>
            <button onClick={handleNext} className="nav-btn">→</button>
          </div>
        </div>
      </div>

      <div className="onboarding-right">
        <h2>Sleeping AI</h2>
        <h3>Continue to your Account.</h3>
        <button className="google-btn">Log in with Google</button>
        <hr className="divider" />
        <input type="email" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <button className="continue-btn">CONTINUE →</button>
        <p className="signup-note">
          Are you a Newbie? <strong>GET STARTED - IT'S FREE</strong>
        </p>
      </div>
    </div>
  );
};

export default OnboardingScreen;
