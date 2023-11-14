import React from "react";
import "./style.css";
import { Col, Row, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function HeroSectionBlog() {
  return (
    <div>
      <Row className="rowss">
        <Col>
          <a href="/" className="colour">Study Abroad {">"} Blog</a>
        </Col>
        <Col className="center-coll">
          <p className="hone">Student Helpline Blogs</p>
          <br />
          <h6 className="newone">
            Education Without Borders - Study Abroad for a Global Perspective
          </h6>
        </Col>
        <Col></Col>
      </Row>{" "}
      <br />
      <div className="searchbar">
        <Input
          className="inputcenter"
          size="large"
          placeholder="| Search Blog Here..."
          prefix={<SearchOutlined className="abc" />}
        />
      </div>
    </div>
  );
}

export default HeroSectionBlog;
