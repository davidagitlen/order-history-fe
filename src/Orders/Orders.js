import React from 'react';
import Order from '../Order/Order';

const Orders = ({orderArray}) => {

  const orderList = orderArray.map(order => <Order id={order.id} key={order.id} image={order.img} name={order.name} description={order.description}/>)
  
  return (
    <div>
      {orderList}
    </div>
  )

}

export default Orders; 