import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulated authentication function (Replace this with actual auth logic)
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null; // Checks if user is logged in
};

export default function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}
