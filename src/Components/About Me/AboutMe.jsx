import "./AboutMe.css";
import { forwardRef } from "react";

const AboutMe = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="about">
      <h1 className="about-title">Profile</h1>
      <p className="about-description">
        Myself Bikash Prasad Dushad. I'm a backend developer with over 2 years
        of experience in building scalable APIs using Node.js, Express.js, and
        MongoDB. I have worked on several real-world projects and specialize in
        creating secure, scalable, and well-documented backend systems.
      </p>

      <div className="about-details">
        <div className="detail-item">
          <h3 className="detail-label">Location</h3>
          <p className="detail-value">Bhairahawa, Nepal</p>
        </div>
        <div className="detail-item">
          <h3 className="detail-label">Core Focus</h3>
          <p className="detail-value">Full Stack Developer</p>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
