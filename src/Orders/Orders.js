import React from 'react';
import Order from '../Order/Order';
import './Orders.css';

const Orders = ({orderArray}) => {

  const orderList = orderArray.map(order => <Order id={order.id} key={order.id} image={order.img} name={order.name} description={order.description} price={order.price}/>)
  
  return (
    <div className='orders-container'>
      {orderList}
    </div>
  )

}

export default Orders; 