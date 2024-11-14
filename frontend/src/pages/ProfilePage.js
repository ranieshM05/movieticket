// src/pages/ProfilePage.js
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const ProfilePage = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <h1>Profile Page</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please log in.</h2>
          <button onClick={() => login({ name: 'User' })}>Login</button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
