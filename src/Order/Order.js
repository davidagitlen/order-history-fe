import React from 'react';

const Order = ({id, image, name, description}) => {
  
  return (
    <div>
      <img src={image} alt='' />
      <h2>{name}</h2>
    </div>
  )
}

export default Order;