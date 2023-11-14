import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import ProgramCards from "./programCards";

function ProgramHighlights() {
  return (
    <>
      <Container>
        <p className="programtxt">Program Highlights</p>
        <ProgramCards />
      </Container>
    </>
  );
}

export default ProgramHighlights;
