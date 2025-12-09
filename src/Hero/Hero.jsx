import React, { useState, useEffect } from "react";
import "./Hero.css"; 
import profilePic from "../assets/images/2x2 Zeus.jpeg";
import StormButton from "../components/StormButton";

function Hero() {
  const [hero, setHero] = useState({
    title: 'Hi, I\'m Zeus Sulit',
    subtitle: 'A Passionate Front-End Developer',
    description: 'I\'m Zeus Sulit, a seeker of purpose and progress, taking the course of BS in Information Technology. My favorite word is faith, the fire that keeps me moving forward.',
    image: profilePic
  });

  useEffect(() => {
    const savedHero = localStorage.getItem('heroData');
    if (savedHero) {
      setHero(JSON.parse(savedHero));
    }
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-avatar">
            <img src={hero.image || profilePic} alt="Profile" className="profile-img" />
          </div>
        </div>

        <div className="hero-right">
          <h2>{hero.title}</h2>
          <p>
            {hero.description}
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
