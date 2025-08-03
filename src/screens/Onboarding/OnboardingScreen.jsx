import React, { useState, useEffect } from "react";

import "./OnboardingScreen.css";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from '../../firebaseConfig'; // Import auth and provider from firebaseConfig
import { useNavigate } from 'react-router-dom';
import { useAuthState as useAuthStateHook } from 'react-firebase-hooks/auth';
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

const OnboardingScreen = ({ onContinue }) => {
  const navigate = useNavigate();
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
    console.log('handleLogin function called');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');
      // If login is successful, call onContinue
      navigate('/home');
    } catch (error) {
      console.error("Error during login:", error);
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

  const [user] = useAuthStateHook(auth);

  useEffect(() => {
    const loginButton = document.querySelector('.continue-btn');
    if (loginButton) {
      const handleButtonClick = () => {
        console.log('Login button clicked via event listener');
      };
      loginButton.addEventListener('click', handleButtonClick);

      return () => {
        loginButton.removeEventListener('click', handleButtonClick);
      };
    }
  }, [isRegistering]); // Re-run effect when isRegistering changes to find the correct button


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
 id="email"
 name="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
 id="password"
 name="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
 id="confirmPassword"
 name="confirmPassword"
              className="input"
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            <button className="continue-btn\" onClick={handleRegister}>REGISTER →</button>
          </>
        ) : (
          <>
            <input
              type="email"
              placeholder="Email"
 id="email"
 name="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
 id="password"
 name="password"
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
