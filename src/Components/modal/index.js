import React from "react";
import "./style.css";
import { Col, Input, Row, Form, Select } from "antd";
import Idea from "../../images/image 21.png";
import Country from "../../images/image 18 (1).png";
import Arrow from "../../images/span.jss107.png";
import { Link } from "react-router-dom";
const { Option } = Select;
function ExpertModal() {
  
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 120,
          background: "white",
          borderRadius: ".5rem",
        }}
      >
        <Option value="91">
          {" "}
          <img src={Country} alt="" />
          +91
        </Option>
        <Option value="92">
          {" "}
          <img src={Country} alt="" />
          +92
        </Option>
      </Select>
    </Form.Item>
  );
  return (
    <div>
      <div>
        <Row justify="space-between">
          <Col>
            <div className="center-modal">
              <div>
                <h1 className="text-modal">
                  “Find the best <br /> courses and
                  <br /> universities”
                </h1>
              </div>
            </div>
          </Col>
          <Col>
            <div className="center-modal">
              <div>
                <img src={Idea} alt="" />
                <button className="stuyd-modal-btn">STUDY ABROAD EXPERT</button>
              </div>
            </div>
          </Col>
        </Row>
        <div
          className="center-token-div-whole"
          style={{ marginTop: "-.05rem" }}
        >
          <div className="bg-token-div">
            <div className="div-text-div">
              <p className="where-text">Talk to Expert</p>
            </div>
            <div>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input addonBefore={prefixSelector} className="input-div" />
              </Form.Item>
            </div>
            <Link to="/finderOne" style={{ textDecoration: "none" }}>
              <button className="btn-next12 ">
                Continue <img src={Arrow} alt="" className="im-size" />
              </button>
            </Link>
            <p className="text-by-term">
              By continuing, you agree to our{" "}
              <a href="/" className="text-by-term1">Terms of Service & Privacy policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertModal;
