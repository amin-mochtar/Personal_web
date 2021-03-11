import React from "react";
import { Fade, Slide } from "react-reveal";
import { Parallax } from "react-parallax";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/my-navbar/navbar.component";
import Carousel from "./components/my-carusol /Carousel.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import AboutMe from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import ProjectSlider from "./components/projects/projects.component"
import Experience from "./pages/experience/experience.component";
import FooterPanel from "./components/footer/footer2.component";
import { Container } from "react-bootstrap";
import './css/App.css'

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Navbar />
      <Carousel />
      <MyTitleMessage />
      <div>
        <Parallax>
          <div>
            <Container className="container-box rounded p-3">
              <Fade duration={500}>
                  <hr/>
                <AboutMe />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded p-3">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded p-3">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className="carousel">
        <Slide bottom duration={500}>
          <hr />
          <h1 className="font-details-b">Portofolio</h1>
          <ProjectSlider />
        </Slide>
      </Container>
      <Container className="container-box rounded p-3">
        
      </Container>

      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;
