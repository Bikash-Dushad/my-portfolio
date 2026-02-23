import { useRef } from "react";
import AboutMe from "./Components/About Me/AboutMe";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  const profileRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <header>
        <Navbar
          profileRef={profileRef}
          experienceRef={experienceRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      </header>
      <main className="main-content">
        <Hero experienceRef={experienceRef} contactRef={contactRef} />
        <AboutMe ref={profileRef} />
        <Experience ref={experienceRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>
      <footer>
        <Footer
          profileRef={profileRef}
          experienceRef={experienceRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      </footer>
    </>
  );
}

export default App;
