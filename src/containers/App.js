import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Motion, spring, presets } from 'react-motion';
import { format } from 'date-fns';

import { Footer, Header, RadialProgress, Icon, Slider } from '../components';

class App extends Component {
  /**
   * PropTypes Validation
   *
   * @param {object} theme
   */
  static propTypes = {
    theme: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.interval = null;
  }

  state = {
    initialTime: 60000,
    remainingTime: 60000,
    started: false,
    settings: false,
    count: 1,
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getProgressStyle = () => {
    const { remainingTime, started, initialTime } = this.state;
    if (started) {
      return remainingTime / (initialTime / 100);
    }
    return 100;
  };

  getDefaultProgressStyle = () => {
    const { started } = this.state;
    if (started) {
      return 0;
    }
    return 100;
  };

  tick = () => {
    this.setState({ remainingTime: this.state.remainingTime - 300 });
    if (this.state.remainingTime <= 0) {
      this.setState({ started: false });
      clearInterval(this.interval);
    }
  };

  start() {
    this.setState({ remainingTime: this.state.initialTime, started: true });
    this.interval = setInterval(this.tick, 300);
  }

  stop() {
    clearInterval(this.interval);
    this.reset();
  }

  reset() {
    this.setState({ remainingTime: this.state.initialTime, started: false, count: 1 });
  }

  next = async () => {
    await clearInterval(this.interval);
    this.start();
    this.setState({
      count: this.state.count + 1,
    });
  };

  toggle = () => {
    const { started } = this.state;

    if (!started) {
      return this.start();
    }

    return this.stop();
  };

  toogleSettings = () => {
    const { settings } = this.state;
    this.setState({
      settings: !settings,
    });
  };

  handleSliderChange = event => {
    this.setState({ remainingTime: event[0], initialTime: event[0] });
  };

  render() {
    const { initialTime, remainingTime, started, count, settings } = this.state;
    const { theme } = this.props;

    const remainingTimeFormated =
      remainingTime >= 60000 ? format(remainingTime, 'mm : ss') : format(remainingTime, 'ss');

    return (
      <Container>
        <Header settings={settings} theme={theme} toogleSettings={this.toogleSettings} />
        <Main role="main">
          <Motion
            defaultStyle={{ progress: this.getDefaultProgressStyle() }}
            style={{ progress: spring(this.getProgressStyle(), presets.stiff) }}
          >
            {({ progress }) => <RadialProgress progress={progress} width={200} />}
          </Motion>
          <Timer>{remainingTimeFormated}</Timer>
        </Main>
        <TeamMate>
          <Icon color={theme.palette.primary} size="small">
            <Icon.User />
          </Icon>
          &nbsp; Participants
          <Count>{count}</Count>
        </TeamMate>
        <Footer onStarted={started} theme={theme} toogleStart={this.toggle} onNext={this.next} />
        <Motion
          defaultStyle={{ y: settings ? 100 : 70 }}
          style={{
            y: settings
              ? spring(70, { stiffness: 240, damping: 25 })
              : spring(100, { stiffness: 240, damping: 25 }),
          }}
        >
          {({ y }) => (
            <Settings style={{ transform: `translate3d(0, ${y}%, 0)` }}>
              <h4>time per participant</h4>
              <Slider
                domain={[60000, 300000]}
                values={[initialTime]}
                step={60000}
                onChange={this.handleSliderChange}
                trackLeft
              />
            </Settings>
          )}
        </Motion>
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 6rem 6rem;
  background: ${({ theme: { palette } }) => palette.white};
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Timer = styled.div`
  margin: 2rem 0;
  color: ${({ theme: { palette } }) => palette.primary};
  font-size: 6rem;
  font-weight: 200;
`;

const TeamMate = styled.div`
  color: ${({ theme: { palette } }) => palette.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  font-weight: 300;
`;

const Count = styled.div`
  margin-left: 0.5rem;
`;

export default withTheme(App);
