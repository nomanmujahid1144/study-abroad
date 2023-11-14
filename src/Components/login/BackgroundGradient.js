import React from "react";

export const BackgroundGradiant = ({height,children}) => {
    return (
        <div className="gradient" style={{height: height}}>
            {children}
        </div>
    )
}