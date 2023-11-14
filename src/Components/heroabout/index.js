import React from "react";
import "./style.css";
import { Col, Row } from "antd";

function HeroAboutUs() { 
  return (
    <div>
      <Row justify={"center"} style={{ marginBottom: "4rem" }}>
        <Col>
          <p className="perfecttxt">
            <img className="imgyellow" alt="abc" src="../images/Vector 6.svg" />
            Our Goal is to change <br />
            how you study abroad
          </p>
          <br />
          <p className="loretxt">
            Redefining global education for an immersive, personalized,
            <br /> and transformative experience.
            <br />
            Our innovative approach fosters cross-cultural connections <br />
            and opens doors to limitless opportunities.
          </p>
          <br />
          <div className="baadcen">
            <button className="lorembutt44">
              Our Goal <img alt="abc" src="../images/right.svg" />
            </button>
          </div>
          <img className="arrowimg" alt="abc" src="../images/terhaarrow.svg" />
        </Col>
        <Col className="d-flex justify-content-center">
          <img className="airplaneimg" alt="abc" src="../images/airplane.svg" />
          <img
            className="chotimg w-75"
            alt="abc"
            src="../images/aboutbig1.png"
          />
          {/* <img
            className="terhascndimggg"
            alt="abc"
            src="../images/terhasecond.svg"
          /> */}
        </Col>
      </Row>
    </div>
  );
}

export default HeroAboutUs;
