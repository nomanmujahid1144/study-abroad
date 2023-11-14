import React, { useState } from "react";
import "./style.css";
import { Col, Row, Modal } from "antd";
import Mic from "../../images/Get real guidance.png";
import Mic1 from "../../images/div_chakra-stack.png";
import Arrow from "../../images/span.jss107.png";
import ExpertModal from "../modal";

function RealGuidance() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="div-done-get">
      <div>
        <Row justify="center">
          <Col xxl={12} xl={12} lg={12} md={20}>
            <div className="center-coll33">
              <img src={Mic} alt="" className="big-img-mic" />
              <img src={Mic1} alt="" className="big-img-mic1" />
            </div>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={20}>
            <div className="center-coll33">
              <div>
                <h2 className="text-big-get">
                  Get <a href="/" className="text-big-get1">real guidance</a> from{" "}
                  <a href="/" className="text-big-get1">
                    real <br /> students
                  </a>{" "}
                  through mentor
                  <br />
                  connect
                </h2>
                <p className="text-sm">
                  Talk to students who already have reached your
                  <br />
                  dream university pursuing your dream course
                </p>
                <div className="mbl-view-center-btn">
                  <button className="btn-take " onClick={showModal}>
                    Talk to expert{" "}
                    <img src={Arrow} alt="" className="im-size" />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <Modal
            className="style-modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer
          >
            <ExpertModal />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default RealGuidance;
