import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AboutEditor.css';

const AboutEditor = () => {
  const navigate = useNavigate();
  const [about, setAbout] = useState({
    bio: 'Hello! I\'m Zeus Sulit, an aspiring front-end developer passionate about crafting clean, responsive, and user-friendly websites.',
    extra1: 'I\'m currently learning more about ReactJS and web development best practices.',
    extra2: 'Beyond coding, I enjoy listening to music, watching films, walking, and exercising.',
    techStack: []
  });
  const [newTech, setNewTech] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedAbout = JSON.parse(localStorage.getItem('aboutData')) || {
      ...about,
      techStack: ['C++', '⚛️ C#', '♨️ Java', '🐍 Python', '⚛️ React', '💻 HTML', '🎨 CSS', '🧠 JavaScript', '🌐 Git & GitHub']
    };
    setAbout(savedAbout);
  }, []);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setAbout(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addTech = () => {
    if (newTech.trim()) {
      setAbout(prev => ({
        ...prev,
        techStack: [...prev.techStack, newTech]
      }));
      setNewTech('');
    }
  };

  const removeTech = (index) => {
    setAbout(prev => ({
      ...prev,
      techStack: prev.techStack.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    localStorage.setItem('aboutData', JSON.stringify(about));
    setMessage('About section saved successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="admin-container">
      <button className="btn-back" onClick={() => navigate('/admin')}>
        ← Back to Dashboard
      </button>
      <h1>About & Tech Stack Editor</h1>

      <div className="editor-section">
        <h2>Edit About Me Content</h2>

        <div className="form-group">
          <label>Bio</label>
          <textarea
            name="bio"
            value={about.bio}
            onChange={handleTextChange}
            placeholder="Enter bio text"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label>Additional Info 1</label>
          <textarea
            name="extra1"
            value={about.extra1}
            onChange={handleTextChange}
            placeholder="Enter additional information"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label>Additional Info 2</label>
          <textarea
            name="extra2"
            value={about.extra2}
            onChange={handleTextChange}
            placeholder="Enter additional information"
            rows="3"
          />
        </div>
      </div>

      <div className="editor-section">
        <h2>Tech Stack Management</h2>

        <div className="tech-input-group">
          <input
            type="text"
            value={newTech}
            onChange={(e) => setNewTech(e.target.value)}
            placeholder="Enter tech (e.g., ⚛️ React)"
            onKeyPress={(e) => e.key === 'Enter' && addTech()}
          />
          <button className="btn-add" onClick={addTech}>➕ Add Tech</button>
        </div>

        <div className="tech-list">
          {about.techStack.map((tech, index) => (
            <div key={index} className="tech-item">
              <span>{tech}</span>
              <button className="btn-remove" onClick={() => removeTech(index)}>✕</button>
            </div>
          ))}
        </div>
      </div>

      <button className="btn-save" onClick={handleSave}>
        💾 Save About Section
      </button>

      {message && <div className="success-message">{message}</div>}
    </div>
  );
};

export default AboutEditor;
