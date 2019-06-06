import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

it('renders About without crashing', () => {
  shallow(<Contact />);
});

it('renders Contact message', () => {
  const wrapper = shallow(<Contact />);
  const contact = <h2>Contact</h2>;
  expect(wrapper.contains(contact)).toEqual(true);
});
