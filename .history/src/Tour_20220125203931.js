import React, { useState } from "react";

const Tour = ({ id, image, info, price, name }) => {
  return (
    <article className="">
      <img src={image} alt={name} />
      <footer>
        <div className="">
          <h4>{name}</h4>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
