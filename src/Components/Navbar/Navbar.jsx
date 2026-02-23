import { useState } from "react";
import "./Navbar.css";
import avatar from "../../assets/avatar.png";
import { useScroll } from "../../hooks/useScroll";

const Navbar = ({
  profileRef,
  experienceRef,
  skillsRef,
  projectsRef,
  contactRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { executeScroll } = useScroll();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (ref, sectionId) => {
    executeScroll(ref);
    window.location.hash = sectionId;
    closeMenu();
  };

  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <img src={avatar} alt="User Avatar" />
      </div>

      <div
        className={`menu-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-end ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li>
            <a
              href="#profile"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(profileRef, "profile");
              }}
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(experienceRef, "experience");
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(skillsRef, "skills");
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(projectsRef, "projects");
              }}
            >
              Projects
            </a>
          </li>
          <li className="nav-cta">
            <button
              type="button"
              onClick={() => scrollToSection(contactRef, "contact")}
            >
              Let's Connect
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
