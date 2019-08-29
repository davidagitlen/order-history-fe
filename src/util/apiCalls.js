export const getOrderHistory = () => {
  return fetch('http://localhost:3001/api/v1/purchases')
    .then(res => res.json())
}

export const postPurchase = newPurchase => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newPurchase),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch('http://localhost:3001/api/v1/purchases', options)
    .then(res => res.json())
}

export const deletePurchase = id => {
  return fetch(`http://localhost:3001/api/v1/purchases/${id}`, { method: 'DELETE' })
    .then(res => res.json())
}