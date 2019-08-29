import React from 'react';
import './Order.css';

const Order = ({id, image, name, description, price}) => {
  
  return (
    <div className='order-card'>
      <img src={image} alt='' />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <button>Delete From History</button>
    </div>
  )
}

export default Order;