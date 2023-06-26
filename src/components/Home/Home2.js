import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              KENDİMİ <span className="purple"> TANITAYIM </span>
            </h1>
            <p className="home-about-body">
              Doğuştan beri programlama için yaratıldığımı düşünüyorum 😛
              <br />
              <br />Özellikle JS kütüphanelerine düşkünüm
              <i>
                <b className="purple"> React.js, Node.js</b>
              </i>
              <br />
              <br />
              Yeni projeler geliştirmekten&nbsp;
              <i>
              <b className="purple">çok zevk alıyorum </b> ve
                bunları{" "}
                <b className="purple">
                  açık kaynak&nbsp;
                </b>
                 olarak paylaşmaktan gurur duyuyorum.
              </i>
              <br />
              <br />
              Yeni projelerimde mutlaka bir js kütüphanesi kullanıyorum <b className="purple">Node.js</b> ve
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Kütüphaneleri ve Frameworkler
                </b>
              </i>
              &nbsp;-
              <i>
                <b className="purple"> React.js ve Next.js</b>
              </i>
              &nbsp; gibi
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>BENİMLE İLETİŞİME GEÇİN</h1>
            <p>
              İletişime <span className="purple">geçmekten </span>çekinmeyin
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bozkankod"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/batujsx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/batudev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/batu.jsx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
