import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import burcApi from "../../Assets/Projects/burcapi.png";
import lolKlipleri from "../../Assets/Projects/lolKlipleri.png";
import scrumPoint from "../../Assets/Projects/scrumpoint.png";
import burcYorumlari from "../../Assets/Projects/burcyorumlari.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Son Yaptığım <strong className="purple">Projeler </strong>
        </h1>
        <p style={{ color: "white" }}>
          İşte son yaptığım projelerden bazıları;
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scrumPoint}
              isBlog={false}
              title="Scrum Point"
              description="Scrum puanlama yapılabilmesi için tasarladığım ilk net ve somut projem. React.js, Firebase ve Firestore kullanıyorum."
              demoLink="https://scrumpoint.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lolKlipleri}
              isBlog={false}
              title="Lol Klipleri"
              description="Bu youtube kanalı tamamen AI tarafından yönetiliyor, tüm video bulma, edit işlemleri dahil. Abone olmak isterseniz link aşağıda."
              ghLink="https://github.com/bozkankod/randomizefiles"
              demoLink="https://www.youtube.com/@lolklipleri"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={burcYorumlari}
              isBlog={false}
              title="Burç Yorumları"
              description="Flutter + MongoDB ile burç yorumlarını, burç uyumlarını, burç hesaplamalarını yapabildiğiniz bir mobil uygulama."
              demoLink="https://play.google.com/store/apps/details?id=com.bozki.burclar"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={burcApi}
              isBlog={false}
              title="Burç API"
              description="Günlük, haftalık ve aylık olarak tüm burçların güncel yorumları, özellikleri gibi tüm datayı dinamik olarak url yapısıyla fetch eder ve json formatında döndürür."
              ghLink="https://github.com/bozkankod/burcapi"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={burcApi}
              isBlog={false}
              title="Randomize Files Names"
              description="İlgili dizindeki tüm dosyaların başına belirtilen numara aralığında rastgele rakamlar ekler."
              ghLink="https://github.com/bozkankod/randomizefiles"
            />
          </Col>

          

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
