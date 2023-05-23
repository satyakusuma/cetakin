import React from "react";
import "./Footer.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import IG from "../../assets/Insta.png";
import Bg from "../../assets/Footer.png";
import TT from "../../assets/Tiktok.png";
import TW from "../../assets/Twitter.png";
import FB from "../../assets/Vector.png";

function Footer() {
  return (
    <footer className="mt-5">
      <div
        className="pt-5"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          height: "373px",
        }}
      >
        <Row className="justify-content-center">
          <Col className="text-center text-md-right text-light" text="light">
            <p className="fw-bold fs-1">CetakAja</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center text-md-right text-light" text="light">
            <p className="fw-light fs-8">
              Jl. Ring Road Utara, Ngringin, Condongcatur, Kec. Depok, <br />{" "}
              Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
            </p>
          </Col>
        </Row>
        <Row xs="auto" className="justify-content-center mt-3">
          <Col>
            <Image src={IG} />
          </Col>
          <Col>
            <Image src={TW} />
          </Col>
          <Col>
            <Image src={FB} />
          </Col>
          <Col>
            <Image src={TT} />
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center">
          <Col className="text-center text-md-right text-light" text="light">
            <p className="fw-light fs-8">
              CetakAja Copyright - Alright Reserved
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
