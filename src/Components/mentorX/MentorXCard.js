import React from "react";

export const MentorXCard = ({image, heading, backgroundColor}) => {
    return (
        <div className="mentorcard-center" style={{backgroundColor : `${backgroundColor}`}}>
            <div className="hover-up" style={{display: 'contents'}}>
                <img src={image} alt="" />
                <p className="text-center-mentor">
                   {heading}
                </p>
            </div>
        </div>
    )
}