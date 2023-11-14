import { Button } from "antd";
import React, { useState } from "react";
import "./styles.css";

const FaqItem = ({ question, answer, index, isActive, toggleFaq }) => {
  return (
    <div className={`faq-item cursor-pointer ${isActive ? "active" : ""} eachitem`}
      onClick={() => toggleFaq(index)} >
      <div style={{ display: "flex", gap: "2rem" }}>
        {" "}
        <div className="faq-number">
          <Button
            className="faq-button" // Add a class to target the button
            style={{
              backgroundImage: isActive
                ? "linear-gradient(135deg, #FFB201, #A27FFF)"
                : "none",
              color: isActive ? "white" : "initial", // Change the text color to white when active
            }}
          >
            {index + 1}
          </Button>
        </div>
        <div className="faq-question">{question}</div>
      </div>

      {isActive && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: <p> How Does TheStudentHelpline Help You?</p>,
      answer: (
        <p>
          TheStudentHelpline is a platform designed to provide comprehensive
          assistance and supporting students at every stage of their educational
          journey and helping them achieve their academic and career goals.
        </p>
      ),
    },
    {
      question: (
        <p>
          {" "}
          What are the Benefits of Studying Abroad with TheStudentHelpline?{" "}
        </p>
      ),
      answer: (
        <p>
          Studying abroad with TheStudentHelpline offers global exposure,
          high-quality education, personal growth, and expanded career
          prospects. It is a transformative experience that enriches lives and
          creates lifelong memories.
          <ul>
            <li>
              <a href="/" style={{ fontWeight: "600" }}>Expert Guidance:</a>{" "}
              Knowledgeable counselors can guide through admission processes and
              course selection.
            </li>{" "}
            <li>
              {" "}
              <a href="/" style={{ fontWeight: "600" }}>Scholarships:</a> They may help
              you find and apply for scholarships.
            </li>
            <li>
              {" "}
              <a href="/" style={{ fontWeight: "600" }}>Accommodation Help:</a>{" "}
              Assistance with finding safe and reliable accommodation.
            </li>{" "}
            <li>
              {" "}
              <a href="/" style={{ fontWeight: "600" }}> Visa Assistance:</a> Guidance on
              visa application processes.
            </li>{" "}
            <li>
              {" "}
              <a href="/" style={{ fontWeight: "600" }}>
                {" "}
                Pre-departure Briefings:
              </a>{" "}
              Useful tips and advice before you travel.
            </li>{" "}
            <li>
              {" "}
              <a href="/" style={{ fontWeight: "600" }}> Global Perspective:</a> Studying
              abroad gives you an international perspective, helping you
              understand and adapt to different cultures and working styles.
            </li>
          </ul>
        </p>
      ),
    },
    {
      question: (
        <p>
          How TheStudentHelpline Can Enhance Your Career Prospects Through
          Studying Abroad?{" "}
        </p>
      ),
      answer: (
        <p>
          TheStudentHelpline can enhance your career prospects through studying
          abroad by providing access to high-quality education, global exposure,
          language proficiency, and a diverse network of connections. This
          international experience makes you more adaptable, culturally aware,
          and attractive to employers in today's global job market.
        </p>
      ),
    },
    {
      question: (
        <p>
          Study Abroad Scholarship Application Support at TheStudentHelpline?{" "}
        </p>
      ),
      answer: (
        <p>
          At TheStudentHelpline, we offer comprehensive support for study abroad
          scholarship applications. Our experienced team assists students in
          navigating the application process, providing guidance on required
          documents, crafting compelling essays, and showcasing their
          achievements effectively to increase their chances of securing
          scholarships.
          <ul>
            <li>
              Information: Providing information about available scholarships
              and their eligibility criteria.
            </li>
          </ul>
          <ul>
            <li>
              <a href="/" style={{ fontWeight: "600" }}>Documentation:</a> Assisting with
              document preparation, ensuring that all necessary paperwork is
              correctly filled out and submitted on time.
            </li>{" "}
            <li>
              {" "}
              <a href="/" style={{ fontWeight: "600" }}>Essays:</a> Guiding you in
              writing effective scholarship essays or personal statements.
            </li>
            <li>
              {" "}
              <a href="/" style={{ fontWeight: "600" }}>Application Process: </a> Helping
              you understand the application process and deadlines.
            </li>{" "}
            <li>
              {" "}
              <a href="/" style={{ fontWeight: "600" }}> Follow-up:</a> Assisting with
              follow-up communication with scholarship bodies.
            </li>{" "}
          </ul>
        </p>
      ),
    },
    {
      question: (
        <p>
          How TheStudentHelpline Can Help You Secure Funding for Your Studies?{" "}
        </p>
      ),
      answer: (
        <p>
          TheStudentHelpline can help you secure funding for your studies
          through our expertise in scholarship applications, financial aid
          guidance, and access to various funding opportunities. We assist
          students in identifying suitable scholarships, crafting compelling
          applications, and maximizing their chances of receiving financial
          support for their educational journey.
          <ul>
            <li>
              <a href="/" style={{ fontWeight: "600" }}>Scholarship Information: </a>{" "}
              They can provide information about available scholarships and help
              you apply for them.
            </li>{" "}
            <li>
              {" "}
              <a href="/" style={{ fontWeight: "600" }}>Student Loans:</a> They might
              assist with information on how to secure student loans, including
              explaining terms and conditions.
            </li>
            <li>
              {" "}
              <a href="/" style={{ fontWeight: "600" }}>Financial Planning:</a>They can
              guide you in planning your finances for your study abroad, helping
              you estimate costs and budget effectively.
            </li>{" "}
            <li>
              {" "}
              <a href="/" style={{ fontWeight: "600" }}> Part-Time Work:</a> They might
              assist with information on part-time work opportunities in the
              host country.
            </li>{" "}
            <li>
              {" "}
              <a href="/" style={{ fontWeight: "600" }}> Funding Events:</a>They could
              host or inform you about events, workshops, or webinars about
              funding education abroad.
            </li>{" "}
          </ul>
        </p>
      ),
    },
    {
      question: (
        <p>
          {" "}
          How TheStudentHelpline Can Assist You With Study Abroad Visa
          Application?{" "}
        </p>
      ),
      answer: (
        <p>
          TheStudentHelpline provides comprehensive assistance with study abroad
          visa applications. Our experienced team guides students through the
          visa process, ensuring they have the necessary documents, meet
          eligibility requirements, and submit a complete application. We offer
          support and advice to help students navigate any challenges that may
          arise during the visa application process, making the process smoother
          and increasing the likelihood of obtaining a study abroad visa
          successfully.
        </p>
      ),
    },
    {
      question: (
        <p>
          How TheStudentHelpline Offers Support and Guidance of Profile Building
          For Studying Abroad?{" "}
        </p>
      ),
      answer: (
        <p>
          At TheStudentHelpline, we offer expert support and guidance for
          profile building to help students enhance their chances of studying
          abroad. Our team assists in creating a strong academic and
          extracurricular profile, showcasing achievements, leadership skills,
          and relevant experiences. We provide personalized advice on improving
          resumes, crafting compelling statements of purpose, and building a
          well-rounded profile that stands out to potential universities,
          increasing the likelihood of admission to their desired study abroad
          programs.
        </p>
      ),
    },
    // Add more FAQ items as needed
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container main-container">
      <div className="faq-content">
        <h2 className="eachitem">FAQs</h2>{" "}
        {faqData.map((item, index) => (
          <FaqItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            toggleFaq={toggleFaq}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
