import React from "react";
import "./index.css";
import moment from "moment";
import { calculateDifference } from "../../utils/calculateDifferenceYears";

function About({ aboutRef }) {
  function calculateYears(startDate, endDate) {
    return moment(endDate).diff(moment(startDate), "years");
  }

  return (
    <div className="About" ref={aboutRef}>
      <div>
        <section className="interests-section">
          <div className="flex">
            <h2 className="about-me-header">Professional Experience</h2>
            <ul className="experience-list">
              <li>
                <h3 className="company-header">Accenture</h3>
                <p className="company-info">
                  Product Engineering Senior Analyst - UI <br />
                  From February 2021
                </p>
              </li>
            </ul>
          </div>

          <div className="flex">
            <h2 className="about-me-header">Education</h2>
            <ul className="experience-list">
              <li>
                <h3 className="company-header">
                  Bachelors of Technology (2016-2020)
                </h3>
                <p className="company-info">
                  Shaheed Bhagat Singh State University, Ferozepur, Punjab
                  <br />
                  <b>majors:</b> Computer Science and Engineering
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="about-me-section">
          <div className="flex">
            <h2 className="about-me-header">
              Certifications
            </h2>
            <ul className="likes-certifications-list">
              <li>Front-End Developer Professional Certificate</li>
              <li>PluralSight Front-end Web Developer + AEM</li>
            </ul>
          </div>
          <div className="flex">
            <h2 className="about-me-header">Google Badges</h2>
            <ul className="likes-certifications-list">
              <li>Develop Serverless Apps with Firebase Skill Badge</li>
              <li>Automate Data Migrations to BigQuery Skill Badge</li>
            </ul>
          </div>
          
        </section>
      </div>
      <section>
        <p className="about-me">
          Little more about me, I'm {calculateYears([1999, 2], Date.now())}{" "}
          years of age. My total years of experience in UI is{" "}
          {calculateDifference(2021, 2)}. My prime expertise is in web
          development using <b>React</b>. Although I also have had a fair share
          of experience using the other technologies like <b>Angular</b> and{" "}
          <b>Vue</b>. I have dabbled a little in Java for development of REST
          APIs. My love is foremost for the look and feel of anything I develop,
          so if you like my website feel free to reach out, contact details
          below.
        </p>
        <h2 className="about-me-header">
          <span className="animate-character">Wow !</span> Thanks for sticking
          around and checking out my portfolio
          <span className="dotColorTheme">.</span>
        </h2>
      </section>
    </div>
  );
}

export default About;
