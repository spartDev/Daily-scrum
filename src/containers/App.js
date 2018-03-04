import React, { Component } from 'react';

import { Button } from '../components';

class App extends Component {
  render() {
    return (
      <div>
        <header role="banner">
          <h1>Stand-up time !</h1>
        </header>
        <main role="main">
          content
        </main>
        <footer>
          <Button>Next</Button>
        </footer>
      </div>
    );
  }
}

export default App;
