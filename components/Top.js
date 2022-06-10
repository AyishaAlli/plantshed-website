import Image from "next/image";
import React from "react";

import openingPlantImg from '../stock_images/plants/plantone-bg.png'

import { Col, Container, Row } from "react-bootstrap";


  
export default function Home() {

  return (
    <>
      <div className="background"></div>
      <Container className="container">
        <Row className="hero-sec">
          <Col xs={12} md={6} className="hero-left">
                <h1 className="logo">PlantShed</h1>
                <p>Plants, and <span>Coffee, What more could you ask for?</span></p>
          </Col>
          <Col xs={12} md={6}>
              <Image className="plant-img" alt="plant in pot" src={openingPlantImg} height={400} width={600}></Image>
          </Col>
        </Row>
      </Container>
    </>
  );
}
