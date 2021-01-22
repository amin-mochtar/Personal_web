import React from "react";
import { Row, Container, Col, Image, Button } from "react-bootstrap";
import Profilepic from "../../assets/img/profile/foto-profile.jpg";
import "./about.styles.css";

const about = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="p-3 font-details text-center">About Me</h1>
        <Container>
          <Row className="align-item-center pt-3 pb-5">
            {/* prfile picture */}
            <Col xs={12} md={6}>
              <Row className=" m-2 justify-content-center">
                <Image
                  className="justify-content-end profile"
                  src={Profilepic}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            {/* about me description */}
            <Col className="aboutMe">
              <Row className=" align-items-start p-2 my-details rounded">
                Hai perkenalkan nama saya <strong> Amin Mochtar Rosydi </strong>
                <br />
                <br /> saat ini saya tinggal di kota Surakarta, Jawa Tengah
                <br /> dan berusia 21 tahun.
                <br /> Saya adalah fresh graduate Fullstack Javascript Developer
                yang lebih berminat pada front-end developer.
                <br /> Background saya lulusan dari Hacktiv8 Jakarta (Dec 2020),
                disana saya mengikuti 2 kelas yaitu kelas Basic yang mempelajari
                basic HTML, CSS, JS dan bekerja dengan github,
                <br /> setelah itu, saya melanjutkan ke kelas Fullstack
                Javascript,
                <br /> selain itu, saya juga mengikuti course gratis yang ada di
                internet, selain Background IT saya juga memiliki background
                sebagai mahasiswa fakultas keguruan di Universitas Sebelas Maret
                (2017-2020) disana saya aktif dalam organisasi kerohanian Islam
                kampus, dan sempat menjabat sebagi ketua umum untuk 1 periode.
              </Row>
              <Row className=" align-items-start p-2 my-details rounded">
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="" target="blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-primary">
                        Contact
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1Snbq3x4Itk_ZN4c8J96aNdp4SunXR08Y/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/akjha96"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/anand-kumar-jha-745798a4/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default about;
