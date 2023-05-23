import React from "react";
import "./Product.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ID from "../../assets/idcard.jpg";
import ID2 from "../../assets/IDCard2.jpg";
import Lanyard from "../../assets/lanyard.jpg";

function Product() {
  return (
    <section id="Product">
      <div className="mt-5 p-5 bg-warning">
        <Row className="justify-content-center">
          <Col className="text-center text-md-right">
            <p className="fw-bold fs-1">PRODUCT</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ID} />
              <Card.Body>
                <Card.Title>ID Card & Lanyard</Card.Title>
                <Card.Text>
                  Mencetak Id Card sekaligus Lanyard di satu tempat
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ID2} />
              <Card.Body>
                <Card.Title>ID Card</Card.Title>
                <Card.Text>
                  Hanya mencetak Id Card saja, tanpa lanyard
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Lanyard} />
              <Card.Body>
                <Card.Title>ID Card & Lanyard</Card.Title>
                <Card.Text>Hanya mencetak Lanyard tanpa ID card</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Product;
