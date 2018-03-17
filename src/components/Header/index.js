import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';

import { Icon } from '../';

const Header = ({ className, settings, theme: { palette }, toogleSettings }) => (
  <header role="banner" className={className}>
    <Heading>
      <Motion
        defaultStyle={{ y: settings ? 0 : 2.5 }}
        style={{
          y: settings
            ? spring(2.5, { stiffness: 240, damping: 25 })
            : spring(0, { stiffness: 240, damping: 25 }),
        }}
      >
        {({ y }) => (
          <Fragment>
            <Title style={{ transform: `translate3d(0, -${y}rem, 0)` }}>
              <span>Daily</span> scrum
            </Title>
            <Title style={{ transform: `translate3d(0, -${y}rem, 0)` }}>Settings</Title>
          </Fragment>
        )}
      </Motion>
    </Heading>
    <SettingsButton onClick={toogleSettings}>
      <Icon color={palette.gray} size="small">
        <Icon.Settings />
      </Icon>
    </SettingsButton>
  </header>
);

const { bool, func, object, string } = PropTypes;
Header.propTypes = {
  className: string,
  settings: bool.isRequired,
  theme: object.isRequired,
  toogleSettings: func.isRequired,
};

Header.defaultProps = {
  className: '',
};

// Component Styles
const Heading = styled.div`
  flex: 1;
  text-align: center;
  height: 2.5rem;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 300;
  text-transform: uppercase;
  span {
    font-weight: 700;
  }
`;

const SettingsButton = styled.div`
  position: absolute;
  right: 1.5rem;
`;

export default styled(Header)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  color: ${({ theme: { palette } }) => palette.primary};
`;
