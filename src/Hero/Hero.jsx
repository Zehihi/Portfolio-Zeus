
function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-container hero-vertical">
                <div className="hero-right">
                    <div className="hero-avatar">
                        <img src="/src/assets/2x2 Zeus.jpeg" alt="Zeus Sulit" className="profile-img" />
                    </div>
                    <h2>Welcome to My Portfolio</h2>
                    <h2>I'm Zeus Sulit</h2>
                    <p className="hero-tagline">Frontend Developer | Web Designer</p>
                    <p> A passionate and faithful person not just about coding, but about creating meaningful experiences in life.</p>
                    <p className="hero-skill-highlight">Skilled in React, JavaScript, and UI/UX | Driven to build impactful digital products.</p>
                    <div className="hero-buttons">   
                        <a href="#projects" className="btn">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Contact me</a>      
                    </div>
                    <div className="hero-socials">
                        <a href="https://github.com/Zehihi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                        </a>
                        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
                        </a>
                        <a href="mailto:teredines40@gmail.com" aria-label="Email">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14h23.98v-14l-11.99 7.065zm11.99-9.065h-23.98l11.99 7.065 11.99-7.065z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;