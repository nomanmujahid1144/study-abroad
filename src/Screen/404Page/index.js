import React from "react";
import { Col, Row} from "antd";
import ErrorImage from "../../images/Ilustration.png";
import Arrow from "../../images/Icon.png";
import "./style.css";
import { Link } from "react-router-dom";
import { BackgroundGradiant } from "../../Components/login/BackgroundGradient";

function ErrorPage() {
  return (
    <BackgroundGradiant>
        <Row justify="center">
          <Col xl={12} lg={12} md={12} xs={24}>
            <div className="contact-col12">
              <div>
                <h1 className="opp-text">Oops.... </h1>
                <h2 className="page-not ">Page not found </h2>
                <p className="exit-text">
                  This Page doesn`t exist or was removed!
                  <br />
                  We suggest you back to home.
                </p>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <button className="btn-form1">
                    <img src={Arrow} alt="" /> Back to home
                  </button>
                </Link>
              </div>
            </div>
          </Col>
          <Col xl={12} lg={12} md={12} xs={24}>
            <div className="contact-col">
              <div>
                <img src={ErrorImage} alt="" className="img-height" />
              </div>
            </div>
          </Col>
        </Row>
    </BackgroundGradiant>
  );
}

export default ErrorPage;
