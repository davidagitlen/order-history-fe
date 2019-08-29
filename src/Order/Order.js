import React from 'react';
import './Order.css';

const Order = ({id, image, name, description, price, removePurchase}) => {
  
  return (
    <div className='order-card'>
      <div className='card-left'>
        <img src={image} alt='' />
      </div>
      <div className='card-center'>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className='card-right'>
        <p>${price}</p>
        <button onClick={() => removePurchase(id)}>
          Remove From History
          </button>
      </div>
    </div>
  )
}

export default Order;