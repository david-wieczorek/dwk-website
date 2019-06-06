import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

it('renders About without crashing', () => {
  shallow(<About />);
});

it('renders About message', () => {
  const wrapper = shallow(<About />);
  const about = <h2>About</h2>;
  expect(wrapper.contains(about)).toEqual(true);
});
