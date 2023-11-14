import React from "react";

export const ContactCard = ({children, width}) => {
    return (
        <div className="seconddivlogg2" style={{width: `${width}`}}> 
            {children}
        </div>
    )
}