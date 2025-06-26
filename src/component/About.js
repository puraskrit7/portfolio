import "./About.css";

const experience = {
  role: "Front-End Development Senior Analyst",
  company: "Accenture · Gurugram, India",
  date: "Feb 2021 – Present",
  responsibilities: [
    "Improved load time by 35% with code splitting & lazy loading.",
    "Led React architecture & cross-team collaboration.",
    "Reduced vulnerabilities by 40% through geolocation & security enhancements.",
    "Automated CI/CD pipelines using Jenkins, cutting release cycle time by 50%.",
    "Mentored junior devs and delivered 15+ Agile sprint features.",
  ],
};

const projects = [
  {
    title: "Dealer Agent Application",
    tech: ["ReactJS", "Redux", "Styled Components", "REST APIs", "Jest"],
    details: [
      "Led 12-member frontend team across modules.",
      "Built Kanban board & dashboards for user roles.",
      "Maintained testable, modular code with 95% coverage.",
    ],
  },
  {
    title: "E-Commerce Platform (Jewelry & Gold Trading)",
    tech: ["ReactJS", "GraphQL", "Magento", "AEM", "Styled Components"],
    details: [
      "Developed gold trading, product pages, and registration flows.",
      "Integrated GraphQL APIs for real-time catalog & order data.",
      "Boosted performance 25% with AEM caching and optimization.",
    ],
  },
  {
    title: "B2B Telecom Ordering Platform",
    tech: ["ReactJS", "Salesforce APIs", "Jest", "Postman", "SCSS"],
    details: [
      "Built reusable components and order workflows.",
      "Integrated Salesforce APIs for billing & customer verification.",
      "Maintained accessibility and 95%+ test coverage.",
    ],
  },
];

const skills = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Architecture & Patterns",
    items: [
      "Micro-Frontend Architecture",
      "Module Federation",
      "Monorepo (Nx)",
      "Component-Driven Development",
    ],
  },
  {
    title: "Frameworks & UI",
    items: [
      "ReactJs",
      "Redux",
      "Hooks",
      "Context API",
      "React Router",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind",
      "Styled Components",
      "Material UI",
      "Bootstrap",
      "SLDS",
    ],
  },
  {
    title: "Build & Tooling",
    items: ["Webpack", "Vite", "Git", "Jenkins", "AEM"],
  },
  {
    title: "Testing & APIs",
    items: [
      "Jest",
      "Unit Testing",
      "RESTful APIs",
      "GraphQL",
      "Axios",
      "Postman",
      "Salesforce APIs",
    ],
  },
  {
    title: "Platforms & Design",
    items: ["Figma", "VS Code", "Adobe Experience Manager"],
  },
  {
    title: "Project & QA Tools",
    items: ["Jira", "Confluence", "SonarQube", "ADB", "MS Office"],
  },
  {
    title: "Best Practices",
    items: [
      "Web Performance",
      "Accessibility (WCAG)",
      "SEO",
      "Agile",
      "Scrum",
      "CI/CD",
    ],
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          I'm Puraskrit, a Front-End Developer with 4.5+ years of experience
          building scalable, performant UIs using ReactJS and TypeScript. I
          focus on clean code, accessibility, performance, and agile
          collaboration.
        </p>

        {/* Work Experience */}
        <div className="block">
          <h3>Work Experience</h3>
          <div className="job-card">
            <h4>{experience.role}</h4>
            <span className="company">{experience.company}</span>
            <span className="job-date">{experience.date}</span>
            <ul>
              {experience.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project Experience */}
        <div className="block">
          <h3>Project Experience</h3>
          <div className="project-grid">
            {projects.map((proj, i) => (
              <div className="project-card" key={i}>
                <h4>{proj.title}</h4>
                <div className="project-tech">
                  {proj.tech.map((techItem, tIdx) => (
                    <span key={tIdx} className="chip tech-chip">
                      {techItem}
                    </span>
                  ))}
                </div>
                <ul>
                  {proj.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="block">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((group, idx) => (
              <div className="skill-group" key={idx}>
                <h4>{group.title}</h4>
                <div className="chip-group">
                  {group.items.map((item, sIdx) => (
                    <span className="chip" key={sIdx}>
                      {item}
                    </span>
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
