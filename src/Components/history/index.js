import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";

function OurHistory() {
  return (
    <div>
      <Container>
        <div className="mb-3">
          <p className="fw-bold mb-4 text-warning">Our History</p>
          <div className="why-ielts">
            <div className="col-md-6 pt-5">
              <p className="whtietext mb-4">
                35,000+ students joint
                <br />
                with us to achieve goal
              </p>
              <p className=""> Join our thriving community of 35,000+ students and embark on a journey of success together. Achieve your goals with our proven track record of empowering students worldwide.</p>
              <div className="twrs">
                <button className="lorembuttt">
                  Join Us
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
                src="../images/aboutbig3.png"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurHistory;
