export const getOrderHistory = () => {
  return fetch('http://localhost:3001/api/v1/purchases')
    .then(res => {
      if(!res.ok) {
        throw Error('Error fetching purchases!')
      }
      return res.json()})
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
    .then(res => {
      if (!res.ok) {
        throw Error('Error posting purchases!')
      }
      return res.json()
    })
}

export const deletePurchase = id => {
  return fetch(`http://localhost:3001/api/v1/purchases/${id}`, { method: 'DELETE' })
    .then(res => {
      if (!res.ok) {
        throw Error('Error deleting purchases!')
      }
      return res.json()
    })
}