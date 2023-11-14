import React from "react"
export const WhyAboutUsCard = ({ item }) => {
    return (
        <div className="mentorcard-center1-about">
            <img  src={item.img} alt="" />
            <p className="text-center-mentor-about px-0">
            {item.heading}
            </p>
            <p className="cardtxtabot">
            {item.description}
            </p>
        </div>
    )
}