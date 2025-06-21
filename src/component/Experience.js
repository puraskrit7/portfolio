import './Experience.css';

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container" data-aos="fade-up">
        <h2>Experience</h2>

        <div className="job-block">
          <div className="job-header">
            <h3>Front-End Development Senior Analyst</h3>
            <span>Accenture · Gurugram, India</span>
            <span className="job-date">Feb 2021 – Present</span>
          </div>

          <ul className="job-details">
            <li>Improved page load speed by 35% using lazy loading & code splitting.</li>
            <li>Led scalable front-end architecture across distributed teams.</li>
            <li>Implemented geolocation APIs & custom security, reducing vulnerabilities by 40%.</li>
            <li>Automated CI/CD pipelines using Jenkins, cutting release cycles by 50%.</li>
            <li>Mentored junior developers and delivered 15+ Agile features.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
