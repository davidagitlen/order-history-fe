import React from 'react';
import { shallow } from 'enzyme';
import Order from './Order';

describe('Order', () => {
  let wrapper, removePurchaseMock;

  beforeEach(() => {
    removePurchaseMock = jest.fn()
    wrapper = shallow(<Order id={1} image='broken-link.png' name='order' description='my order' price={100} removePurchase={removePurchaseMock}/>);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call removePurchase prop when button is pushed with cards id', () => {
    wrapper.find('button').simulate('click');
    expect(removePurchaseMock).toHaveBeenCalledWith(1);
  })
})