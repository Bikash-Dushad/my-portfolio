import "./Hero.css";
import { useScroll } from "../../hooks/useScroll";

const Hero = ({ experienceRef, contactRef }) => {
  const { executeScroll } = useScroll();

  const scrollToSection = (ref, sectionId) => {
    executeScroll(ref);
    window.location.hash = sectionId;
  };

  return (
    <section className="hero">
      <h1>Bikash Prasad Dushad</h1>
      <p className="hero-description">
        Backend Developer specializing in scalable APIs, secure authentication,
        and high-performance web applications.
      </p>
      <div className="hero-buttons">
        <button
          onClick={() => scrollToSection(experienceRef, "experience")}
          className="experience"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection(contactRef, "contact")}
          className="contact-me"
        >
          Contact Me
        </button>
      </div>
      <span className="hero-role">Backend Developer</span>
    </section>
  );
};

export default Hero;
