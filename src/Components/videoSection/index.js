import React from "react";
import "./style.css";
import "react-multi-carousel/lib/styles.css";
import { SlickReviewSlider} from "../slider/SlickSlider";
import { Testimonial } from "../testimonials/Testimonial";

function VideoSection() {
  const video = [
    {
      image: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww',
      studentName: 'Aadhya Singh',
      review: 'The help I got from The Student Helpline in improving my language skills, creating my resume, preparing for interviews, and dealing with past academic challenges made a big difference in my study abroad experience.'
    },
    {
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW58ZW58MHx8MHx8fDA%3D',
      studentName: 'Bobba Adaleru Reddy',
      review: 'Getting help from The Student Helpline for my visa made me move to Canada. They made the immigration process simple, so I could concentrate on my studies. I am thankful for their support.'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1686244745070-44e350da9d37?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFufGVufDB8fDB8fHww',
      studentName: 'Bhavika Arora',
      review: "With The Student Helpline's expert guidance and support, I successfully got admission to the University of Dundee. Their invaluable assistance made my academic dreams a reality."
    },
    {
      image: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW58ZW58MHx8MHx8fDA%3D',
      studentName: 'Riya Maitray',
      review: "I aspired to study in the UK, and The Student Helpline played a pivotal role in making it happen. Their guidance and support led to my successful admission in the UK. I'm thankful for their assistance in fulfilling my dream of studying there."
    },
    {
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww',
      studentName: 'Asad Khan',
      review: "The Student Helpline played an indispensable role in my path to securing a spot at Dartmouth University. Their unwavering support extended beyond admissions, encompassing invaluable guidance on Visa processes. Their help not only fulfilled my academic aspirations but also simplified the complex paperwork and procedures, ultimately making my dream of studying at an Ivy League institution a reality."
    },
    {
      image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww',
      studentName: 'Kuldeep Agarwal',
      review: "Thanks to The Student Helpline's unwavering support, my dream of attending the University of Santa Barbara came true. Their guidance and assistance were instrumental in navigating the admission process seamlessly."
    },
    {
      image: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D',
      studentName: 'Shayna Tyagi',
      review: "Receiving personalized guidance from The Student Helpline's dedicated IELTS experts had a profound impact on my test performance. Their tailored support led to substantial score enhancements, affirming the valuable assistance provided."
    },
    {
      image: 'https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&auto=format&fit=crop&h=153&q=80',
      studentName: 'Ira Mukherjee',
      review: "Thanks to The Student Helpline, I scored exceptionally well in my IELTS test after just 5-6 weeks of their outstanding training. Their mock tests thoroughly prepared me and helped me achieve an impressive overall band score of 8.2."
    },
    {
      image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D',
      studentName: 'Advik Chaudhary',
      review: "The support I got from The Student Helpline played a crucial role in getting me into USC. After facing rejection from two universities, they assisted me in improving my admission application. I'm truly thankful for their help, as it was solely due to their help that I received an acceptance letter from USC."
    },
    {
      image: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHx8MA%3D%3D',
      studentName: 'Jairaj Patel',
      review: "Thanks to The Student Helpline's expertise, I found the ideal college for my Business Analytics program. Their guidance ensured I made the right choice, aligning my interests and academic goals perfectly. Grateful for their invaluable support."
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1689266188052-704d33673e69?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8fDA%3D',
      studentName: 'Devika Jayakar',
      review: "My acceptance at UCLA is all thanks to The Student Helpline's expert guidance every step of the way. Their support made a big difference, helping me secure my spot at the university. I'm so grateful for their help. They were there for me and made it possible for me to get into UCLA."
    },
  ];

  return (
    <>
      <div className="div-texted12 main-container">
        <p className="test-text23">Testimonials</p>
        <h1 className="hear-text">hear from our students</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="tp-testimonial-2__wrapper p-relative">
            <SlickReviewSlider>
              {video.map((video) => (
                <div className="px-2 tp-testimonial-2__slider">
                  <Testimonial
                    image={video.image}
                    studentName={video.studentName}
                    review={video.review}
                  />
                </div>
              ))}
            </SlickReviewSlider>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoSection;
