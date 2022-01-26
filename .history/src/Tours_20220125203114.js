import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  const {id,name,info} = props;
  return <div>
    {id} <br></br> {name} <br/> {info}
  </div>;
};

export default Tours;
