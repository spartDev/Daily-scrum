import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button, Icon } from '../';

/**
 * Footer
 *
 * This component is in charge of displaying
 * the app footer
 *
 * @param {string} className // Classes needed by styled component.
 * @param {function} onNext // Function triggred when next button is clicked.
 * @param {boolean} onStarted // Boolean which allows to know if countdown is started.
 * @param {object} theme // Styled component theme object.
 * @param {function} toogleStart // Function who start or stop the countdown.
 *
 * @return {jsx}
 */

const Footer = ({ className, onNext, onStarted, theme: { palette }, toogleStart }) => (
  <div className={className}>
    <Button action={toogleStart} even>
      <Icon color={palette.primary} size="small">
        {!onStarted ? <Icon.Play /> : <Icon.Stop />}
      </Icon>
      <Play>{!onStarted ? 'Start' : 'Stop'}</Play>
    </Button>
    <Button action={onNext} disabled={!onStarted}>
      <Next>Next</Next>
      <Icon color={palette.primary} size="small">
        <Icon.Arrow />
      </Icon>
    </Button>
  </div>
);

/**
 * PropTypes Validation
 */
const { bool, func, object, string } = PropTypes;
Footer.propTypes = {
  className: string,
  onNext: func.isRequired,
  onStarted: bool.isRequired,
  theme: object.isRequired,
  toogleStart: func.isRequired,
};

/**
 * Default Props
 */
Footer.defaultProps = {
  className: '',
};

/**
 * Component Styles
 */
const Next = styled.div`
  margin-right: 1rem;
`;
const Play = styled.div`
  margin-left: 1rem;
`;

export default styled(Footer)`
  display: flex;
  justify-content: space-around;
  margin: 2rem;
`;
