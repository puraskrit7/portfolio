import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container" data-aos="fade-up">
        {/* Heading */}
        <h2>About Me</h2>
        <p>
          I'm Puraskrit, a Front-End Developer with 4.5+ years of experience building performant, scalable UIs using ReactJS and TypeScript.
          I focus on clean code, web performance, accessibility, and team collaboration within agile environments.
        </p>

        {/* Experience */}
        <div className="block">
          <h3>Work Experience</h3>
          <div className="job-card">
            <h4>Front-End Development Senior Analyst</h4>
            <span className="company">Accenture · Gurugram, India</span>
            <span className="job-date">Feb 2021 – Present</span>
            <ul>
              <li>Improved load time by 35% with code splitting & lazy loading.</li>
              <li>Led React architecture & cross-team collaboration.</li>
              <li>Reduced vulnerabilities by 40% through geolocation & security enhancements.</li>
              <li>Automated CI/CD pipelines using Jenkins, cutting release cycle time by 50%.</li>
              <li>Mentored junior devs and delivered 15+ Agile sprint features.</li>
            </ul>
          </div>
        </div>

        {/* Project Experience */}
        <div className="block">
          <h3>Project Experience</h3>
          <div className="project-grid">
            {[
              {
                title: 'Dealer Agent Application',
                details: [
                  'Led 12-member frontend team across modules.',
                  'Developed Kanban board UI for request flows.',
                  'Streamlined release lifecycle for ~98% uptime.',
                ]
              },
              {
                title: 'E-commerce Platform',
                details: [
                  'Boosted performance 25% with AEM optimization.',
                  'Built product pages, gold trading module, login/registration flow.',
                  'Integrated GraphQL for product and order data.',
                ]
              },
              {
                title: 'B2B Telecom App',
                details: [
                  'Built reusable components in React.',
                  'Integrated Salesforce APIs for customer data sync.',
                  'Maintained 95% unit test coverage with Jest.',
                ]
              },
            ].map((proj, i) => (
              <div className="project-card" key={i}>
                <h4>{proj.title}</h4>
                <ul>
                  {proj.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="block">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {[
              {
                title: 'Languages',
                items: ['JavaScript (ES6+)', 'TypeScript']
              },
              {
                title: 'Frameworks & UI',
                items: [
                  'ReactJs', 'Redux', 'Hooks', 'Context API', 'React Router',
                  'HTML5', 'CSS3', 'SCSS', 'Tailwind', 'Styled Components',
                  'Material UI', 'Bootstrap', 'SLDS'
                ]
              },
              {
                title: 'Build & Tooling',
                items: ['Webpack', 'Vite', 'Git', 'Jenkins', 'AEM']
              },
              {
                title: 'Testing & APIs',
                items: ['Jest', 'Unit Testing', 'TDD', 'RESTful APIs', 'GraphQL', 'Axios', 'Postman', 'Salesforce APIs']
              },
              {
                title: 'Platforms & Design',
                items: ['Figma', 'VS Code', 'Adobe Experience Manager']
              },
              {
                title: 'Project & QA Tools',
                items: ['Jira', 'Confluence', 'SonarQube', 'ADB', 'MS Office']
              },
              {
                title: 'Best Practices',
                items: ['Web Performance', 'Accessibility (WCAG)', 'SEO', 'Agile', 'Scrum', 'CI/CD']
              }
            ].map((group, idx) => (
              <div className="skill-group" key={idx}>
                <h4>{group.title}</h4>
                <div className="chip-group">
                  {group.items.map((skill, sIdx) => (
                    <span className="chip" key={sIdx}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
