import React from "react";
import "./style.css";
import "react-multi-carousel/lib/styles.css";
import { SlickLogoSlider} from "../slider/SlickSlider";
import { NameCard } from "./NameCard";
import { generateDarkColor } from "../../constants/helperFunction";

// Images
import Name1 from "../../images/img (1).webp";
import Name2 from "../../images/img (2).webp";
import Name3 from "../../images/img (3).webp";
import Name4 from "../../images/img (4).webp";
import Name5 from "../../images/img (5).webp";
import Name6 from "../../images/img (6).webp";
import Name7 from "../../images/img (7).webp";
import Name8 from "../../images/img (8).webp";
import Name9 from "../../images/img (9).webp";
import Name10 from "../../images/img (10).webp";
import Name11 from "../../images/img (11).webp";
import Name12 from "../../images/img (12).webp";

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
