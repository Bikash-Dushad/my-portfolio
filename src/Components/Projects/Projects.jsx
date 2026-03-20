import "./Projects.css";
import { useState, forwardRef } from "react";
import ChatAppThumbnail from "../../assets/chat-app.png";

const Projects = forwardRef((props, ref) => {
  const [hoveredId, setHoveredId] = useState(null);

  const projectsData = [
    {
      id: 1,
      name: "Chat App",
      thumbnail: ChatAppThumbnail,
      demoLink: "https://chat-app-v52h.vercel.app/",
      details: [
        "Real-time chat with multiple users",
        "User authentication and authorization",
        "Responsive design for all devices",
      ],
    },
    {
      id: 2,
      name: "Note Sharing",
      thumbnail:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
      demoLink: "https://github.com/Bikash-Dushad",
      details: [
        "Engineered a state-of-the-art note-sharing platform to optimize knowledge exchange, a",
        "Empowered users to upload and share notes effortlessly,",
        "Orchestrated the development of a note-sharing platform, enhancing knowledge transfer efficiency by 40%",
      ],
    },
    {
      id: 3,
      name: "Habit Tracker",
      thumbnail:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
      demoLink: "https://habit-tracker-frontend-lyart.vercel.app/",
      details: [
        "Proficient in implementing user authentication features,",
        "Skilled in enabling users to add, modify, and delete multiple habits, ",
        "Experienced in implementing comprehensive tracking options, including the ability for users to mark habits as done, undone,or not attended",
      ],
    },
  ];

  return (
    <section ref={ref} className="projects">
      <h1 className="projects-title">
        Featured <span>Projects</span>
      </h1>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Project Thumbnail */}
            <div className="project-thumbnail">
              <img src={project.thumbnail} alt={project.name} />

              {/* Hover Details - Desktop */}
              <div
                className={`project-details-hover ${hoveredId === project.id ? "visible" : ""}`}
              >
                <h4 className="details-title">Key Features</h4>
                <ul className="details-list">
                  {project.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Project Info */}
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>

              {/* Mobile Details - Always visible on mobile */}
              <div className="project-details-mobile">
                <h4 className="details-title">Key Features</h4>
                <ul className="details-list">
                  {project.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              {/* Demo Button */}
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-button"
              >
                Live Demo
                <svg
                  className="arrow-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;
