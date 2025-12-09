import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HeroEditor.css';

const HeroEditor = () => {
  const navigate = useNavigate();
  const [hero, setHero] = useState({
    title: 'Hi, I\'m Zeus Sulit',
    subtitle: 'A Passionate Front-End Developer',
    description: 'Crafting clean, responsive, and user-friendly websites',
    image: '/assets/images/hero-image.jpg'
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedHero = JSON.parse(localStorage.getItem('heroData')) || hero;
    setHero(savedHero);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHero(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHero(prev => ({
          ...prev,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem('heroData', JSON.stringify(hero));
    setMessage('Hero section saved successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="admin-container">
      <button className="btn-back" onClick={() => navigate('/admin')}>
        ← Back to Dashboard
      </button>
      <h1>Hero Section Editor</h1>

      <div className="editor-section">
        <h2>Edit Hero Content</h2>

        <div className="form-group">
          <label>Main Title</label>
          <input
            type="text"
            name="title"
            value={hero.title}
            onChange={handleChange}
            placeholder="Enter main title"
          />
        </div>

        <div className="form-group">
          <label>Subtitle</label>
          <input
            type="text"
            name="subtitle"
            value={hero.subtitle}
            onChange={handleChange}
            placeholder="Enter subtitle"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={hero.description}
            onChange={handleChange}
            placeholder="Enter description"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label>Hero Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {hero.image && (
            <div className="image-preview">
              <img src={hero.image} alt="Hero preview" />
            </div>
          )}
        </div>

        <button className="btn-save" onClick={handleSave}>
          💾 Save Hero Section
        </button>

        {message && <div className="success-message">{message}</div>}
      </div>
    </div>
  );
};

export default HeroEditor;
