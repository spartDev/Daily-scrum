import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Button
 *
 * This component is in charge of displaying
 * a button
 *
 * @return {jsx}
 */
const Button = ({ action, className, children, disabled }) => (
  <button className={className} onClick={action} disabled={disabled}>
    {children}
  </button>
);

/**
 * PropTypes Validation
 */
const { any, bool, func, string } = PropTypes;
Button.propTypes = {
  action: func,
  className: string,
  children: any,
  disabled: bool,
};

/**
 * Default props
 */
Button.defaultProps = {
  action: null,
  className: '',
  children: null,
  disabled: false,
};

Button.displayName = 'Button';

export default styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  padding: 1.4rem 0;
  border: 0;
  font-size: 1.6rem;
  background: ${({ theme: { palette } }) => palette.white};
  color: ${({ theme: { palette } }) => palette.primary};
  border-radius: 20px;
  border: 1px solid ${({ theme: { palette } }) => palette.primary};
  font-weight: 300;
  text-transform: uppercase;
  transition: opacity 250ms ease-in-out 0s;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
