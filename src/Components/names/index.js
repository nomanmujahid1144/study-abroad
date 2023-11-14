import React from "react";
import "./style.css";
import "react-multi-carousel/lib/styles.css";
import Name1 from "../../images/img (1).png";
import Name2 from "../../images/img (2).png";
import Name3 from "../../images/img (3).png";
import Name4 from "../../images/img (4).png";
import Name5 from "../../images/img (5).png";
import Name6 from "../../images/img (6).png";
import Name7 from "../../images/img (7).png";
import Name8 from "../../images/img (8).png";
import Name9 from "../../images/img (9).png";
import Name10 from "../../images/img (10).png";
import Name11 from "../../images/img (11).png";
import Name12 from "../../images/img (12).png";
import { SlickLogoSlider} from "../slider/SlickSlider";
import { NameCard } from "./NameCard";
import { generateDarkColor} from "../../constants/helperFunction";

const Images = [
  {
    image: Name1,
    heading: 'NDTV'
  },
  {
    image: Name2,
    heading: 'THE HINDUS'
  },
  {
    image: Name3,
    heading: 'Inc42'
  },
  {
    image: Name4,
    heading: 'Entrepreneur'
  },
  {
    image: Name5,
    heading: 'The Celegraph'
  },
  {
    image: Name6,
    heading: 'INDIA TODAY THE HINDUS'
  },
  {
    image: Name7,
    heading: 'THE TIMES OF INDIA'
  },
  {
    image: Name8,
    heading: 'YOURSTORY'
  },
  {
    image: Name9,
    heading: 'BUSINESS STANDARD'
  },
  {
    image: Name10,
    heading: 'mint'
  },
  {
    image: Name11,
    heading: 'ET'
  },
  {
    image: Name12,
    heading: 'mint hint'
  }
];

function Name() {
  return (
    <div>
      <div className="center-cards">
        <div className="width-card">
          <SlickLogoSlider >
              {Images.map((image) => (
                <div className="px-4">
                  <NameCard
                    Image={image.image}
                    backgroundColor={generateDarkColor(image.heading)}
                  />
                </div>
              ))}
          </SlickLogoSlider>
        </div>
      </div>
    </div>
  );
}

export default Name;
