import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <h1>Bikash Prasad Dushad</h1>
      <p className="hero-description">
        Backend Developer specializing in scalable APIs, secure authentication,
        and high-performance web applications.
      </p>
      <div className="hero-buttons">
        <button className="experience">Experience</button>
        <button className="contact-me">Contact Me</button>
      </div>
      <span className="hero-role">Backend Developer</span>
    </section>
  );
};

export default Hero;
