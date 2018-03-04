import React, { Component } from 'react';
import styled from 'styled-components';

import { Button, ButtonTimer } from '../components';

class App extends Component {
  render() {
    return (
      <Container>
        <header role="banner">
          <h1>Stand-up time !</h1>
        </header>
        <Main role="main">
          <ButtonTimer>||</ButtonTimer>
        </Main>
        <footer>
          <Button>Next</Button>
        </footer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default App;
