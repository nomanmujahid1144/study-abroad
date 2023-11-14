import React from "react";
import { Link } from "react-router-dom";

export const SeperateNavigation = ({position}) => {
    return (
        <Link to="/">
            <img style={{position: `${position}`}} className="logoabs" alt="abc" src="../images/studentlogo.png" />
        </Link>
    )
}