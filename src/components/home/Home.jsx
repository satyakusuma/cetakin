import React from "react";
import "./Home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Me from "../../assets/home.png";
import Image from "react-bootstrap/Image";
import CA from "../../assets/cheapestAround.png";
import ED from "../../assets/expressDelivery.png";
import FP from "../../assets/fastProduction.png";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <section id="Home">
      <Row className="mt-5">
        <Col xs={6} className="Text-Center">
          <h1 className="header">Cetak Murah</h1>
          <h1 className="header">Kualitas Mewah!</h1>
          <p className="text-start mt-3">
            Kami menyediakan berbagai jenis lanyard dengan variasi warna,
            ukuran, dan bahan yang dapat disesuaikan dengan kebutuhan Anda.
            Selain itu, kami juga menyediakan layanan cetak logo atau gambar
            pada lanyard untuk memperkuat brand awarness Anda
          </p>
          <a href="#Detail">
            <Button variant="warning">Selengkapnya -{">"} </Button>
          </a>

          <Row md={3} className="mt-5">
            <Col>
              <Image src={FP} />
            </Col>
            <Col xs={6}>
              <Image src={ED} />
            </Col>
            <Col>
              <Image src={CA} />
            </Col>
          </Row>
        </Col>
        <Col xs={6} md={{ span: 3, offset: 3 }}>
          <div>
            <Image src={Me} fluid />
          </div>
        </Col>
      </Row>
    </section>
  );
}
