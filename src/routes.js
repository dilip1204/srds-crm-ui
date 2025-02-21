// src/routes.js - React Router Configuration
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Students from './pages/Students';
import StudentDetails from './pages/StudentDetails';
import PrivateRoute from './components/PrivateRoute';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/students' element={<PrivateRoute><Students /></PrivateRoute>} />
        <Route path='/students/:id' element={<PrivateRoute><StudentDetails /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}
