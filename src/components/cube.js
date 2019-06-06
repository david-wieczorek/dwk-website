import React, { Component } from 'react';
import renderCube from '../services/rendercube';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'My website' };
  }
  componentDidMount() {
    renderCube('main_cube');
  }
  render() {
    return <div id="main_cube" />;
  }
}

export default Header;
