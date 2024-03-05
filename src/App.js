import "./App.css";
import NavBar from "./portfolioComponents/NavBar";
import About from "./portfolioComponents/About";
import Education from "./portfolioComponents/Education";
import CourseCertifications from "./portfolioComponents/CourseCertifications";
import Skill from "./portfolioComponents/Skill";
import Contact from "./portfolioComponents/Contact";
import Project from "./portfolioComponents/Project";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <NavBar />
      <Element name="about-section">
        <About />
      </Element>
      <Element name="education-section">
        <Education />
      </Element>
      <Element name="skill-section">
        <Skill />
      </Element>
      <Element name="certification-section">
        <CourseCertifications />
      </Element>
      <Element name="project-section">
        <Project />
      </Element>
      <Contact />
    </>
  );
}

export default App;
