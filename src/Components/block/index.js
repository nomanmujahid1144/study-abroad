import React, { useEffect } from "react";
import "./style.css";
import Arrow from "../../images/span.jss107.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBlogs } from "../../redux/Actions/BlogsActions";
import { useDispatch } from "react-redux";
import { baseURL } from "../../constants/baseURL";
import { CardBody } from "../card/CardBody";
import { SlickBlogSlider } from "../slider/SlickSlider";
import { formatDateToCustomString } from "../../constants/helperFunction";


function Block() {
  const dispatch = useDispatch();

  const { blogs } = useSelector(
    (state) => state.blogReducer
  )
  
  useEffect(() => {
    dispatch(getBlogs());
}, [])

  return (
    <div className="main-container">
      <Container>
        <div className="div-flex-btn">
          <div>
            <p className="text-our">Our Latest Blog</p>
            <p className="text-ts">hear from our students</p>
          </div>
          <Link to="/blogs" style={{ textDecoration: "none" }}>
            <button className="btn-seeall">
              See all <img src={Arrow} alt="" className="im-size" />
            </button>
          </Link>
        </div>
      </Container>
      <Container>
        <SlickBlogSlider className="flex gap-5 w-100 justify-content-between">
          {blogs.map((blog) => (
            <div className="px-4">
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
          ))}
        </SlickBlogSlider>
      </Container>
    </div>
  );
}

export default Block;
