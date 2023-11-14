import React from "react";

export const LoginHeadings = ({loginHeading, loginDescription}) => {
    return (
        <div className="centertxtlog">
            <p className="logtxt">{loginHeading}</p>
            <p className="logpara">{loginDescription}</p>
        </div>
    )
}