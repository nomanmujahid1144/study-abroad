import { Col, Row, Card } from "antd";
import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../redux/Actions/BlogsActions";
import { useEffect } from "react";
import { baseURL } from "../../constants/baseURL";
import { CardBody } from "../card/CardBody";
import { formatDateToCustomString } from "../../constants/helperFunction";

const data = [
  {
    id: 1,
    image:
      "https://thestudenthelpline.co.in/admin_panel/assets/images/blog/shorter-degree-programs-in-uk.webp",
    heading: <p>The Benefits of the UK’s Shorter Degree Programs</p>,
    text: (
      <p>
        What's the best part? You're about to learn how innovative
        <br /> programs like these can help you advanc ...
      </p>
    ),
  },
  {
    id: 2,
    image:
      "https://thestudenthelpline.co.in/admin_panel/assets/images/blog/countries-to-study-in-europe.webp",
    heading: <p>Affordable Countries to Study Abroad in Europe</p>,
    text: <p>Be Prepared to be amazed by the possibilities. ...</p>,
  },
  {
    id: 3,
    image:
      "https://thestudenthelpline.co.in/admin_panel/assets/images/blog/10-ways-to-studying-in-abroad.webp",
    heading: <p>10 Ways to Study Abroad</p>,
    text: <p>Students in high school and college are more e ...</p>,
  },
];



function BlogMain() {

  const dispatch = useDispatch();

  const { blogs } = useSelector(
    (state) => state.blogReducer
  )

  useEffect(() => {
    dispatch(getBlogs());
  }, [])

  return (
    <div>
      <Row justify={"center"}>
        <Col>
          <div>
            <div className="divimg">
              {" "}
              <img
                className="imagess"
                alt="abc"
                src="https://thestudenthelpline.co.in/admin_panel/assets/images/blog/GRE_Analytical_Writing.webp"
              />
            </div>
            <br /> <br />
            <p className="firstp">GRE Analytical Writing</p>
            <p className="secondpp">
              Are you preparing for the GRE and feeling intimidated by the GRE
              Analytical
              <br /> Writing section? You're not alone! Many test-takers find
              the prospect of <br /> writing two essays under timed conditions
              daunting. ...
            </p>
            <div className="twobtns">
              <button className="buttonone">PUBLISHED BY NIdhi</button>
              <button className="buttontwo">29 july 2023</button>
            </div>
          </div>
        </Col>
        <Col className="secondcolumn">
          <div className="textleft">
            {" "}
            <p className="featurep">FEATURED ARTICLE</p>
          </div>
          <div>
            {data.map((item, index) => (
              <Card className="cardss" size="small" key={index}>
                <div className="cardsdata">
                  <img className="imag" alt="abc" src={item.image} />
                  <div className="seconddata">
                    <p className="headi">{item.heading}</p>
                    <p>{item.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
      <Container>
        <p className="latestarticle">Latest Article</p>
        <div className="main-container d-flex flex-wrap gap-4 py-5">
          <div className="container">
            <div className="row" >
              {blogs.slice(0, 12).map((blog, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="">
                        <a href={`/blog/${blog.url}`} style={{ textDecoration: "none" }}>
                          <div
                            className="card shadow bg-body-tertiary"
                            style={{
                              marginTop: "0.5rem",
                              marginBottom: "0.5rem",
                              borderRadius: '1.3rem'
                            }}
                          >
                            <img
                              src={baseURL + blog.blogImage}
                              alt="example"
                              className="card-img-top"
                              style={{
                                height: "14rem",
                                borderTopLeftRadius: '1.3rem',
                                borderTopRightRadius: '1.3rem'
                              }}
                            />
                            <div className="card-body">
                              <CardBody
                                date={formatDateToCustomString(blog.createdAt)}
                                heading={blog.blogHeading}
                                data={blog.data}
                              />
                            </div>
                          </div>
                        </a>
                      </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
        {blogs.length > 12 ?
          <div className="butncent">
            <Link to="/article" style={{ textDecoration: "none" }}>
              <button className="btn-seealll">
                See More Article
                <img src="../images/SVG.png" alt="" className="size" />
              </button>
            </Link>
          </div>
          :null}
      </Container>
    </div>
  );
}

export default BlogMain;
