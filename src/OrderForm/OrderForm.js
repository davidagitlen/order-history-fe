import React, { Component } from 'react';

class OrderForm extends Component {
  constructor() {
    super();
    this.state = {
      name : '',
      description : '',
      price : '',
      id : Date.now()
    }
  }

  handleChange = e => {
    this.setState({[e.target.name] : e.target.value});
  }

  render() {
    return (
      <form className='order-form'>
        <input 
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Product name'
          onChange={this.handleChange}
          />
        <input
          type='text'
          name='description'
          value={this.state.description}
          placeholder='Product description'
          onChange={this.handleChange}
          />
        <input 
          type='number'
          name='price'
          value={this.state.price}
          placeholder='Produce price'
          onChange={this.handleChange}
          />
        <button onClick=''>Submit Purchase</button>
      </form>
    )
  }
}

export default OrderForm;