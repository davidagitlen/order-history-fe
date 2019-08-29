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



  render() {
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>
            <OrderForm />
          </div>
        </header>
        <div className='purchase-container'>
          <Orders orderArray={this.state.orders} />
        </div>
      </div>
    );
  }
}

export default App;
