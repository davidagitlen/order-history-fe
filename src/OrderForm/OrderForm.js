import React, { Component } from 'react';
import './OrderForm.css'

class OrderForm extends Component {
  constructor() {
    super();
    this.state = {
      img : 'broken-link.png',
      name : '',
      description : '',
      price : '',
      id : Date.now()
    }
  }

  handleChange = e => {
    this.setState({[e.target.name] : e.target.value});
  }

  resetChanges = () => {
    this.setState({img : 'broken-link.png', name : '', description : '', price : '', id : Date.now()});
  }

  handleClick = e => {
    e.preventDefault();
    this.props.addNewPurchase(this.state);
    this.resetChanges();
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
        <button onClick={this.handleClick}>Add Purchase</button>
      </form>
    )
  }
}

export default OrderForm;