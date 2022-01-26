import React, { useState } from "react";

const Tour = ({ id, image, info, price, name }) => {
  const [readMore, setReadMore] = useState(false);
  const readButton = "read more";
  const readLess= "read less"
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
          >{readMore? readButton:readLess}</button>
        </p>
        <button className="delete-btn" onClick>
          Not intrested
        </button>
      </footer>
    </article>
  );
};

export default Tour;