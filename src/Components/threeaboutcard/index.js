import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";

function ThreeCard() {
  return (
    <>
    {/* <div>
      <Container>
        <div className="mb-3">
          <p className="fw-bold mb-4 text-warning">Our Value</p>
          <div className="why-ielts">
            <div className="col-md-6 pt-5">
              <p className="whtietext mb-4">
                35,000+ students joint
                <br />
                with us to achieve goal
              </p>
              <p className="">Building a future of excellence through transformative education and unwavering support.Empowering growth through transformative education</p>
              <div className="twrs">
                <button className="buseeall">
                  See All
                  <img
                    className="imgiel"
                    alt="abc"
                    src="../images/rightalign.svg"
                  />
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img
                className="imgielAboutUs"
                alt="abc"
                src="../images/aboutbig4.png"
              />
            </div>
          </div>
        </div>
      </Container>
    </div> */}
    <div className="">
      <Container>
        <div className="firstthree my-3">
          <div className="rowcntr row p-4">
            <div className="col-md-6 col-12">
              <div>
                <p className="frsttextu">Our Value</p>
                <p >Building a future of excellence through transformative education and unwavering support.Empowering growth through transformative education
                </p>
              </div>
              <div className="baadcen">
                <button className="lorembuttt">
                  See All <img alt="abc" src="../images/right.svg" />
                </button>
              </div>
            </div>
              <div className="col-md-6 col-12 d-flex justify-content-center">
                <img
                    className="imgielAboutUs"
                    alt="abc"
                    src="../images/aboutbig4.png"
                  />
            </div>
          </div>
        </div>
        <div className="firstthree my-3">
          <div className="rowcntr row p-4">
              <div className="col-md-6 col-12 d-flex justify-content-center">
                  <img
                      className="imgielAboutUs"
                      alt="abc"
                      src="../images/aboutbig4.png"
                    />
              </div>
              <div className="col-md-6 col-12">
                <div>
                  <p className="frsttextui">Our Mission</p>
                  <p >Building a future of excellence through transformative education and unwavering support.Empowering growth through transformative education
                  </p>
                </div>
                <div className="baadcen">
                  <button className="lorembuttt">
                    See All <img alt="abc" src="../images/right.svg" />
                  </button>
                </div>
              </div>
          </div>    
          {/* <Row className="rowcntr">
            <Col>
              <div>
                <img
                  className="imgsi"
                  alt="abc"
                  src="../images/aboutbig5.png"
                />
              </div>
            </Col>
            <Col>
              <div>
                <p className="frsttextui">Our Mission</p>
                <p className="firscnd">
                  Building a future of excellence through <br />
                  transformative education and <br />
                  unwavering support.
                  <br />
                  Empowering growth through
                  <br />
                  transformative education
                </p>
              </div>
              <div className="baadcen">
                <button className="lorembuttt">
                  See All <img alt="abc" src="../images/right.svg" />
                </button>
              </div>
            </Col>
          </Row> */}
        </div>
          <div className="firstthree my-3">
            
          <div className="rowcntr row p-4">
              <div className="col-md-6 col-12">
                <div>
                  <p className="frsttextuii">Our Achievements</p>
                  <p >Celebrating a legacy of empowering 10,000+ graduates worldwide. Our achievements reflect our commitment to fostering global leaders.
                  </p>
                </div>
                <div className="baadcen">
                  <button className="lorembuttt">
                    See All <img alt="abc" src="../images/right.svg" />
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-12 d-flex justify-content-center">
                  <img
                      className="imgielAboutUs"
                      alt="abc"
                      src="../images/aboutbig4.png"
                    />
              </div>
          </div>    
          {/* <Row className="rowcntr">
            <Col>
              <div>
                <p className="frsttextuii">Our Achievement</p>
                <p className="firscnd">
                  Celebrating a legacy of empowering <br />
                  10,000+ graduates
                  <br />
                  worldwide. Our achievements
                  <br /> reflect our commitment to
                  <br />
                  fostering global leaders.
                </p>
              </div>
              <div className="baadcen">
                <button className="lorembuttt">
                  See All <img alt="abc" src="../images/right.svg" />
                </button>
              </div>
            </Col>
            <Col>
              <div>
                <img
                  className="imgsi"
                  alt="abc"
                  src="../images/aboutbig6.png"
                />
              </div>
            </Col>
          </Row> */}
        </div>
      </Container>
    </div>
    </>
  );
}

export default ThreeCard;
