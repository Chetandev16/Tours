import React, { useState } from "react";

const rTour = ({ id, image, info, price, name }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
