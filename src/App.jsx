import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CalibrationBlocks from './pages/CalibrationBlocks';
import ProductCatalogue from './pages/ProductCatalogue';
import Company from './pages/Company';
import Career from './pages/Career';
import Service from './pages/Service';
import Downloads from './pages/Downloads';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Imprint from './pages/Imprint';
import GTC from './pages/GTC';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';
import FlawedSpecimens from "./pages/FlawedSpecimens";

// Protected Route Component
function ProtectedRoute({ children }) {
  const token = localStorage.getItem('adminToken');

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/flawed-specimens" element={<FlawedSpecimens />} />
          <Route path="/CalibrationBlocks" element={<CalibrationBlocks />} />
          <Route path="/product-catalogue" element={<ProductCatalogue />} />
          <Route path="/company" element={<Company />} />
          <Route path="/career" element={<Career />} />
          <Route path="/service" element={<Service />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/gtc" element={<GTC />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
