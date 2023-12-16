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
      question: <p> Can I go abroad without an agency?</p>,
      answer: (
        <p>
          Yes, you can prepare to study overseas without agency only if you have the right information and a strong application that will impress the admission board easily. If you think professional needs to take a look at your profile, The Student Helpline is right here for free online study abroad counseling! 
        </p>
      ),
    },
    {
      question: (
        <p>
          {" "}
          Which country is good for study abroad?{" "}
        </p>
      ),
      answer: (
        <p>
          The USA, UK, Canada, Australia, and China are some of the best countries for study abroad courses. If you wish to pursue overseas education and enhance your skills then boost up your process with the help of a reliable consultant. The Student Helpline is one of the leading international overseas consultants in India that can help you get authentic information and prepare for admission to the best universities in your preferred country.
         
        </p>
      ),
    },
    {
      question: (
        <p>
          Which is the cheapest country to study?{" "}
        </p>
      ),
      answer: (
        <p>
          Some of the cheapest countries to study abroad are Germany, Norway, Russia and a few universities in the US. If you are looking for proper study abroad guidance then, contact the consultants from The Student Helpline for genuine and cost effective help right away.
        </p>
      ),
    },
    {
      question: (
        <p>
          Why choose The Student Helpline?{" "}
        </p>
      ),
      answer: (
        <p>
         The Student Helpline is the leading study abroad agency in India. If you are looking for a transparent approach to reach your goals and a professional to have your back whenever your process is hitting a few speed breakers then, they are the best when it comes to international studies. The Student Helpline has some of the most knowledgeable and experienced overseas education consultants who can guide a student in the best way possible.
        </p>
      ),
    },
    {
      question: (
        <p>
          How much does a study abroad agent charge?{" "}
        </p>
      ),
      answer: (
        <p>
         The Student Helpline charges no money from students looking for consultancy. If you wish to know where you stand, get your profile assessed The Student Helpline can help you with free of cost study overseas assistance at any time during the day.
         
        </p>
      ),
    },
    {
      question: (
        <p>
          {" "}
          How can I arrange money to study abroad?{" "}
        </p>
      ),
      answer: (
        <p>
          There are a number of educational loans that one can take to unburden their financial load while planning get an admission in the best study abroad colleges. Several banks offer low interest and interest free loans in order to help students achieve their dream and get what they deserve. If you are looking for abroad education loans but don't have much knowledge about it, The Student Helpline can be of great help. All you need to do is dial their number and speak to an expert!
        </p>
      ),
    },
    {
      question: (
        <p>
         What is the cheapest way to study abroad?{" "}
        </p>
      ),
      answer: (
        <p>
         If you are looking for the cheapest way to find best study abroad programs then, looking for the best scholarships can be a feasible option. There are dozens of scholarships that are available to commanders throughout the year. In searching for the best scholarships you will understand that they are either funded by your government, international government or the university you wish to take admission in. To check the eligibility of your preferred scholarship, visit The Student Helpline. Being the best study abroad service, they are capable of helping you choose and apply for one on your behalf as well.
        </p>
      ),
    },

    {
      question: (
        <p>
          Are study abroad consultants free?{" "}
        </p>
      ),
      answer: (
        <p>
          Yes, most study abroad consultants give advice and help assess students' profiles for free. They begin by asking you a few questions on the basis of which they decide where you stand and what is your total number of points. If you think you don't meet the requirements of any study abroad program yet, then visit The Student Helpline for help!
        </p>
      ),
    },

    {
      question: (
        <p>
          Best place to study abroad for Indian students?{" "}
        </p>
      ),
      answer: (
        <p>
         Popular study abroad countries for Indian students are mainly Germany, New Zealand, Australia and the UK offering tons of courses and colleges with the best faculty and infrastructure. If you wish to know more about the environment, colleges and universities according to your interest, feel free to connect to The Student Helpline for free online study abroad counseling.
        </p>
      ),
    }, 
    
    {
      question: (
        <p>
         Is paying for career counseling worth it?{" "}
        </p>
      ),
      answer: (
        <p>
          Yes, indeed it is! Most students are unaware of the greatest opportunities available in foreign countries for them. Seeking study abroad consultancy can help them get a personalised opinion based on their preferences and the best opportunities that might get missed otherwise. If you are looking for a suitable admission consultant in India, feel free to connect with The Student Helpline! A trusted partner and your study buddy for personalised help.
        </p>
      ),
    }, 
    
    {
      question: (
        <p>
          What is the advantage of career counseling?{" "}
        </p>
      ),
      answer: (
        <p>
          There are several advantages of career counseling like:

          <ul>
            <li>
            Understanding your strengths
            </li>{" "}
            <li>
              {" "}
            	Getting an insight into where your profile stands
            </li>
            <li>
              {" "}
              Personalized assistance from industry experts
            </li>{" "}
            <li>
              {" "}
              Guaranteed path to success
            </li>{" "}
          </ul>
          If you are facing trouble understanding your way to success and find out the best way to get higher education in abroad then don't hesitate to visit The Student Helpline right away!
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
        <h2 className="eachitem">Student Asked Questions - FAQ’s</h2>{" "}
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
