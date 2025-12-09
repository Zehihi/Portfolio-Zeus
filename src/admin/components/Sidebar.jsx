    import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <nav className="admin-navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>⚡ Admin Panel</h2>
          <p className="navbar-subtitle">Portfolio Zeus</p>
        </div>

        <div className="navbar-nav">
          <NavLink 
            to="/admin" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            end
          >
            <span className="nav-icon">📊</span>
            <span className="nav-text">Dashboard</span>
          </NavLink>
          <NavLink 
            to="/admin/hero" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <span className="nav-icon">🦸</span>
            <span className="nav-text">Hero</span>
          </NavLink>
          <NavLink 
            to="/admin/about" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <span className="nav-icon">👤</span>
            <span className="nav-text">About</span>
          </NavLink>
          <NavLink 
            to="/admin/certificates" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <span className="nav-icon">🏆</span>
            <span className="nav-text">Certs</span>
          </NavLink>
          <NavLink 
            to="/admin/projects" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <span className="nav-icon">💼</span>
            <span className="nav-text">Projects</span>
          </NavLink>
          <NavLink 
            to="/admin/skills" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <span className="nav-icon">⚡</span>
            <span className="nav-text">Skills</span>
          </NavLink>
          <NavLink 
            to="/admin/messages" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <span className="nav-icon">💬</span>
            <span className="nav-text">Messages</span>
          </NavLink>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
