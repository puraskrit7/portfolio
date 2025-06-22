import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content" data-aos="fade-up">
        <p className="available">AVAILABLE FOR FREELANCE</p>
        <h1>
          HEY, I'M PURASKRIT. <br /> A SENIOR FRONTEND DEVELOPER
        </h1>
        <div className="skills">
          <span>DESIGN</span> • <span>DEVELOPMENT</span> • <span>REACT</span>
        </div>
        <a href="#about" className="cta-btn">
          See My Portfolio <span>↓</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
