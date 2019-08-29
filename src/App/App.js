import React, { Component } from 'react';
import Orders from '../Orders/Orders';
import OrderForm from '../OrderForm/OrderForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders : [],
      error : ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/purchases')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => this.setState({orders : data, error : ''}))
      .catch(err => this.setState({error : err.message}))
      // .catch(err => console.log(err))
  }

  addNewPurchase = (newPurchase) => {
    const options = {
      method : 'POST',
      body : JSON.stringify(newPurchase),
      headers : {
        'Content-Type' : 'application/json'
      }
    }

    fetch('http://localhost:3001/api/v1/purchases', options)
      .then(res => res.json())
      .then(purchase => this.setState({orders : [...this.state.orders, purchase]}))
      .catch(err => console.log(err))
  }

  removePurchase = (id) => {
    fetch(`http://localhost:3001/api/v1/purchases/${id}`, {method : 'DELETE'})
      .then(res => res.json())
      .then(updates => this.setState({orders : updates, error : ''}))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>
            <OrderForm addNewPurchase={this.addNewPurchase}/>
          </div>
        </header>
        <div className='purchase-container'>
          <Orders orderArray={this.state.orders} removePurchase={this.removePurchase}/>
        </div>
      </div>
    );
  }
}

export default App;
