import React from "react";
import "./style.css";
import HeroSectionBlog from "../../Components/heroSectionBlog";
import BlogMain from "../../Components/blogmain";
function BlogPage() {
  return (
    <div className="bg-clr">
      <HeroSectionBlog />
      <BlogMain />
    </div>
  );
}

export default BlogPage;
