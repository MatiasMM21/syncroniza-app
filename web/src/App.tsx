import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Projects from './Pages/Projects/Projects';
import Layout from './Components/Layout/Layout';
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
