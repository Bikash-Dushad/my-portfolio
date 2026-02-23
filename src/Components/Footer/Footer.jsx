import { FaHeart, FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import "./Footer.css";
import { useScroll } from "../../hooks/useScroll";
import { saveAs } from "file-saver";
import resume from "../../assets/Bikash_backend_dev_resume_2026.pdf";

const Footer = ({
  profileRef,
  experienceRef,
  skillsRef,
  projectsRef,
  contactRef,
}) => {
  const { executeScroll } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (ref, sectionId) => {
    executeScroll(ref);
    window.location.hash = sectionId;
  };

  const currentYear = new Date().getFullYear();

  const handleDownloadResume = () => {
    try {
      saveAs(resume, `Bikash_Resume_${currentYear}.pdf`);
    } catch (error) {
      console.error("Error downloading resume:", error);
      const link = document.createElement("a");
      link.href = resume;
      link.download = "Bikash_Prasad_Dushad_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <footer className="footer">
      {/* Back to Top Button */}
      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>

      <div className="footer-container">
        {/* Footer Left - Brand */}
        <div className="footer-left">
          <h3 className="footer-logo">Bikash Prasad Dushad</h3>
          <p className="footer-tagline">
            Building scalable backend solutions and meaningful digital
            experiences.
          </p>

          {/* Quick Contact */}
          <div className="footer-quick-contact">
            <a
              href="mailto:bikashghll@gmail.com"
              className="quick-contact-item"
            >
              <MdEmail />
              <span>bikashghll@gmail.com</span>
            </a>
            <a href="tel:+9779811412148" className="quick-contact-item">
              <FaPhone />
              <span>+977 9811412148</span>
            </a>
            <button
              className="download-resume-btn"
              onClick={handleDownloadResume}
              aria-label="Download Resume"
            >
              <FaDownload className="download-icon" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Footer Middle - Quick Links */}
        <div className="footer-middle">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
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
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(contactRef, "contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Right - Social & Connect */}
        <div className="footer-right">
          <h4 className="footer-title">Connect With Me</h4>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Bikash-Dushad"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:bikashghll@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <MdEmail />
            </a>
          </div>

          <p className="footer-cta">Available for opportunities</p>
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © {currentYear} Bikash Prasad Dushad. All rights reserved.
          </p>
          <p className="made-with">
            Made with <FaHeart className="heart-icon" /> in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
