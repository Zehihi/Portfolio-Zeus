import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { storage } from '../utils/storage';
import '../styles/Skills.css';

const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    proficiency: 50
  });
  const [error, setError] = useState('');

  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = () => {
    setSkills(storage.getSkills());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'proficiency' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('Skill name is required');
      return;
    }

    if (formData.proficiency < 0 || formData.proficiency > 100) {
      setError('Proficiency must be between 0 and 100');
      return;
    }

    if (editingId) {
      storage.updateSkill(editingId, formData);
    } else {
      storage.addSkill(formData);
    }

    setFormData({
      name: '',
      proficiency: 50
    });
    setEditingId(null);
    setShowForm(false);
    loadSkills();
  };

  const handleEdit = (skill) => {
    setFormData({
      name: skill.name,
      proficiency: skill.proficiency
    });
    setEditingId(skill.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      storage.deleteSkill(id);
      loadSkills();
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      proficiency: 50
    });
    setEditingId(null);
    setShowForm(false);
    setError('');
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      
      <div className="admin-main">
        <div className="admin-container">
          <div className="admin-header">
            <h1>Skills Manager</h1>
            <button 
              className="add-btn" 
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? '✕ Cancel' : '+ Add Skill'}
            </button>
          </div>

          {showForm && (
            <div className="form-container">
              <h2>{editingId ? 'Edit Skill' : 'Add New Skill'}</h2>
              <form onSubmit={handleSubmit} className="skill-form">
                <div className="form-group">
                  <label>Skill Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., React, JavaScript, Python"
                  />
                </div>

                <div className="form-group">
                  <label>Proficiency Level: {formData.proficiency}%</label>
                  <input
                    type="range"
                    name="proficiency"
                    min="0"
                    max="100"
                    value={formData.proficiency}
                    onChange={handleInputChange}
                    className="proficiency-slider"
                  />
                  <div className="slider-labels">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Expert</span>
                  </div>
                </div>

                {error && <div className="error-message">{error}</div>}

                <div className="form-actions">
                  <button type="submit" className="submit-btn">
                    {editingId ? 'Update Skill' : 'Add Skill'}
                  </button>
                  <button type="button" className="cancel-btn" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="skills-list">
            {skills.length === 0 ? (
              <div className="empty-state">
                <p>No skills added yet. Add your first skill!</p>
              </div>
            ) : (
              <div className="skills-container">
                {skills.map(skill => (
                  <div key={skill.id} className="skill-item">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                    <div className="skill-info">
                      <span className="proficiency">{skill.proficiency}%</span>
                      <div className="skill-actions">
                        <button 
                          className="edit-btn" 
                          onClick={() => handleEdit(skill)}
                          title="Edit skill"
                        >
                          ✏️
                        </button>
                        <button 
                          className="delete-btn" 
                          onClick={() => handleDelete(skill.id)}
                          title="Delete skill"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="skills-preview">
            <h2>Preview on Portfolio</h2>
            <p>Your skills will appear in the About section with dynamic proficiency bars.</p>
            <div className="preview-grid">
              {skills.slice(0, 6).map(skill => (
                <div key={skill.id} className="preview-skill">
                  <div className="preview-name">{skill.name}</div>
                  <div className="preview-bar">
                    <div 
                      className="preview-fill" 
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
