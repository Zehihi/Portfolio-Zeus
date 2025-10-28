import React, { useState, useEffect } from "react";
import "./About.css";

function About() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalTitle, setModalTitle] = useState("");

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
              <li>C++</li>
              <li>⚛️ C#</li>
              <li>♨️ Java</li>
              <li>🐍 Python</li>
              <li>⚛️ React</li>
              <li>💻 HTML</li>
              <li>🎨 CSS</li>
              <li>🧠 JavaScript</li>
              <li>🌐 Git & GitHub</li>
            </ul>
          </div>

          <div className="certificates">
            <h3>Certificates & Achievements</h3>
            <ul className="cert-list">
              <li>
                <button
                  type="button"
                  className="cert-item"
                  onClick={() =>
                    openModal(
                      "/assets/images/Access.jpg",
                      "Responsive Web Design — FreeCodeCamp"
                    )
                  }
                >
                  Responsive Web Design — FreeCodeCamp
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="cert-item"
                  onClick={() =>
                    openModal(
                      "/assets/certs/js-algorithms.jpg",
                      "JavaScript Algorithms & Data Structures — FreeCodeCamp"
                    )
                  }
                >
                  JavaScript Algorithms & Data Structures — FreeCodeCamp
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="cert-item"
                  onClick={() =>
                    openModal(
                      "/assets/certs/frontend-bootcamp.jpg",
                      "Frontend Development Bootcamp — Local Course"
                    )
                  }
                >
                  Frontend Development Bootcamp — Local Course
                </button>
              </li>
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
