import React from "react";
import "./style.css";
import "react-multi-carousel/lib/styles.css";
import MentorLogo from "../../images/Vector (11).png";
import MentorImage from "../../images/img (13).png";
import MentorLogo1 from "../../images/Vector (12).png";
import MentorLogo2 from "../../images/Group (8).png";
import MentorLogo3 from "../../images/Vector (14).png";
import { Container } from "react-bootstrap";
import { SlickMentorxSlider} from "../slider/SlickSlider";
import { MentorXCard } from "./MentorXCard";
import { generateLightColor } from "../../constants/helperFunction";

function MentorX() {


  const MentorX = [
    {
      image: MentorLogo3,
      heading: 'Credit Card'
    },
    {
      image: MentorLogo,
      heading: 'International Bank Account'
    },
    {
      image: MentorLogo,
      heading: 'International Money Transfer '
    },
    {
      image: MentorLogo2,
      heading: 'Housing'
    },
    {
      image: MentorLogo1,
      heading: 'International Sim'
    },
  ]

  return (
    <div className="div-whole-men ">
      <div className="w-100">
        <p className="text-mentor">
          mentor<a href="/" className="text-x">X</a>
        </p>
        <p className="text-x">
          one stop solution{" "}
          <a href="/" className="text-mentor">your study abroad needs</a>
        </p>
        <Container>
          <img src={MentorImage} alt="" className="mentor-img" />
          <div className="mentor-cors-center">
            <div className="mentor-width-card">
              <SlickMentorxSlider>
                {MentorX.map((mentorx) => (
                  <div className="px-4">
                    <MentorXCard
                      image={mentorx.image}
                      heading={mentorx.heading}
                      backgroundColor={generateLightColor(mentorx.heading)}
                    />
                  </div>
                ))}
              </SlickMentorxSlider>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MentorX;
