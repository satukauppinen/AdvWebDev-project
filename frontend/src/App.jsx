import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
//import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Admin route */}
        <Route path="/admin" element={<AdminPage />} />

        {/* Admin route */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        
      </Routes>
    </Router>
  );
}

export default App;
