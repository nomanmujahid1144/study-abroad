import React from "react";
import "./style.css";
import { Card} from "antd";
import { Container } from "react-bootstrap";

function AboutIelts() {
  return (
    <div>
      <Container>
        <div className="mb-3">
          <p className="fw-bold mb-4 text-warning">About IELTS</p>
          <div className="why-ielts">
            <div className="col-md-6 pt-5">
              <p className="whtietext mb-4">What Is IELTS </p>
              <p className="">
                The International English Language Testing System (IELTS) is a standardized test used to assess the English language  proficiency of individuals who wish to study or work in  English-speaking countries.Recognized by over 10,000 organizations worldwide, IELTS is one of the most widely accepted English language proficiency tests.
              </p>
              <div className="twrs">
                <button className="buseeall">
                  SEE ALL
                  <img
                    className="imgiel"
                    alt="abc"
                    src="../images/rightalign.svg"
                  />
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <img
                className="ielimg"
                alt="abc"
                src="../images/ieltsbig2.png"
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <p className="fw-bold mb-4 text-warning">Types of IELTS</p>
          <div className="d-flex flex-wrap">
            <div className="col-md-6 px-0 px-md-2 mb-2 mb-md-0">
              <Card className="cardbcj" style={{width: "100%"}}>
                <div className="cardieltsss">
                  <img alt="abc" src="../images/line.svg" />
                  <div>
                    <p className="acdie">Academic</p>
                    <p className="scniet">
                      The IELTS Academic test is an essential gateway for individuals aspiring to pursue higher education in English-speaking countries.
                      Recognized and accepted by thousands of universities and educational institutions worldwide. We're devoted to helping you reach your educational goals, providing the
                      best advice and materials for acing IELTS and getting into your ideal college.
                    </p>{" "}
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-md-6 px-0 px-md-2 mb-2 mb-md-0">
              <Card className="cardbcj" style={{width: "100%"}}>
                  <div className="cardieltsss">
                    <img alt="abc" src="../images/line.svg" />
                    <div>
                      <p className="acdie">General</p>
                      <p className="scniet">
                        The IELTS General Training test is your gateway to new
                        opportunities in English-speaking countries. Whether you dream
                        of working abroad, seeking international training programs, or
                        migrating to a new land, it is designed to assess your
                        practical language skills in everyday contexts. At The Student
                        Helpline, we offer IELTS General Training to empower you with
                        the language proficiency required to achieve your global
                        aspirations.
                      </p>
                    </div>
                  </div>{" "}
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutIelts;
