import React from "react";
import { Fade, Slide } from "react-reveal";
// import ContactForm from "./pages/contact-form/contact-form.component";
import { Parallax } from "react-parallax";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/my-navbar/navbar.component";
import Carousel from "./components/my-carusol /Carousel.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import AboutMe from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import TimeLine from "./components/projects-timeline/project-timeline.component";
import Experience from "./pages/experience/experience.component";
import ContactForm from "./pages/contact/contact.component";
import FooterPanel from "./components/footer/footer2.component";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Navbar />
      <Carousel />
      <MyTitleMessage />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <AboutMe />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>

      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;
