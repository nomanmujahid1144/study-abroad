import React from "react";
import "./style.css";
import { Col, Row, Avatar} from "antd";
import Arrow from "../../images/span.jss107.png";
import Men from "../../images/Hero.png";
import Dwonarrow from "../../images/Vector 6.png";
import { Link } from "react-router-dom";
import SmallA from "../../images/Ellipse 67.png";
import SmallA1 from "../../images/Ellipse 68.png";
import SmallA2 from "../../images/Ellipse 69.png";
import SmallA3 from "../../images/Group (9).png";
import { Rating } from "react-simple-star-rating";
import { Container } from "react-bootstrap";

function HeroSection() {
  return (
    <div>
      <div>
        <Container>
          <div className="viw-right-left">
            <Row justify="space-between">
              <Col>
                <div className="center-col">
                  <div>
                    <div>
                      <div className="stud-div">Student helpline</div>
                    </div>
                    <img src={Dwonarrow} alt="" className="img-pos" />
                    <h1 className="study-text">
                      Study Abroad With Skill
                      <br /> Everyday, Anytime, and <br /> Anywhere.
                    </h1>

                    <p className="text-lor">
                      TheStudentHelpline brings a fresh approach to achieve your
                      <br />
                      study abroad dream - Transparent, Affordable, and 100%
                      <br />
                      Unbiased
                    </p>
                    <div className="div-flex">
                      <div>
                        <Link
                          to="/finder"
                          style={{ textDecoration: "none", color: "#000000" }}
                        >
                          <div className="find-div">
                            Find your dream University{" "}
                            <img src={Arrow} alt="" className="im-size" />
                          </div>
                        </Link>
                      </div>
                      <div className="div-flex223">
                        <Avatar.Group
                          maxCount={3}
                          maxPopoverTrigger="click"
                          size="large"
                          maxStyle={{
                            color: "#f56a00",
                            backgroundColor: "#fde3cf",
                            cursor: "pointer",
                          }}
                        >
                          <Avatar src={SmallA} />
                          <Avatar src={SmallA1} />
                          <Avatar src={SmallA2} />
                        </Avatar.Group>
                        <div
                          style={{
                            marginLeft: ".5rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "start",
                            flexDirection: "column",
                            marginTop: ".8rem",
                          }}
                        >
                          <Rating
                            size={30}
                            readonly
                            transition
                            allowFraction
                            initialValue={4.5}
                          />
                          <p>(10k + reviews) </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="center-col">
                  <img src={Men} alt="" className="big-img-size" />
                  <img src={SmallA3} alt="" className="random-arrow" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default HeroSection;
