// import { Button } from "antd";
import React, { useState } from "react";
import "./styles.css";

const ContentItem = ({ question, answer, index, isActive, toggleContent }) => {
  return (
    <div className={`content-item cursor-pointer ${isActive ? "active" : ""} eachitem`}
      onClick={() => toggleContent(index)} >
      <div className="content-head">
        {" "}
        {/* <div className="content-number">
          <Button
            className="content-button" // Add a class to target the button
            style={{
              backgroundImage: isActive
                ? "linear-gradient(135deg, #FFB201, #A27FFF)"
                : "none",
              color: isActive ? "white" : "initial", // Change the text color to white when active
            }}
          >
            {index + 1}
          </Button>
        </div> */}
        <div className="content-question">{question}</div>
      </div>

      {isActive && <div className="content-answer">{answer}</div>}
    </div>

    
  );
};

const Content = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const contentData = [
    {
      question: <h2> How Do Our Abroad Education Consultants Help Students Reach their Ultimate Goal? </h2>,
      answer: (
        <p>
          Being the finest admission consultant in India The Student Helpline never forgets to prioritize the concerns of a student. Following a 5 step process, we ensure to provide the best comfort to students while they are preparing to study abroad. 
          <ul>
            <li>
             <strong style={{ fontWeight: "600" }}>Understanding the Goal: </strong> The process of free online study abroad counseling begins when our experts study your profile and understand your goals. The journey to finding the best study abroad courses becomes much easier when the student understands what their goal is. We focus on students' interests, preferences, age and other details they want us to know about.
            </li>{" "}
            <li>
              {" "}
             <strong style={{ fontWeight: "600" }}>Research: </strong> After gathering all the relevant information, our consultants brainstorm and research to find out the best available study abroad colleges and universities in the country preferred by the students. If the student has not decided on the country yet, we research the most suitable place according to the student's preferences.
            </li>
            <li>
              {" "}
             <strong style={{ fontWeight: "600" }}>Application Guidance:  </strong> After our overseas career counselor is clear with the course and country the student wants to go for, we then start working on the application. Creating a robust application is essentially important for a student to face the least amount of hurdles during their study overseas admission process. Our abroad education consultants focus on aspects like language proficiency scores, resumes, SOP, interview preparation and reasoning of backlogs if any.
            </li>{" "}
            <li>
              {" "}
             <strong style={{ fontWeight: "600" }}> Planning Finance: </strong> Once the admission is confirmed and the student receives the offer letter, the next thing under our study abroad guidance is planning finances. Although students get an idea of how much they might be spending once they get into one of the best study abroad colleges, we break down everything and calculate an estimated cost so that the student can plan the finances accordingly.
            </li>{" "}
            <li>
              {" "}
             <strong style={{ fontWeight: "600" }}> Post Arrival and Pre Departure Help: </strong> Along with the preparation and admission in the most suitable study abroad courses, our services also help students with accommodation recommendations, networking, part time job offers and lots more so that they don’t get any surprises while landing on international borders.
            </li>{" "}
          </ul>
        </p>
      ),
    },
    {
      question: (
        <h2>
          {" "}
          What Are the Advantages of Seeking Our Overseas Consultancy?{" "}
        </h2>
      ),
      answer: (
        <p>
        Seeking overseas counseling from The Student Helpline comes with several advantages like:  
        <ul>
          <li>
           <strong style={{ fontWeight: "600" }}>Free Application Assessment : </strong> Most students like to visit an abroad consultancy with a prepared profile and IELTS score. The Student Helpline provides the advantage of availing a free application assessment so that you know where you stand and how much you need to work on your profile to reach your goal.
          </li>{" "}
          <li>
            {" "}
           <strong style={{ fontWeight: "600" }}>One on One Sessions : </strong> University Interviews can be challenging, especially when a student has never attended something like this before. Our overseas education services include personalized one-on-one sessions for all our students so that they can perform confidently and get admission to their dream college without facing any hiccups in the process.
          </li>
          <li>
            {" "}
           <strong style={{ fontWeight: "600" }}>Assistance with Accommodation:  </strong> If you don’t have a known person living near your college or university, don't you worry! The Student Helpline has got it covered for you. With a myriad of contacts and tie-ups, our academic consultant can fix you up with the best accommodations along with discounted rates so that you have a roof under your head when you land in a foreign land.
          </li>{" "}
          <li>
            {" "}
           <strong style={{ fontWeight: "600" }}> Networking: </strong> The Student Helpline has ties with a number of universities and colleges that lie under the international borders. Being the best study abroad consultants, they understand being new can be hard especially when the people are different from the ones you grew up with. They will ensure to safely help you migrate to a place where students and teachers are friendly to coordinate for the rest of the semester and help you cover up for what you have missed.
          </li>{" "}
          <li>
            {" "}
           <strong style={{ fontWeight: "600" }}> Pre Departure Orientation: </strong> The Student Helpline believes in preparing students with the best. They arrange a pre-departure session so that you know all the essential things before leaving your country. As it is a new experience for most of the students visiting under a study abroad program, they make sure to cover everything right from the basics to complex situations.
          </li>{" "}
        </ul>
      </p>
      ),
    },
    {
      question: (
        <p>
         Why We Proudly Call Ourselves the Best Study Abroad Consultancy In India?{" "}
        </p>
      ),
      answer: (
        <p>
         The Student Helpline is an overseas consultancy that has helped even the toughest profiles find a genuine way to seek education and bloom their career abroad. If you are still in a doubtful situation, we have four reasons to prove why our study abroad process is better than others!
         <ul>
          <li>
           <strong style={{ fontWeight: "600" }}>100% Transparency : </strong> Transparency is a cornerstone when it comes to seeking study abroad assistance from The Student Helpline. With a policy of honesty, we ensure to keep the students informed of where they stand in the race. Along with this, we provide clear and accurate information regarding every aspect when it comes to study abroad programs, accommodation, living cost etc. With the help of the best overseas education consultants, we try to prepare the students for the real world scenario.
          </li>{" "}
          <li>
            {" "}
           <strong style={{ fontWeight: "600" }}>Guaranteed Visa Approval  : </strong> Visa approval can sometimes be even more difficult than getting admission to study abroad in your preferred college. The experience of our overseas education consultants ensures that the student faces minimal hiccups while working on visa approval. All our abroad education consultants ensure to personally work upon visa approval and get it done as soon as possible.
          </li>
          <li>
            {" "}
           <strong style={{ fontWeight: "600" }}>Proven Success :  </strong> Students who visit The Student Helpline are excited and anxious thinking whether they will make it or not. Our excellent team members work double their capacity, making sure that nothing goes wrong during your study overseas process and everything goes according to plan without failure! Till date, we have served more than 98,000+ students and most of them have successfully settled in their preferred country with the help of our overseas education services.
          </li>{" "}
          <li>
            {" "}
           <strong style={{ fontWeight: "600" }}> 100% Ethical : </strong> Being the best study abroad consultant in India, The Student Helpline upholds supreme level ethical standards making sure that all the students receive unbiased assistance that aligns the best when it comes to the interests of students.
          </li>{" "}
         
        </ul>
        </p>
      ),
    },
    {
      question: (
        <p>
          What Are the Tests our Study Overseas Consultants Can Help You With?{" "}
        </p>
      ),
      answer: (
        <p>
        Preparing for tests to study abroad can be challenging especially when you are not aware of the format and the type of questions that can be asked from you. Our international overseas services ensure that you prepare for the most difficult situations with the help of free study materials, interactive one-on-one sessions, mock tests and more. 
Our overseas consultancy has a major expertise in tutoring for exams like:
<ul>
          <li>
           <strong style={{ fontWeight: "600" }}>PTE, </strong> an abbreviation for Pearson Test of English, is an overall assessment to test proficiency in the English language. 
          </li>{" "}
          <li>
            {" "}
           <strong style={{ fontWeight: "600" }}>●	IELTS,</strong> an abbreviation for English Language Testing System is a globally accepted form of English language assessment for international studies and the ability for a student to survive in a foreign country if there are language barriers.
          </li>
          <li>
            {" "}
           <strong style={{ fontWeight: "600" }}>●	TOEFL,</strong> is an abbreviation for Test of English as Foreign Language mostly used for students who wish to master the skill of English for academic purposes from a foreign university or college.
          </li>{" "}
          <li>
            {" "}
           <strong style={{ fontWeight: "600" }}> GTE, </strong> an abbreviation for Genuine Temporary Grant a compulsory assessment for international students who wish to apply for a student visa in Australia.
          </li>{" "}
          <li>
            {" "}
           <strong style={{ fontWeight: "600" }}> GMAT, </strong> an abbreviation for the Graduate Management Admission Test, is an exam to understand the most relevant skills for admission to business schools.
          </li>{" "}
        </ul>
        </p>
      ),
    },

    {
        question: (
          <p>
            Overseas Career Consultant Services Help In{" "}
          </p>
        ),
        answer: (
          <p>
          Students from all over the globe wish to get the best education from the most prestigious colleges and universities. If you are one of them but confused about which one is best for you then, our overseas education consultants can provide you with personalized guidance for courses like:
  <ul>
            <li>
             <strong style={{ fontWeight: "600" }}>MBA</strong> 
            </li>{" "}
            <li>
              {" "}
             <strong style={{ fontWeight: "600" }}>Scholarships</strong>
            </li>
            <li>
              {" "}
             <strong style={{ fontWeight: "600" }}>Bachelors</strong> 
            </li>{" "}
            <li>
              {" "}
             <strong style={{ fontWeight: "600" }}>Masters </strong> 
            </li>{" "}
            <li>
              {" "}
             <strong style={{ fontWeight: "600" }}>Msc </strong> 
            </li>{" "}
            <li>
              {" "}
             <strong style={{ fontWeight: "600" }}>Diploma </strong> 
            </li>{" "}
            <li>
              {" "}
             <strong style={{ fontWeight: "600" }}>PhD </strong> 
            </li>{" "}
            <li>
              {" "}
             <strong style={{ fontWeight: "600" }}>Certifications </strong> 
            </li>{" "}
          </ul>
          If you have a unique profile and are looking for someone to untangle the issue with reasonable overseas education solutions then, The Student Helpline is the right help for you!
          </p>
        ),
      },

    {
      question: (
        <p>
          Does The Student Helpline Provide Language Assistance to Study Abroad?{" "}
        </p>
      ),
      answer: (
        <p>
         Thousands of students face a major language barrier as soon as they land in a foreign country to take advantage of a study abroad program. The Student Helpline provides tailored overseas education solutions which also include learning a language. If you have no idea of the dialect but can't wait to study abroad, we can help you with: 
          <ul>
            <li>
            French 
            </li>{" "}
            <li>
              {" "}
              Spanish
            </li>
            <li>
              {" "}
              German
            </li>{" "}
            <li>
              {" "}
              	Dutch
            </li>{" "}
            <li>
              {" "}
              Chinese
            </li>{" "}
            <li>
              {" "}
              	Russian
            </li>{" "}
            <li>
              {" "}
              Ukrainian
            </li>{" "}
          </ul>
          This is not it! Since the time we established ourselves in the industry, we have included 11+ languages in our services. To know more about our overseas education classes on language, contact our experts today.
          <br/>
          <strong>Receive Genuine Guidance for International Studies Today!</strong>
          <br/>
          Take a deep dive into your profile and enrich it with the experience of our best study abroad experts in India.
          <p>Talk to study abroad consultant today!</p>
        </p>
      ),
    },
   
    // Add more Content items as needed
  ];

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="content-container main-container">
      <div className="content-content">
        <h2 className="eachitem"></h2>{" "}
        {contentData.map((item, index) => (
          <ContentItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            toggleContent={toggleContent}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
