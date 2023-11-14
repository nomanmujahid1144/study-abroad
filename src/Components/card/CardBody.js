import React from "react"
export const CardBody = ({ date, heading, data }) => {
    return (  
      <>
        <h6 class="card-subtitle mb-2 text-body-secondary text-date">{date}</h6>
        <h5 class="card-title text-being">{heading !== '' ? heading.length > 20 ?  heading.slice(0, 20) + '...' : heading : ''}</h5>
        <p class="card-text text-product" dangerouslySetInnerHTML={{
              __html: data !== '' ? data.length > 50 ?  data.slice(0, 50) + '...' : data : '',
            }}></p>
      </>
    )
}