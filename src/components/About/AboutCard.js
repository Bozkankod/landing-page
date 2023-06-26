import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Herkese merhaba ben <span className="purple">Batuhan Özkan </span>
            Sakarya'da yaşıyorum.
            <br /> Sakarya Üniversitesi Bilgisayar Programcılığı bölümünden mezun oldum.
            <br />
            Anadolu Üniversitesi YBS bölümünde okumaya devam ediyorum.
            <br />
            <br />
            Şu an Mikrogrup şirketinde Yazılım Destek Uzmanlığı görevime devam ediyorum, kendimi geliştirmek amacıyla Flutter ve React.js öğrenmeye devam ediyorum.
            <br/>
            <br/>
            Hobilerim;
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Oyun Oynamak
            </li>
            <li className="about-activity">
              <ImPointRight /> Seyahat Etmek
            </li>
            <li className="about-activity">
              <ImPointRight /> Spor
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "May the force be with you."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
