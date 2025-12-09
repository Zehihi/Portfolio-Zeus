import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { storage } from '../utils/storage';
import '../styles/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '',
    imageUrl: '',
    githubLink: '',
    demoLink: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    setProjects(storage.getProjects());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.title.trim() || !formData.description.trim()) {
      setError('Title and description are required');
      return;
    }

    if (editingId) {
      storage.updateProject(editingId, formData);
    } else {
      storage.addProject(formData);
    }

    setFormData({
      title: '',
      description: '',
      techStack: '',
      imageUrl: '',
      githubLink: '',
      demoLink: ''
    });
    setEditingId(null);
    setShowForm(false);
    loadProjects();
  };

  const handleEdit = (project) => {
    setFormData(project);
    setEditingId(project.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      storage.deleteProject(id);
      loadProjects();
    }
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      description: '',
      techStack: '',
      imageUrl: '',
      githubLink: '',
      demoLink: ''
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
            <h1>Project Manager</h1>
            <button 
              className="add-btn" 
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? '✕ Cancel' : '+ Add New Project'}
            </button>
          </div>

          {showForm && (
            <div className="form-container">
              <h2>{editingId ? 'Edit Project' : 'Add New Project'}</h2>
              <form onSubmit={handleSubmit} className="project-form">
                <div className="form-group">
                  <label>Project Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., E-Commerce Platform"
                  />
                </div>

                <div className="form-group">
                  <label>Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your project..."
                    rows="4"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Tech Stack</label>
                    <input
                      type="text"
                      name="techStack"
                      value={formData.techStack}
                      onChange={handleInputChange}
                      placeholder="e.g., React, Node.js, MongoDB"
                    />
                  </div>

                  <div className="form-group">
                    <label>Image URL</label>
                    <input
                      type="url"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleInputChange}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>GitHub Link</label>
                    <input
                      type="url"
                      name="githubLink"
                      value={formData.githubLink}
                      onChange={handleInputChange}
                      placeholder="https://github.com/username/repo"
                    />
                  </div>

                  <div className="form-group">
                    <label>Live Demo Link</label>
                    <input
                      type="url"
                      name="demoLink"
                      value={formData.demoLink}
                      onChange={handleInputChange}
                      placeholder="https://demo.example.com"
                    />
                  </div>
                </div>

                {error && <div className="error-message">{error}</div>}

                <div className="form-actions">
                  <button type="submit" className="submit-btn">
                    {editingId ? 'Update Project' : 'Create Project'}
                  </button>
                  <button type="button" className="cancel-btn" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="projects-list">
            {projects.length === 0 ? (
              <div className="empty-state">
                <p>No projects yet. Create your first project!</p>
              </div>
            ) : (
              <div className="projects-grid">
                {projects.map(project => (
                  <div key={project.id} className="project-card">
                    {project.imageUrl && (
                      <img src={project.imageUrl} alt={project.title} className="project-image" />
                    )}
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p className="description">{project.description}</p>
                      {project.techStack && (
                        <div className="tech-stack">
                          <span className="label">Tech:</span>
                          <span>{project.techStack}</span>
                        </div>
                      )}
                      <div className="project-links">
                        {project.githubLink && (
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            GitHub
                          </a>
                        )}
                        {project.demoLink && (
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="project-actions">
                      <button className="edit-btn" onClick={() => handleEdit(project)}>
                        ✏️ Edit
                      </button>
                      <button className="delete-btn" onClick={() => handleDelete(project.id)}>
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
