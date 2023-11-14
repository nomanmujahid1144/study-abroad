import React from "react";
import "./style.css";
import { Col, Row} from "antd";
import Google from "../../images/flat-color-icons_google.png";
import Facebook from "../../images/devicon_facebook.png";
import Arrow from "../../images/span.jss107.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
function Review() {
  return (
    <div className="div-whole-reving">
      <div>
        <Container>
          <Row justify="center">
            <Col xxl={7} xl={7} lg={9} md={12}>
              <div className="center-review">
                <div className="white-div-card">
                  <div className="div-google">
                    <div>
                      <h1 className="text-num">4.6</h1>
                      <h3 className="text-reeee">
                        Google
                        <br /> Review
                      </h3>
                      <br />
                      <div>
                        <Rating
                          size={25}
                          readonly
                          transition
                          allowFraction
                          initialValue={4.6}
                        />
                      </div>
                    </div>
                    <img src={Google} alt="" className="img-goog" />
                  </div>
                </div>
              </div>
            </Col>
            <Col xxl={7} xl={7} lg={9} md={12}>
              <div className="center-review">
                <div className="white-div-card">
                  <div className="div-google">
                    <div>
                      <h1 className="text-num">4.6</h1>
                      <h3 className="text-reeee">
                        Facebook
                        <br /> Review
                      </h3>
                      <br />
                      <div>
                        <Rating
                          size={25}
                          readonly
                          transition
                          allowFraction
                          initialValue={4.6}
                        />
                      </div>
                    </div>
                    <img src={Facebook} alt="" className="img-goog" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <p className="text-trust">
          Garnering the trust of over a million students Worldwide, our platform
          stands as
          <br /> a beacon for comprehensive academic guidance. Join us on a
          journey of
          <br /> success and transformation!
        </p>
        <div className="center-review">
          <Link to="/finder" style={{ textDecoration: "none" }}>
            <button className="btn-get-sr">
              Get started <img src={Arrow} alt="" className="im-size" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Review;
