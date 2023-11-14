import React from "react";
import "./style.css";
import { Card} from "antd";
import { Container } from "react-bootstrap";

const data = [
  {
    id: 1,
    heading: 'Listening',
    image:"../images/head.svg",      
    text: (<p>
      Enhance your ability to comprehend spoken <br /> English  in various  contexts, such as lectures, <br /> conversations, and presentations.
    </p>
    ),
  },
  {
    id: 2,
    heading: 'Writing',
    image:"../images/pencil.svg",
    text: (<p>
      Improve your reading skills and learn techniques to <br /> comprehend complex passages effectively.
    </p>
    ),
  },
];
const data1 = [
  {
    id: 1,
    heading: 'Speaking',
    image:
      "../images/micro.svg",
    text: (<p>
      Build confidence in expressing yourself fluently and <br /> coherently  in both informal and formal situations.
    </p>
    )
  },
  {
    id: 2,
    heading: 'Writing',
    image:"../images/books.svg",
    text: (
      <p>
        Develop your writing skills for different tasks, <br /> such as essays, reports, and letters.
      </p>
    ),
  },
];

function Academic() {
  return (
    <>
      <div>
        <Container>
          <div className="mb-3">
            <p className="fw-bold mb-4 text-warning">Academic Test Format</p>
          </div>
          <div className="mb-5">
            <div className="imgcenter">
              <img
                className="usama"
                alt="abc"
                src="../images/ieltsbig3.png"
              />
            </div>
            <div className="fulldivabs">
              {data.map((item, index) => (
                <div key={index}>
                  <Card className="cardsize" style={{ background: "rgba(236, 239, 244, 1)" }} >
                    <div className="cardonetwo">
                      <div>
                        <img alt="abc" src={item.image} />
                      </div>
                      <div>
                        <p className="allps">{item.heading}</p>
                        <p className="yhsame">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            <div className="fulldivabs1">
              {data1.map((item, index) => (
                <div key={index}>
                  <Card style={{ background: "rgba(236, 239, 244, 1)", }} className="cardsize" >
                    <div className="cardonetwo">
                      <div>
                        <img alt="abc" src={item.image} />
                      </div>
                      <div>
                        <p className="allps">{item.heading}</p>
                        <p className="yhsame">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </div>
    </>
  );
}

export default Academic;
