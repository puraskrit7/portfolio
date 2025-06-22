import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">
      <div className="hero-content">
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
