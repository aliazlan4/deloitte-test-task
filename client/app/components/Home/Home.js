import React, { Component } from 'react';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="text-center">
        <h1>The Best Todo App</h1>
        <h5>Login To Get Started</h5>
      </div>
    );
  }
}

export default Home;
