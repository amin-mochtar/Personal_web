import React from "react";
import { Row, Container, Col, Image, Button } from "react-bootstrap";
import Profilepic from "../../assets/img/profile/foto-profile.jpg"
import "./about.styles.css"

const about = () => {
  return (
    
    <div className="about">
      <h1 className="p-3 font-details text-center">About Me</h1>
      <Container>
        <Row className="align-item-center pt-3 pb-5">
            {/* prfile picture */}
          <Col xs={12} md={6}>
            <Row className=" m-2 justify-content-center">
              <Image className="justify-content-end profile" src={Profilepic} thumbnail fluid/>
            </Row>
          </Col>
          {/* about me description */}
          <Col>
            Hai perkenalkan nama saya <strong> Amin Mochtar Rosydi </strong> 
            <br /> saat ini saya tinggal di kota Surakarta, Jawa Tengah 
            <br /> dan berusia 21 tahun.
            <br /> Saya adalah fresh graduate Fullstack Javascript Developer yang lebih berminat pada front-end developer.
            <br /> Background saya lulusan dari Hacktiv8 Jakarta (Dec 2020), disana saya mengikuti 2 kelas yaitu kelas Basic yang mempelajari basic HTML, CSS, JS dan bekerja dengan github, 
            <br /> setelah itu, saya melanjutkan ke kelas Fullstack Javascript, 
            <br /> selain itu, saya juga mengikuti course gratis yang ada di internet, selain Background IT saya juga memiliki background sebagai mahasiswa fakultas keguruan di Universitas Sebelas Maret (2017-2020) disana saya aktif dalam organisasi kerohanian Islam kampus, dan sempat menjabat sebagi ketua umum untuk 1 periode. 
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default about;
