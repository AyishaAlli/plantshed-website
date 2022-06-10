import React from "react";
import { Col, Container, Row } from "react-bootstrap";


  
export default function Home() {

  return (
    <>
      <div className="background"></div>
      <Container className="container">
        <Row>
          <Col xs={12} md={6}>
                <h1 className="logo">PlantShed</h1>
                <p>Plants, and <span>Coffee, What more could you ask for?</span></p>
          </Col>
          <Col xs={12} md={6}>
              <img className="plant-img" src="/../stock_images/plantone-bg"></img>
          </Col>
        </Row>
      </Container>
    </>
  );
}
