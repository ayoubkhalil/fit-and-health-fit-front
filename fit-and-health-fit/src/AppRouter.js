import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import LifestyleForm from "./components/LifestyleForm";
import SignUpPage from "./components/SignUpPage"; // Importez votre composant SignUpPage

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lifestyle" element={<LifestyleForm />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* Nouvelle route */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
