import React from "react";
import "./style.css";
import { Button, Col, Row } from "antd";

function WhyUsAbout() {
  return (
    <div className="whmain">
      <Row className="rowwhyab">
        <Col>
          <p className="frsttextuii">Why Us</p>
          <p className="beapart">
            Be A Part Of Our Team
            <br />
            And Join Our Mission
          </p>
          <p className="alk">
            alk to students who already have reached your dream university
            <br />
            pursuing your dream course
          </p>
          <div className="baadcen">
            <button className="lorembutt">
              Why Us <img alt="abc" src="../images/right.svg" />
            </button>
          </div>
        </Col>
        <Col>
          <div className="disimgert">
            <img
              className="imglastab"
              alt="abc"
              src="../images/aboutbig7.png"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default WhyUsAbout;
