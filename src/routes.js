// src/routes.js - React Router Configuration
import React from "react";
import {Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";
import Register from './pages/Register';
import Students from './pages/Students';
import StudentDetails from './pages/StudentDetails';
import PrivateRoute from "./components/PrivateRoute";


export default function AppRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />  {/* Redirect to Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/students" element={<PrivateRoute><Students /></PrivateRoute>} />
        <Route path="/students/:id" element={<PrivateRoute><StudentDetails /></PrivateRoute>} /> 
      </Routes>
    
  );
}