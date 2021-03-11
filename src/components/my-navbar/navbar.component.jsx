import React, {useState} from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/icons/logo.png";
import logoActive from "../../assets/icons/favicon.ico";
import "./navbar.styles.css";

const MyNavbar = () => {
  const [scroll, setScroll] = useState(false)

  const changeBackgroundNav = () =>  {
    if (window.scrollY >= 150) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  };

  window.addEventListener('scroll', changeBackgroundNav)
  return (
    <div>
      <Navbar
        fixed="top"
        expand="md"
        variant="dark"
        className={scroll ? 'nav-theme-active' : 'nav-theme'}
      >
        <Navbar.Brand href="#home">
          <img className="logo" src={scroll ? logoActive : logo} alt="My Web Logo" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home"><p className="nav-link">Home</p></Nav.Link>
            <Nav.Link href="#about"><p className="nav-link">About</p></Nav.Link>
            <Nav.Link href="#skills"><p className="nav-link">Skills</p></Nav.Link>
            <Nav.Link href="#experience"><p className="nav-link">Experience</p></Nav.Link>
            <Nav.Link href="#myProjects"><p className="nav-link">Projects</p></Nav.Link>
            <Nav.Link href="#footer"><p className="nav-link">Contact</p></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
