import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { getOrderHistory, postPurchase, deletePurchase } from '../util/apiCalls.js';

jest.mock('../util/apiCalls.js');

describe('App', () => {
  let wrapper; 

  beforeEach(() => {
    getOrderHistory.mockImplementation(() => {
      return Promise.resolve([{id: 1, image: 'broken-link.png', name: 'Blah', description: 'blah', price: 100}])
    });
    postPurchase.mockImplementation(() => {
      return Promise.resolve({id: 2, image: 'broken-link.png', name: 'Two', description: 'two', price: 200})
    });
    wrapper = shallow(<App />);
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state with data after mounting', () => {
    shallow(<App />);
    expect(getOrderHistory).toHaveBeenCalled();
  });

  it.skip('should add a purchase when addNewPurchase is called', () => {

  })
})
