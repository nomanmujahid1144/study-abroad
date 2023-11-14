import React from "react";
import "./style.css";
import { Col, Row } from "antd";
import LogoYel from "../../images/yellowdown.svg";
import RightArrwo from "../../images/rightarrow.svg";
function HeroIelts() {
  return ( 
    <div>
      <Row justify={"center"} style={{ marginBottom: "4rem" }}>
        <Col>
          <p className="perfecttxt">
            <img className="imgyellow" alt="abc" src={LogoYel} />
            Get a perfect score <br />
            on IELTS
          </p>
          <br />
          <p className="loretxt">
            Welcome to a world of language proficiency and academic <br />{" "}
            excellence. Embrace the IELTS training experience at <br /> The
            Student Helpline.
          </p>
          <br />
          <div className="baadcen">
            <button className="lorembutt44">
              Find Your Dream University <img alt="abc" src={RightArrwo} />
            </button>
          </div>
          <img className="arrowimg" alt="abc" src="../images/terhaarrow.svg" />
        </Col>
        <Col>
          <img className="airplaneimg" alt="abc" src="../images/airplane.svg" />
          <img
            className="chotimg"
            alt="abc"
            src="../images/ieltsone.png"
          />
          {/* <img
            className="terhascndimg"
            alt="abc"
            src="../images/terhasecond.svg"
          /> */}
        </Col>
      </Row>
    </div>
  );
}

export default HeroIelts;
