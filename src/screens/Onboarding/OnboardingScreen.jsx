// src/screens/Onboarding/OnboardingScreen.jsx

import React, { useState } from "react";
import "./OnboardingScreen.css";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";

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

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const OnboardingScreen = ({ onContinue }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isRegistering, setIsRegistering] = useState(false);
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

  const toggleRegistering = () => {
    setIsRegistering(!isRegistering);
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // If login is successful, call onContinue
      onContinue();
    } catch (error) {
      console.error("Error during login:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Registration successful, call onContinue
      onContinue();
      // Optionally, you might want to update the user's profile with the username here
      // For example: await updateProfile(auth.currentUser, { displayName: username });
    } catch (error) {
      console.error("Error during registration:", error.message);
      alert("Registration failed: " + error.message);
    }
  };

  const [user] = useAuthState(auth);

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
        {user ? (
          <>
            <h3>Welcome, {user.email}</h3>
            <button className="google-btn" onClick={() => signOut(auth)}>Sign Out</button>
          </>
        ) : (
          <>
            <h3>Continue to your Account.</h3>
            <button className="google-btn" onClick={async () => {
 try {
 await signInWithPopup(auth, provider);
 } catch (error) {
 if (error.code === 'auth/popup-closed-by-user') {
 alert('Google login was cancelled.');
 } else {
 console.error(error);
 }
 }
            }}>Log in with Google</button>
          </>
        )}
        <hr className="divider" />
        {isRegistering ? (
          <>
            <input
              type="text"
              placeholder="Username"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input"
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            <button className="continue-btn\" onClick={handleRegister}>REGISTER →</button>
          </>
        ) : (
          <>
            <input
              type="email"
              placeholder="Email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="continue-btn" onClick={handleLogin}>LOGIN &rarr;</button>
          </>
        )}
 <button className="register-btn" onClick={toggleRegistering}>{isRegistering ? 'BACK TO LOGIN' : 'REGISTER &rarr;'}</button>
        <p className="signup-note">
          {isRegistering ? 'Already have an account?' : 'Are you a Newbie?'} <strong>GET STARTED - IT'S FREE</strong>
        </p>
      </div>
    </div>
  );
};

export default OnboardingScreen;
