import React, { Component } from 'react';
import Orders from '../Orders/Orders';
import OrderForm from '../OrderForm/OrderForm';
import { getOrderHistory, postPurchase, deletePurchase } from '../util/apiCalls.js';
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
    getOrderHistory()
      .then(data => this.setState({orders : data, error : ''}))
      .catch(err => this.setState({error : err.message}))
  }

  addNewPurchase = (newPurchase) => {
    postPurchase(newPurchase)
      .then(purchase => this.setState({orders : [...this.state.orders, purchase]}))
      .catch(err => console.log(err))
  }

  removePurchase = (id) => {
    deletePurchase(id)
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