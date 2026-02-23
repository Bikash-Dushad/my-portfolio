import React, { forwardRef } from "react";
import "./Skills.css";

const Skills = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="skills">
      <h1 className="skills-title">
        Technical <span>Skills</span>
      </h1>

      <div className="skills-container">
        {/* First Row - Frontend & Backend */}
        <div className="skill-category">
          <h3 className="category-title">Frontend</h3>
          <ul className="skill-list">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>EJS</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3 className="category-title">Backend</h3>
          <ul className="skill-list">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST API</li>
            <li>Kafka</li>
            <li>Web Sockets</li>
            <li>Microservices</li>
          </ul>
        </div>

        {/* Second Row - Database & Future Goal */}
        <div className="skill-category">
          <h3 className="category-title">Database</h3>
          <ul className="skill-list">
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PostgreSQL (learning)</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3 className="category-title">2026 Plan</h3>
          <ul className="skill-list">
            <li>DSA</li>
            <li>Mobile Dev</li>
            <li>Start AI</li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default Skills;
