import React from "react";
import "./style.css";
import { Card } from "antd";
import { Container } from "react-bootstrap";

const data = [
  {
    id: 1,
    image:
            "../images/ieltsthree.png",
      
    text: (
      <p>
        Professional and certified expert <br /> trainers always their for you.{" "}
      </p>
    ),
  },
  {
    id: 2,
    image:
       "../images/ieltsfour.png",

    text: (
      <p>
        IELTS sectional and practice test
        <br /> questions to get you ready for exam.
      </p>
    ),
  },
];
const data1 = [
  {
    id: 1,
    image:
      "../images/ieltsfive.png",
    text: (
      <p>
        Boost your chances of getting the IELTS
        <br /> score you deserve.
      </p>
    ),
  },
  {
    id: 2,
    image:
      "../images/ieltssix.png",
    text: (
      <p>
        Additional IELTS Practice Materials
        <br /> include test format.
      </p>
    ),
  },
];

function WhyUs() {
  return (
    <>
      <div>
        <Container>
          <div className="div-texted12 main-container ">
            <p className="test-text23">Why</p>
            <h1 className="hear-text">The Student Helpline</h1>
          </div>
          <div className="imgcenter">
          {" "} 
          <img
            className="usama"
            alt="abc"
            src="../images/ieltstwo.png"
          />
          </div>
          <div className="fulldivabs">
            {data.map((item, index) => (
              <div key={index}>
                <Card
                  className="cardsize"
                  style={{
                    background: "rgba(236, 239, 244, 1)",
                  }}
                >
                  <div className="contentcenter">
                    <div className="imgcenter">
                      {" "}
                      <img className="imgsizes" alt="abc" src={item.image} />
                    </div>
                    <p>{item.text}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div className="fulldivabs1">
            {data1.map((item, index) => (
              <div key={index}>
                <Card
                  style={{
                    background: "rgba(236, 239, 244, 1)",
                  }}
                  className="cardsize"
                >
                  <div className="contentcenter">
                    <div className="imgcenter">
                      {" "}
                      <img className="imgsizes" alt="abc" src={item.image} />
                    </div>
                    <p>{item.text}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default WhyUs;
