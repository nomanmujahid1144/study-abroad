import React from "react";

export const LoginCard = ({children, width}) => {
    return (
        <div className="seconddivlogg" style={{width: `${width}`}}> 
            {children}
        </div>
    )
}