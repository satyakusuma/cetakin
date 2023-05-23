import React from "react";
import "./Detail.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MM from "../../assets/ModernMachines.png";
import HQ from "../../assets/HoghQuality.png";
import HQ1 from "../../assets/HighQuality1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Detail() {
  return (
    <section id="Detail">
      <div className="mt-5 p-5 bg-warning">
        <Row>
          <Col>
            <p className="fw-bold fs-3 Yellow">
              We Are Ready To Provide Lanyard Printing Solutions
            </p>
            <p className="fw-bold fs-3">Using Modern Printing Machines</p>
            <p className="fw-bold fs-3">And High Quality Materials</p>
          </Col>
        </Row>

        <Row xs="auto" className="justify-content-center">
          <Col>
            <Card
              className="bg-warning border-warning text-white"
              style={{ width: "379px" }}
            >
              <Card.Img src={MM} fluid />
              <Card.ImgOverlay className="position">
                <Card.Title className="fw-bold fs-3">
                  Modern Machines
                </Card.Title>
                <Button className="text-white" variant="secondary">
                  Quality
                </Button>
                <Button className="text-white ms-3" variant="secondary">
                  Production
                </Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card
              className="bg-warning border-warning text-white"
              style={{ width: "379px" }}
            >
              <Card.Img src={HQ} fluid />
              <Card.ImgOverlay className="position">
                <Card.Title className="fw-bold fs-3">High Quality</Card.Title>
                <Button className="text-white" variant="secondary">
                  Quality
                </Button>
                <Button className="text-white ms-3" variant="secondary">
                  Production
                </Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card
              className="bg-warning border-warning text-white"
              style={{ width: "379px" }}
            >
              <Card.Img src={HQ1} fluid />
              <Card.ImgOverlay className="position">
                <Card.Title className="fw-bold fs-3">High Quality</Card.Title>
                <Button className="text-white" variant="secondary">
                  Quality
                </Button>
                <Button className="text-white ms-3" variant="secondary">
                  Production
                </Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Detail;
