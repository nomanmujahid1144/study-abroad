import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from "react-bootstrap/Navbar";
import logo from '../../images/studentlogo.png'
import defaultImage from '../../images/avatar.png';
import Country from "../../images/image 18 (1).png";
import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  Col,
  Statistic,
  message,
} from "antd";
import { sendOtp } from "../../helper/axios";
import { verifyOtp } from "../../helper/axios";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { adminURL } from "../../constants/baseURL";
// import Logo from "../../images/student helpline logo-ai.png";
const { Option } = Select;
const { Countdown } = Statistic;

const onChange = (val) => {
  if (typeof val === "number" && 4.95 * 1000 < val && val < 5 * 1000) {
  }
};

function CollapsibleExample() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const navigate = useNavigate();
  
  const showModal = () => {
    setOpen(true);
  };
  const showModal1 = () => {
    setOpen1(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleCancel1 = () => {
    setOpen1(false);
  };
  const onFinish = (values) => {
    sendOtp(`/${values.phone}`, {
      method: "post",
    })
      .then((response) => {
        setSessionId(response.data.Details);
      })
      .catch((error) => console.log(error));
  };
  const onFinish1 = (values) => {
    verifyOtp(`/${sessionId}`, {
      method: "get",
      data: values.otp,
    })
      .then((response) => {
        if (response.data.status === "success") {
          navigate("/login");
          message.success("OTP matched");
        } else {
          message.error("wrong OTP");
        }
      })
      .catch((error) => console.log(error));
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 120,
          background: "white",
          borderRadius: ".5rem",
        }}
        placeholder="+91"
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

  const handleNavigate = () => {
    window.open('https://paraphrasingtools.io', '_blank');
  }
  const NavigateToAdminLogin = () => {
    window.location.href = adminURL;
  }
  return (
    <div>
      <Modal className="modalsi" open={open} footer={null} onCancel={handleCancel} >
        <img className="imglogings" alt="abc" src="../images/Gradient.png" />{" "}
        <div className="signup">
          <Button className="btnsign">Sign Up</Button>
        </div>
        <div className="centertxtlog">
          {" "}
          <p className="logtxt">Let's Get Started Login</p>
          <p>
            Please enter your mobile number to <br />
            Login
          </p>
        </div>

        <div className="div-c">
          <div className="seconddivlog">
            {" "}
            <Form onFinish={onFinish}>
              <div className="centerdisp">
                <Form.Item className="abdr"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    placeholder=" Phone Number"
                    addonBefore={prefixSelector}
                    className="input-div"
                  />
                </Form.Item>
              </div>
              <div className="centerdisp">
                {" "}
                <button
                  onClick={() => {
                    showModal1();
                    handleCancel();
                  }}
                  type="submit"
                  className="btnloglast"
                >
                  Send OTP
                </button>
              </div>
            </Form>
          </div>
        </div>
      </Modal>
      <Modal
        className="modalsi"
        open={open1}
        footer={null}
        onCancel={handleCancel1}
      >
        <img className="imglogings" alt="abc" src="../images/Gradient.png" />{" "}
        <div className="signup">
          <Button className="btnsign">Sign Up</Button>
        </div>
        <div className="centertxtlog">
          {" "}
          <p className="logtxt">OTP VERIFICATION</p>
        </div>
        <div className="div-c">
          <div className="seconddivlog">
            {" "}
            <Col className="centerdispp">
              <Countdown value={Date.now() + 10 * 12000} onChange={onChange} />
            </Col>
            <p className="plsht">
              Didn't recieve code ?{" "}
              <p
                style={{ fontWeight: "bold" }}
                onClick={() => {
                  showModal();
                  handleCancel1();
                }}
              >
                Re-send
              </p>
            </p>
            <Form onFinish={onFinish1}>
              <Form.Item
                className="otp"
                name="otp"
                rules={[
                  {
                    required: true,
                    message: "Please input your OTP",
                  },
                ]}
              >
                <div className="centerdispi">
                  <Input className="abinp"></Input>
                  {/* <Input className="abinp"></Input>
              <Input className="abinp"></Input>
              <Input className="abinp"></Input> */}
                </div>
              </Form.Item>
              <div className="centerdispp">
                <button
                  onClick={() => {
                    handleCancel1();
                  }}
                  type="submit"
                  className="btnloglast"
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      </Modal>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img
                className="logook"
                alt="no-logo"
                src={logo}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="center-div-nav">
              <div className="div-course">
                <Nav.Link>
                  <Link
                    to="/finder"
                    style={{ textDecoration: "none", color: "#000000" }}
                  >
                    Course Finder{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/blogs"
                    style={{ textDecoration: "none", color: "#000000" }}
                  >
                    Blog
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {/* <Link  to="https://paraphrasingtools.io" target="_blank"> */}
                    <button onClick={handleNavigate} type="button" className="sign-btn">
                      AI Tools
                    </button>
                </Nav.Link>


                {!localStorage.getItem('token') ? 
                  <>
                    <Nav.Link>
                        <button onClick={NavigateToAdminLogin} type="button" className="sign-btn">
                          Login
                        </button>
                    </Nav.Link>
                  </>
                :
                  <Dropdown>
                    <Dropdown.Toggle className="bg-transparent border-0" id="image-dropdown-toggle">
                      <img
                        src={defaultImage}
                        width={40}
                        height={40}
                        className="rounded-circle"
                        alt="User Avatar"
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href={adminURL}>
                              Profile
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => {
                        localStorage.removeItem('token');
                        navigate('/');
                        message.success("Logout Successful");
                      }}
                      >Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                }


              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CollapsibleExample;
