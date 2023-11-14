import React from "react";
import "./style.css";
import { Avatar, Card} from "antd";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Acceptability() {

  const data = [
    {
      id: 1,
      flag: '../images/flag6.svg',
      countryName: 'United States'
    },
    {
      id: 2,
      flag: '../images/flag5.svg',
      countryName: 'United Kingdom'
    },
    {
      id: 3,
      flag: '../images/flag4.svg',
      countryName: 'New Zealand'
    },
    {
      id: 4,
      flag: '../images/flag3.svg',
      countryName: 'Australia'
    },
    {
      id: 5,
      flag: '../images/flag2.svg',
      countryName: 'Canada'
    },
    {
      id: 6,
      flag: '../images/flag1.svg',
      countryName: 'Ireland'
    },
  ]

  return (
    <>
    <div className="pt-5">
      <Container>
        <div className="mb-3">
          <p className="fw-bold mb-4 text-warning">Acceptability</p>
          </div>
          <div className="testfor flex-wrap">
            {data.map((item) => (
              <div id={item.id} className="cdfr">
                <Avatar className="avatarsi" src={item.flag} />
                <p className="testlo">{item.countryName}</p>
              </div>
            ))}
          </div>
          <div className="div-texted12 main-container ">
            <h1 className="hear-text fw-bold mb-4 text-warning">IELTS Programs Of The Student Helpline</h1>
          </div>
          <div className="d-flex flex-wrap">
            <div className="col-md-6">
              <Card bordered={false} style={{width: '90%'}} className="cardlorempkg px-0 px-md-2 mb-2 mb-md-0">
                  <p className="hear-text">IELTS PREMIUM+</p>
                  <hr className="hr" />
                  <p className="acdie">$299</p>
                  <hr className="hr" />
                  <p className="scniet">
                    20+ Hours of live classes 4 Week Course 3-5 Full Length IELTS
                    simulation Tests 50+ Reading and Listening Tests 25 Speaking and
                    30 Writing Evaluations Study Materials Grammar Improvement
                    Classes Doubt Solving Sessions – Everyday Dedicated Students
                    Success Manager
                  </p>
                </Card>
            </div>
            <div className="col-md-6">
                <Card bordered={false} style={{width: '90%'}} className="cardlorempkg px-0 px-md-2 mb-2 mb-md-0">
                  <p className="hear-text">IELTS 1 ON 1</p>
                  <hr className="hr"></hr>
                  <p className="acdie">$299</p>
                  <hr className="hr"></hr>

                  <p className="scniet">
                    20+ Hours of live classes 4 Week Course 3 Full Length IELTS
                    simulation Tests 30+ Reading and Listening Tests 15 Speaking and
                    20 Writing Evaluations Study Materials Grammar Improvement
                    Classes Doubt Solving Sessions – Twice In a Week Dedicated
                    Students Success Manager
                  </p>
                </Card>
            </div>
          </div>
          <Link to={"/finder"}>
              <div className="baadcen">
                <button className="lorembutt23">
                  See Demo <img alt="abc" src="../images/right.svg" />
                </button>
              </div>
            </Link>
      </Container>
    </div>
    </>
  );
}

export default Acceptability;
