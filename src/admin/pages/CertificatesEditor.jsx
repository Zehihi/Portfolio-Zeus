import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CertificatesEditor.css';

const CertificatesEditor = () => {
  const navigate = useNavigate();
  const [certificates, setCertificates] = useState([]);
  const [newCert, setNewCert] = useState({
    title: '',
    image: '',
    id: Date.now()
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedCerts = JSON.parse(localStorage.getItem('certificatesData')) || [
      {
        id: 1,
        title: 'Responsive Web Design — FreeCodeCamp',
        image: '/assets/images/Access.jpg'
      },
      {
        id: 2,
        title: 'JavaScript Algorithms & Data Structures — FreeCodeCamp',
        image: '/assets/certs/js-algorithms.jpg'
      },
      {
        id: 3,
        title: 'Frontend Development Bootcamp — Local Course',
        image: '/assets/certs/frontend-bootcamp.jpg'
      }
    ];
    setCertificates(savedCerts);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCert(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCert(prev => ({
          ...prev,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addCertificate = () => {
    if (newCert.title.trim() && newCert.image) {
      setCertificates(prev => [...prev, { ...newCert, id: Date.now() }]);
      setNewCert({ title: '', image: '', id: Date.now() });
      setMessage('Certificate added!');
      setTimeout(() => setMessage(''), 2000);
    }
  };

  const removeCertificate = (id) => {
    setCertificates(prev => prev.filter(cert => cert.id !== id));
    setMessage('Certificate removed!');
    setTimeout(() => setMessage(''), 2000);
  };

  const handleSave = () => {
    localStorage.setItem('certificatesData', JSON.stringify(certificates));
    setMessage('Certificates saved successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="admin-container">
      <button className="btn-back" onClick={() => navigate('/admin')}>
        ← Back to Dashboard
      </button>
      <h1>Certificates & Achievements Editor</h1>

      <div className="editor-section">
        <h2>Add New Certificate</h2>

        <div className="form-group">
          <label>Certificate Title</label>
          <input
            type="text"
            name="title"
            value={newCert.title}
            onChange={handleInputChange}
            placeholder="Enter certificate title"
          />
        </div>

        <div className="form-group">
          <label>Certificate Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {newCert.image && (
            <div className="image-preview">
              <img src={newCert.image} alt="Certificate preview" />
            </div>
          )}
        </div>

        <button className="btn-add" onClick={addCertificate}>
          ➕ Add Certificate
        </button>
      </div>

      <div className="editor-section">
        <h2>Current Certificates</h2>

        <div className="certificates-list">
          {certificates.map(cert => (
            <div key={cert.id} className="certificate-card">
              <div className="cert-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <button
                  className="btn-delete"
                  onClick={() => removeCertificate(cert.id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="btn-save" onClick={handleSave}>
        💾 Save Certificates
      </button>

      {message && <div className="success-message">{message}</div>}
    </div>
  );
};

export default CertificatesEditor;
