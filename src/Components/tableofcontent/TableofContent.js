import React, { useState } from "react";
import "./style.css";

const TableOfContents = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const items = [
    "Learn About PTE Format...",
    "PTE Exam Guide – Learn",
    "Established fact that a reader",
    "Many desktop publishing",
    "If you are going to use",
    "Below for those interested",
    "Always free from repetition",
    "Learn About PTE Format...",
    "chunk of Lorem Ipsum",
  ];

  return (
    <div className="table-of-contents">
      {items.map((item, index) => (
        <div
          key={index}
          className={`toc-item ${selectedItem === index ? "active" : ""}`}
          onClick={() => handleItemClick(index)}
        >
          {`${index + 1}. ${item}`}
        </div>
      ))}
    </div>
  );
};

export default TableOfContents;
