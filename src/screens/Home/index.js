import React, { Component } from 'react';

class Home extends Component {

  componentDidMount() {
    console.log('Home mounted');
  }

  render() {
    return (
      <div>
        {'Home'}
      </div>
    );
  }

}

export default Home;
