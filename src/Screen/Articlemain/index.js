import React from "react";
import "./style.css";
import HeroSectionBlog from "../../Components/heroSectionBlog";
import { Container } from "react-bootstrap";
import { Col, Row, Avatar} from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getBlogById, getBlogs } from "../../redux/Actions/BlogsActions";
import { useSelector } from "react-redux";
import { baseURL } from "../../constants/baseURL";
import aviator from '../../images/avatar.png'
import facebook from '../../images/face.png'
import linkedIn from '../../images/link.png'
import twitter from '../../images/twi.png'
import arrow from '../../images/span.jss107.png'
import { CardBody } from "../../Components/card/CardBody";
import { formatDateToCustomString } from "../../constants/helperFunction";
import { Helmet } from 'react-helmet';


export const ArticleMain = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [blogId, setBlogId] = useState('');
  const [headings, setHeadings] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  // const [groupedBlogs, setGroupedBlogs] = useState([]);
  const itemsPerRow = 3;


  useEffect(() => {
    if (params.url) {
      setBlogId(params.url)
    }
  }, [])

  const { blog, blogs } = useSelector(
    (state) => state.blogReducer
  );

  useEffect(() => {
    dispatch(getBlogs());
  }, [])

  useEffect(() => {
    if (blogId) {
      dispatch(getBlogById(blogId))
    }
  }, [blogId])

  useEffect(() => {
    if (blog) {
      const heads = extractHeadingsFromHTML(blog.data);
      setHeadings(heads);
    }
  }, [blog]);



  useEffect(() => {
    if (blogs.length > 0) {
      // Split the items into groups of three
      for (let i = 0; i < blogs.length; i += itemsPerRow) {
        // groupedBlogs.push(blogs.slice(i, i + itemsPerRow));
      }
    }
  }, [blogs])

  const extractHeadingsFromHTML = (html) => {
    // Create a new DOMParser
    const parser = new DOMParser();
  
    // Parse the HTML string
    const doc = parser.parseFromString(html, 'text/html');
  
    // Select all <h2> and <h3> elements
    const headingElements = doc.querySelectorAll('h1, h2');
  
    // Extract the text content of the headings
    const headings = Array.from(headingElements).map((element) => element.textContent.trim());
  
    return headings;
  }

  const handleItemClick = (item, index) => {
    setSelectedItem(index);
    const headings = document.querySelectorAll('h2'); // You can use a different selector if needed

    for (const heading of headings) {
      if (heading.textContent === item) {
        heading.scrollIntoView({ behavior: 'smooth' });
        break; // Stop searching after the first match
      }
    }
  };

  const handleNavigateTo404 = () => {
    navigate('/not-found')
  }

  return (
    <>
      {blog  ? 
        <>
        <div>
          <Helmet>
            <title>{blog.metaTitle !== '' ? blog.metaTitle : ''}</title>
            <meta name="description" content={blog.metaDescription !== '' ? blog.metaDescription : ''} />
            <meta name="keywords" content={Array.isArray(blog.metaTags) ? blog.metaTags.join(', ') : ''} />
          </Helmet>
        </div>
        <div className="bg-clr">
        <HeroSectionBlog />
        <div className="mainclass">
          <Row className="alcont d-flex flex-wrap">
            <Col className="col-md-12 col-lg-3 col-sm-12 px-3">
              <div className="table-of-contents">
                {headings.map((item, index) => (
                  <div
                    key={index}
                    className={`toc-item ${selectedItem === index ? "active" : ""}`}
                    onClick={() => handleItemClick(item, index)}
                  >
                    {`${index + 1}. ${item}`}
                  </div>
                ))}
              </div>
            </Col>
            <Col className="col-md-12 col-lg-6 col-sm-12 px-3">
              <div>
                <p className="text37">{blog.blogHeading}</p>
                <br />
                <div className="buttuppub">
                  {blog.userId ?
                    <button className="buttonpubli">Published by {blog.userId ? blog.userId.fullName : ''}</button>
                  :null}
                  <button className="buttonupdated">
                    Updated: {formatDateToCustomString(blog.lastUpdated)}
                  </button>
                </div>
                <div>
                  <img
                    className="imagesize"
                    alt="abc"
                    src={baseURL + blog.blogImage}
                  />
                  <div>
                    <p className="thereare" dangerouslySetInnerHTML={{
                    __html: blog.data !== '' ? blog.data : '',}}>
                      
                  </p>
                  </div>
                </div>
              </div>
            </Col>
            {blog.userId ? 
              <Col className="col-md-12 col-lg-3 col-sm-12 px-3">
                <div className="thirdcolu">
                  <div className="centerthird">
                    <div className="avatarcenter">
                      {" "}
                      <Avatar
                        style={{ width: "5rem", height: "5rem" }}
                        src={<img src={aviator} alt="avatar" />}
                      />
                    </div>
                    <br />
                    <p className="textjamal">{blog.userId  ? blog.userId.fullName : ''}</p>
                    {/* <p className="textlong">
                      It is a long established fact that a reader
                      <br /> will be distracted by the readable content <br />
                      of a page when looking at its layout.
                    </p> */}
                      <div className="imagee">
                        {blog.userId.social.facebook !== '' ?
                          <a href={blog.userId.social.facebook} rel="noopener noreferrer" target="_blank">
                            <img alt="facebook" src={facebook} />
                          </a>  
                        :null}
                        {blog.userId.social.twitter !== '' ? 
                          <a href={blog.userId.social.twitter} rel="noopener noreferrer" target="_blank">
                            <img alt="twitter" src={twitter} />
                          </a>  
                        :null}
                        {blog.userId.social.linkedin !== '' ? 
                          <a href={blog.userId.social.linkedin} rel="noopener noreferrer" target="_blank">
                            <img alt="linkedIn" src={linkedIn} />
                          </a>  
                        :null}
                        </div>
                  </div>
                </div>
              </Col>
            : null}
          </Row>
          

          
          <Container>
            {" "}
            <Container className="huu">
              {" "}
              <p className="latestarticle">Latest Article</p>
            </Container>
            <div className="main-container d-flex flex-wrap gap-4 py-5">
            <div className="container">
              <div className="row" >
                {blogs.slice(0, 4).map((blog, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="">
                          <a href={`/blog/${blog._id}/${blog.url}`} style={{ textDecoration: "none" }}>
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
            {/* {blogs.slice(0, 4).map((blog) => (
              <div className="">
                <a href={`/blog/${blog._id}/${blog.url}`} style={{ textDecoration: "none" }}>
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
            ))} */}
          </div>
          {blogs.length > 3 ?
            <div className="butncent">
              <Link to="/blogs" style={{ textDecoration: "none" }}>
                <button className="btn-seealll">
                  See More Article
                  <img src={arrow} alt="" className="size" />
                </button>
              </Link>
            </div>
            :null}
          </Container>
        </div>
        </div>
      </>
        : (
          handleNavigateTo404()
      )}
    </>
  );
}

