import React, { forwardRef } from "react";
import "./Experience.css";

const experiences = [
  {
    id: 1,
    title: "Software Developer",
    company: "Amunik Pvt Ltd",
    location: "Hyderabad, India",
    date: "08/2024 – Present",
    roles: [
      "Delivered complex, high-impact projects within tight deadlines, consistently meeting milestones while maintaining high standards of quality.",
      "Collaborated effectively with cross-functional teams to ensure smooth project execution, integrating solutions and resolving technical challenges with scalable implementations.",
      "Actively contributed to team discussions, brainstorming sessions, and code reviews, enhancing project outcomes through problem-solving and innovative approaches.",
    ],
  },
];

const Experience = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="experience">
      <h1 className="experience-title">
        Professional <span>Experience</span>
      </h1>

      <div className="timeline">
        <div className="timeline-line" />

        {experiences.map((exp) => (
          <div className="timeline-item" key={exp.id}>
            <div className="timeline-dot" />

            <div className="timeline-card">
              <div className="card-top">
                <div className="card-left">
                  <h3 className="job-title">{exp.title}</h3>
                  <p className="job-company">{exp.company}</p>
                </div>
                <div className="card-right">
                  <span className="job-location">⊙ {exp.location}</span>
                  <span className="job-date">{exp.date}</span>
                </div>
              </div>

              <ul className="job-roles">
                {exp.roles.map((role, i) => (
                  <li key={i}>{role}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Experience;