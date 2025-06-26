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
  {
    title: 'Estate Agency',
    desc: 'Get property details on your finger tip with the help of agents',
    link: 'https://github.com/puraskrit7/Estate_Agency',
  },
  {
    title: 'Chat Application',
    desc: 'Connect one to one and chat with each other',
    link: 'https://github.com/puraskrit7/Chat_Application'
  },
  {
    title: 'Pizzeria',
    desc: 'Buy Pizza online, you can add your favourite toppings too',
    link: 'https://github.com/puraskrit7/React_Pizzeria'
  },
  {
    title: 'Demo Project-(save details in excel file)',
    desc: 'Demo Project for storing data locally on your excel file',
    link: 'https://github.com/puraskrit7/Excel-data-fetch-with-React-main'
  }
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
