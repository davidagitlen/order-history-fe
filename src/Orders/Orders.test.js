import React from 'react';
import { shallow } from 'enzyme';
import Orders from './Orders';

describe('Orders', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Orders orderArray={[{id: 1, image: 'broken-link.png', name: 'Blib', description: 'blob', price: 100}]}/>) 
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})