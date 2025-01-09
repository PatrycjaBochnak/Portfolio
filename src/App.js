import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App({ sr }) {
  return (
    <div>
      <Navbar />
      <Home id="home" sr={sr} />
      <About id="about" sr={sr} />
      <Skills id="skills" sr={sr} />
      <Projects id="projects" sr={sr} />
      <Contact id="contact" sr={sr} />
      <Footer />
    </div>
  );
}

export default App;
