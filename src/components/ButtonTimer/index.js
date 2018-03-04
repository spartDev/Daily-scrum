import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Button Timer
 *
 * This component is in charge of displaying
 * a the button timer
 *
 * @return {jsx}
 */
const ButtonTimer = ({ action, className, children }) => (
  <button className={className} onClick={action}>{children}</button>
);

/**
 * PropTypes Validation
 */
const { any, func, string } = PropTypes;
ButtonTimer.propTypes = {
  action: func,
  className: string,
  children: any,
};

/**
 * Default props
 */
ButtonTimer.defaultProps = {
  action: null,
  className: '',
  children: null,
};

ButtonTimer.displayName = 'ButtonTimer';

export default styled(ButtonTimer)`
  width: 15rem;
  height: 15rem;
  border-radius: 15rem;
  border: 0;
  font-size: 1.6rem;
  background: ${({ theme: { palette }}) => palette.blackPepper};
  color: ${({ theme: { palette }}) => palette.gray};
`;
