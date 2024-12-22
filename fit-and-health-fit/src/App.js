import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUpPage from './components/SignUpPage';
import Choices from './components/Choices';
import SignInForm from './components/SignInForm';
import LifestyleForm from './components/LifestyleForm';
import Dashboard from './components/Dashboard';
import FitnessPage from './components/FitnessPage';  // Ajoute ce fichier
import SkincarePage from './components/SkincarePage';  // Ajoute ce fichier
import NutritionPage from './components/NutritionPage';


function App() {
  return (
    <Router>
      <Routes>
        {/* Redirection de la route principale vers /signup */}
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/choices/:id" element={<Choices />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/lifestyle" element={<LifestyleForm />} />
        <Route path="/lifestyle/:id" element={<LifestyleForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fitness/:id" element={<FitnessPage/>} />
        <Route path="/skincare/:id" element={<SkincarePage/>} />
        <Route path="/nutrition/:id" element={<NutritionPage/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
