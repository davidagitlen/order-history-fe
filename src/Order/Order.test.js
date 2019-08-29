import React from 'react';
import { shallow } from 'enzyme';
import Order from './Order';

describe('Order', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Order id={1} image='broken-link.png' name='order' description='my order' price={100} />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})