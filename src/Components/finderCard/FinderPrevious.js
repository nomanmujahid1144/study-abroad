import React from "react";
import Arrow from "../../images/div (1).png";
import { useNavigate } from "react-router-dom";


export const PreviousFinder = ({margintop, heading, isHeading}) => {
    const navigate = useNavigate();


    return (
        <div className="div-text-div" style={{marginTop:margintop}}>
            {isHeading ? <img src={Arrow} alt="" className="im-size12" onClick={() => navigate(-1)} /> : null}
            <p className="where-text">{heading}</p>
        </div>
    )
}