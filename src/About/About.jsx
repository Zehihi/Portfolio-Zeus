import React, { useState, useEffect } from "react";
import "./About.css";

function About() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [about, setAbout] = useState({
    bio: 'Hello! I\'m Zeus Sulit, an aspiring front-end developer passionate about crafting clean, responsive, and user-friendly websites.',
    extra1: 'I\'m currently learning more about ReactJS and web development best practices.',
    extra2: 'Beyond coding, I enjoy listening to music, watching films, walking, and exercising.',
    techStack: ['C++', '⚛️ C#', '♨️ Java', '🐍 Python', '⚛️ React', '💻 HTML', '🎨 CSS', '🧠 JavaScript', '🌐 Git & GitHub']
  });
  const [certificates, setCertificates] = useState([
    { id: 1, title: 'Responsive Web Design — FreeCodeCamp', image: '/assets/images/Access.jpg' },
    { id: 2, title: 'JavaScript Algorithms & Data Structures — FreeCodeCamp', image: '/assets/certs/js-algorithms.jpg' },
    { id: 3, title: 'Frontend Development Bootcamp — Local Course', image: '/assets/certs/frontend-bootcamp.jpg' }
  ]);

  useEffect(() => {
    const savedAbout = localStorage.getItem('aboutData');
    if (savedAbout) {
      setAbout(JSON.parse(savedAbout));
    }
    const savedCerts = localStorage.getItem('certificatesData');
    if (savedCerts) {
      setCertificates(JSON.parse(savedCerts));
    }
  }, []);

  function openModal(src, title) {
    setModalSrc(src);
    setModalTitle(title);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setModalSrc("");
    setModalTitle("");
  }

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  return (
    <section id="about" className="about-section">
      <div className="about-container">       
        <div className="about-content">
          <h2>About Me</h2>
          <p>
              Hello! I’m <span className="highlight">Zeus Sulit</span>, an aspiring front-end developer passionate about crafting clean, responsive, and user-friendly websites. 
              I enjoy turning creative ideas into interactive digital experiences that make an impact.
            </p>

            <p className="about-extra">
              I’m currently learning more about <span className="highlight">ReactJS</span> and web development best practices, 
              aiming to grow into a skilled front-end engineer. 
              I love creating meaningful user experiences and exploring new web technologies.
            </p>

            <p className="about-extra">
              Beyond coding, I enjoy <span className="highlight">listening to music</span>, <span className="highlight">watching films</span>, <span className="highlight">walking</span>, and <span className="highlight">exercising</span>. 
              I also love experiencing people and life. As an <span className="highlight">extrovert</span>, I enjoy <span className="highlight">teaming up with others</span> and bringing positive energy to every collaboration.
            </p>


          <div className="skills">
            <h3>Tech Stack</h3>
            <ul className="skills-list">
              {about.techStack.map((tech, index) => (
                <li key={index}><button className="skill-btn">{tech}</button></li>
              ))}
            </ul>
          </div>

          <div className="certificates">
            <h3>Certificates & Achievements</h3>
            <ul className="cert-list">
              {certificates.map(cert => (
                <li key={cert.id}>
                  <button
                    type="button"
                    className="cert-item"
                    onClick={() =>
                      openModal(
                        cert.image,
                        cert.title
                      )
                    }
                  >
                    {cert.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <a href="/assets/files/Zeus-Sulit-Resume.pdf" download className="resume-btn">
            📄 Download Resume
          </a>

          <p className="fun-fact">
            Fun fact: I love exploring UI design trends and continuously improving my code style.
          </p>

          {modalOpen && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
                <img src={modalSrc} alt={modalTitle} className="modal-img" />
                <div className="modal-caption">{modalTitle}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
