import React, { useState } from "react";
const[readMore, setReadMore] = useState(false);

const Tour = ({ id, image, info, price, name }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readMore?info:`${info.substring(0,200)}`}...</p>
        <button className="delete-btn" onClick>Not intrested</button>
      </footer>
    </article>
  );
};

export default Tour;
