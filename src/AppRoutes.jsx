import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from './firebaseConfig';
import OnboardingScreen from './screens/Onboarding/OnboardingScreen';
import HomeScreen from './screens/Home/HomeScreen';
import LibraryScreen from './screens/Library/LibraryScreen';
import CommunityScreen from './screens/Community/CommunityScreen';
import SettingScreen from './screens/Setting/SettingScreen';
import PlayerScreen from './screens/Player/PlayerScreen';

const AppRoutes = () => {
  const [user] = useAuthState(auth);

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/home" replace /> : <OnboardingScreen />}
      />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/library" element={<LibraryScreen />} />
      <Route path="/community" element={<CommunityScreen />} />
      <Route path="/setting" element={<SettingScreen />} />
      <Route path="/player" element={<PlayerScreen />} />
      {/* Add other routes here */}
    </Routes>
  );
};

export default AppRoutes;