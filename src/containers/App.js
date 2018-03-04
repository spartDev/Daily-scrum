import React, { Component } from 'react';

import { Button } from '../components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Button>Next</Button>
        </p>
      </div>
    );
  }
}

export default App;
