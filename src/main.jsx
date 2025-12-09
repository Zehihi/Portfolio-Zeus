import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login from './admin/pages/Login.jsx'
import Dashboard from './admin/pages/Dashboard.jsx'
import Projects from './admin/pages/Projects.jsx'
import Skills from './admin/pages/Skills.jsx'
import Messages from './admin/pages/Messages.jsx'
import ProtectedRoute from './admin/components/ProtectedRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/admin/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
        <Route path="/admin/skills" element={<ProtectedRoute><Skills /></ProtectedRoute>} />
        <Route path="/admin/messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
      </Routes>
    </Router>
  </StrictMode>
)
