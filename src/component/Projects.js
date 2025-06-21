import './Projects.css';

const projects = [
  {
    title: 'Phishing Detector',
    desc: 'Detect phishing URLs using ONNX + React.',
    link: 'https://github.com/puraskrit7/phishing-detector',
  },
  {
    title: 'Chat Help',
    desc: 'AI chat using Google Gemini API.',
    link: 'https://github.com/puraskrit7/chat-help',
  },
  {
    title: 'Star-Flix',
    desc: 'Star Wars Explorer built with SWAPI.',
    link: 'https://github.com/puraskrit7/starflix',
  },
];

function Projects() {
  return (
    
    <section className="projects" id="projects">
      <div className="container">
        <h2>My Work</h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="projects-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
