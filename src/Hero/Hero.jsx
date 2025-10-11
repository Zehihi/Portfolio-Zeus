function Hero() {
    return (
        <section id="hero" className="hero">
            <div>
                <h2>Welcome to My Portfolio</h2> 
                <h2>I'm Zeus Sulit</h2>
                <p> A passionate and faithful person not just about coding, but about creating meaningful experiences in life.</p>
                <div className="hero-buttons">   
                <a href="#projects" className="btn">View My Work</a>
                <a href="contact" className="btn btn-outline"> Contact me</a>      
                </div>        
            </div>
        </section>
    );
}

export default Hero;