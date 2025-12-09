import React from "react";
import "./Hero.css"; 
import profilePic from "../assets/images/2x2 Zeus.jpeg";
import StormButton from "../components/StormButton";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-avatar">
            <img src={profilePic} alt="Profile" className="profile-img" />
          </div>
        </div>

        <div className="hero-right">
          <h2>Welcome to My Portfolio</h2>
          <p>
            I’m Zeus Sulit, a seeker of purpose and progress, taking the course of BS in Information Technology.
            My favorite word is faith, the fire that keeps me moving forward.
            Like a shark, I never stop; motion is my life, growth is my nature.
            Give me what is needed, and I’ll get it done with heart, code, and conviction.
          </p>

          <div className="hero-buttons">
            <StormButton href="#projects">View Projects</StormButton>
            <StormButton href="#contact" className="btn-outline">Contact Me</StormButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
