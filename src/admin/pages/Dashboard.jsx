import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import { storage } from '../utils/storage';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalMessages: 0,
    draftPosts: 0,
    totalVisitors: 0
  });

  useEffect(() => {
    // Load statistics
    const projects = storage.getProjects();
    const messages = storage.getMessages();
    const posts = storage.getPosts();
    const visitors = storage.getTotalVisitors();

    const draftCount = posts.filter(p => p.status === 'draft').length;

    setStats({
      totalProjects: projects.length,
      totalMessages: messages.length,
      draftPosts: draftCount,
      totalVisitors: visitors
    });
  }, []);

  return (
    <div className="admin-layout">
      <Sidebar />
      
      <div className="admin-main">
        <div className="admin-container">
          <div className="admin-header">
            <h1>Dashboard</h1>
            <p>Welcome to your Portfolio Zeus Admin Panel</p>
          </div>

          <div className="stats-grid">
            <StatCard 
              icon="💼"
              title="Total Projects"
              value={stats.totalProjects}
              color="blue"
            />
            <StatCard 
              icon="💬"
              title="Messages Received"
              value={stats.totalMessages}
              color="green"
            />
            <StatCard 
              icon="📝"
              title="Draft Posts"
              value={stats.draftPosts}
              color="orange"
            />
            <StatCard 
              icon="👥"
              title="Total Visitors"
              value={stats.totalVisitors}
              color="purple"
            />
          </div>

          <div className="dashboard-sections">
            <div className="section-card">
              <h2>📊 Quick Stats</h2>
              <div className="quick-stats">
                <div className="stat-item">
                  <span className="stat-label">Portfolio Health:</span>
                  <span className="stat-badge">Good</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Last Updated:</span>
                  <span className="stat-badge">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Total Skills:</span>
                  <span className="stat-badge">{storage.getSkills().length}</span>
                </div>
              </div>
            </div>

            <div className="section-card">
              <h2>🎯 Quick Actions</h2>
              <p>Use the sidebar navigation to manage your portfolio content.</p>
              <ul className="quick-actions">
                <li>✅ Add new projects to showcase your work</li>
                <li>⚡ Update your skills and proficiency levels</li>
                <li>💬 Review messages from visitors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
