import React from 'react';
import { shallow } from 'enzyme';
import OrderForm from './OrderForm';

describe('OrderForm', () => {

  let wrapper, mockAddNewPurchase, mockRemovePurchase;

  beforeEach(() => {
    mockAddNewPurchase = jest.fn();
    mockRemovePurchase = jest.fn();
    wrapper = shallow(<OrderForm addNewPurchase={mockAddNewPurchase} removePurchase={mockRemovePurchase}/>);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on handleChange', () => {
    const mockEvent = {
      target : {
        name : 'name',
        value : 'Suspicious package'
      }
    }
    const expected = 'Suspicious package';

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual(expected);
  });

  it('should reset state when resetChanges is called', () => {
    global.Date.now = jest.spyOn(global.Date, 'now').mockImplementation(() => 100);
    const initialValues = { img: 'broken-link.png', name: 'Blib', description: 'a blob', price: 10000, id: 100 };
    const expected = {img : 'broken-link.png', name : '', description : '', price : '', id : 100};
    wrapper.setState(initialValues);
    expect(wrapper.state('name')).toEqual('Blib');
    wrapper.instance().resetChanges();
    expect(wrapper.state()).toEqual(expected);
  });

  it('should call resetChanges when handleClick is called', () => {
    wrapper.instance().resetChanges = jest.fn();
    const mockEvent = {preventDefault : jest.fn()};
    wrapper.instance().handleClick(mockEvent);
    expect(wrapper.instance().resetChanges).toHaveBeenCalled();
  });

})