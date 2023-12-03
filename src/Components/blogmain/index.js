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
import { useState } from "react";

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

  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const dispatch = useDispatch();

  const { blogs } = useSelector(
    (state) => state.blogReducer
  )

  useEffect(() => {
    dispatch(getBlogs());
  }, [])

  useEffect(() => {
    if (blogs.length > 0) {
      const featuredBlogs = blogs.filter(blog => blog.featured);
      setFeaturedBlogs(featuredBlogs)
    }
  }, [blogs])

  return (
    <div>
      <Row justify={"center"}>
        {featuredBlogs.length > 0 && (
          <Col>
            <div>
              <div className="divimg">
                {" "}
                <img
                  className="imagess"
                  alt="abc"
                  src={baseURL +  featuredBlogs[0].blogImage}
                />
              </div>
              <br /> <br />
              <p className="firstp">{featuredBlogs[0].blogHeading}</p>
              <p className="secondpp" dangerouslySetInnerHTML={{
              __html: featuredBlogs[0].data !== '' ? featuredBlogs[0].data.length > 50 ?  featuredBlogs[0].data.slice(0, 50) + '...' : featuredBlogs[0].data : '',
            }}>
              </p>
              <div className="twobtns">
                {/* <button className="buttonone">PUBLISHED BY {featuredBlogs[0].}</button> */}
                <button className="buttontwo">{formatDateToCustomString(featuredBlogs[0].createdAt)}</button>
              </div>
            </div>
          </Col>
        )}
        {featuredBlogs.length > 1 && (
          <Col className="secondcolumn">
            <div className="textleft">
              {" "}
              <p className="featurep">FEATURED ARTICLE</p>
            </div>
            <div>
              {featuredBlogs.slice(1).map((item, index) => (
                <Card className="cardss" size="small" key={index}>
                  <div className="cardsdata">
                    <img className="imag" style={{width : '6rem', objectFit: 'contain'}} alt="abc" src={baseURL +  item.blogImage} />
                    <div className="seconddata">
                      <p className="headi">{item.blogHeading}</p>
                      <p dangerouslySetInnerHTML={{
                        __html: item.data !== '' ? item.data.length > 50 ?  item.data.slice(0, 50) + '...' : item.data : '',
                      }}></p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Col>
        )}
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
