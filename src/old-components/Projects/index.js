import React from "react";
import "./index.css";
import Project from "./project";
import Separator from "../Separator";
// import { projectData } from "../../mockData/mockData";

const projectData = [
  {
    projectName: "DU Dealer Agent Application",
    projectObj: "Agent Android Tablet Application",
    location: "Dubai/Gurugram",
    projectRole: "React Native Developer",
    responsibilities: [
      {
        title: "Team Leadership",
        description:
          "Led a 12-member team during the deployment phase, ensuring timely delivery and maintaining operational excellence.",
      },
      {
        title: "Security & UX Enhancements",
        description:
          "Developed advanced security measures and custom Kanban boards, resulting in a 20% reduction in process time and improved user engagement.",
      },
      {
        title: "Vendor Collaboration",
        description:
          "Worked on-site with vendors to manage app releases, optimizing performance and ensuring smooth transitions.",
      },
    ],
  },
  {
    projectName: "Malabar Gold & Diamonds",
    projectObj: "E-Commerce Application",
    location: "Gurugram",
    projectRole: "React Developer",
    responsibilities: [
      {
        title: "Adobe Experience Manager",
        description:
          "Developed and enhanced web applications, improving backend integration with Adobe Experience Manager",
      },
      {
        title: "Feature Development",
        description:
          "Created essential features like login/registration modules and online transaction capabilities for gold trading, increasing user retention by 15%",
      },
      {
        title: "Performance Optimization",
        description:
          "Resolved critical production issues and improved web performance, reducing load times by 30% and enhancing user experience",
      },
    ],
  },
  {
    projectName: "British Telecom",
    projectObj: "B2B Application",
    location: "Bengaluru",
    projectRole: "React Developer",
    responsibilities: [
      {
        title: "Component Reusability",
        description:
          "Built reusable components and implemented state management using Redux and Hooks, increasing development efficiency by 40%.",
      },
      {
        title: "System Integration",
        description:
          "Integrated React with Salesforce, enabling seamless information sharing and improving system reliability.",
      },
      {
        title: "Code Quality Improvement",
        description:
          "Addressed code smells, enhanced maintainability, and achieved high code coverage through comprehensive unit tests",
      },
    ],
  },
];

function Projects({ projectsRef }) {
  return (
    <div ref={projectsRef} className="Projects">
      {projectData.map((item,index)=>{
        return <>
        <Project
          projectName={item.projectName}
          projectObj={item.projectObj}
          location={item.location}
          projectRole={item.projectRole}
          projectDescription={item.responsibilities}
        />
        <Separator style={{ margin: "1em 0 1em 0" }} />
      </>
      })}
    </div>
  );
}

export default Projects;
