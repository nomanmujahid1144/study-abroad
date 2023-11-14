import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import { Col, Row } from "antd";

function MeetPartner() {
  return (
    <div>
      <Container>
        <p className="meetstart">Meet Our Partners</p>
        <Row className="rowapartn">
          <img alt="abc" src="../images/Clicup.svg" />
          <img alt="abc" src="../images/dropbox.svg" />
          <img alt="abc" src="../images/Elastic.svg" />
          <img alt="abc" src="../images/Google Workspace.svg" />
        </Row>
        <Row className="rowapartn">
          <img alt="abc" src="../images/helpscout.svg" />
          <img alt="abc" src="../images/intuit.svg" />
          <img alt="abc" src="../images/Paychex.svg" />
          <img alt="abc" src="../images/Salesforce.svg" />
        </Row>{" "}
        <Row className="rowapartn">
          <img alt="abc" src="../images/SAP.svg" />
          <img alt="abc" src="../images/Segment.svg" />
          <img alt="abc" src="../images/ServiceNow.svg" />
          <img alt="abc" src="../images/shopify.svg" />
        </Row>
      </Container>
    </div>
  );
}

export default MeetPartner;
