import React from "react";
export const NameCard = ({ Image, backgroundColor }) => {
    return (
        <div className="card-center" style={{backgroundColor : `${backgroundColor}`}}>
            <img src={Image} alt="no-img" />
        </div>
    )
}