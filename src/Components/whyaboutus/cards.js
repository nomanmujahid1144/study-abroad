import React from "react";
import "./cards.css";
import imageOne from '../../images/abouttwo.png';
import imageTwo from '../../images/aboutthree.png';
import imageThree from '../../images/aboutfour.png';
import "react-multi-carousel/lib/styles.css";
import { AboutUsSlickSlider} from "../slider/SlickSlider";
import { WhyAboutUsCard } from "./WhyAboutUsCard";
// const handleDragStart = (e) => e.preventDefault();
const items = [
  {
    heading: 'Mentorship from Abroad',
    img: imageOne,
    description: 'Explore a wide range of courses and find your ideal academic path with our comprehensive search tool.'
  },
  {
    heading: 'Get Recommendation',
    img: imageTwo,
    description: 'Explore a wide range of courses and find your ideal academic path with our comprehensive search tool.'
  },
  {
    heading: 'Search Course',
    img: imageThree,
    description: 'Explore a wide range of courses and find your ideal academic path with our comprehensive search tool.'
  },
  {
    heading: 'Mentorship from Abroad',
    img: imageOne,
    description: 'Explore a wide range of courses and find your ideal academic path with our comprehensive search tool.'
  },
  {
    heading: 'Get Recommendation',
    img: imageTwo,
    description: 'Explore a wide range of courses and find your ideal academic path with our comprehensive search tool.'
  },
  {
    heading: 'Search Course',
    img: imageThree,
    description: 'Explore a wide range of courses and find your ideal academic path with our comprehensive search tool.'
  },
];

export const Cardabwhy = () => {
  return (
      <div className="center-curr main-container">
        <AboutUsSlickSlider className="flex gap-5 w-100 justify-content-between">
          {items.map((item) => (
            <div className="px-4">
              <WhyAboutUsCard item={item}/>
            </div>
          ))}
        </AboutUsSlickSlider>
      </div>
  );
}
