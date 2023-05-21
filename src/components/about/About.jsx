import React from "react";
import "./About.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function about() {
  return (
    <section id="About">
      <div className="mt-5">
        <Row>
          <Col sm={2} className="mt-3">
            <p className="fw-bold fs-5 mt-5">
              About Us
              <br />
              Our Misions
              <br />
              Our Growth
            </p>
          </Col>
          <Col sm={10}>
            <p className="fw-bold fs-1">ABOUT US</p>
            <p className="fw-light fs-5 lh-1">
              CetakAja didirikan sejak tahun 2023, dengan misi untuk menyediakan
              produk lanyard berkualitas tinggi dengan harga yang terjangkau.
              Kami memproduksi berbagai jenis lanyard, mulai dari lanyard dengan
              sablon, sublimasi, hingga bordir. Kami juga melayani custom design
              dan berbagai jenis material lanyard seperti polyester, nylon, dan
              satin.
            </p>
            <p className="fw-light fs-5 lh-1">
              Kami percaya bahwa kualitas produk dan kepuasan pelanggan adalah
              kunci keberhasilan bisnis kami. Oleh karena itu, kami berkomitmen
              untuk selalu memberikan produk dan layanan terbaikuntuk setiap
              pelanggan kami. Kami bangga dengan produk yang kami hasilkan dan
              senang bisa menjadi bagian dari kesuksesan acara Anda.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
}
export default about;
