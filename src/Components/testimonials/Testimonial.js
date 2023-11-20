import React from "react";
import { Rating } from "react-simple-star-rating";

export const Testimonial = ({image, studentName, review}) => {
    return ( 
        <>
        <div className="tp-testimonial-2__box white-bg">
            <div className="tp-testimonial-2__avata">
                <img src={image} alt="no Image" />
                <span className="tp-testimonial-2__ratting">
                    <Rating
                        size={30}
                        readonly
                        transition
                        allowFraction
                        initialValue={5}
                    /> 
                    {/* <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i> */}
                </span>
            </div> 
            <div className="tp-testimonial-2__review">
                <p>{review.length > 180 ? review.substring(0, 180) + "..." : review}</p>
                <h3>{studentName}</h3>
                {/* <span>CEO, Psdboss</span> */}
            </div>
        </div>
        </>
    )
}