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
const Button = ({ action, className, children }) => (
  <button className={className} onClick={action}>{children}</button>
);

/**
 * PropTypes Validation
 */
const { any, func, string } = PropTypes;
Button.propTypes = {
  action: func,
  className: string,
  children: any,
};

/**
 * Default props
 */
Button.defaultProps = {
  action: null,
  className: '',
  children: null,
};

Button.displayName = 'Button';

export default styled(Button)`
  width: 100%;
  padding: 1.4rem 0;
  border: 0;
  font-size: 1.6rem;
  background: ${({ theme: { palette }}) => palette.blackPepper};
  color: ${({ theme: { palette }}) => palette.gray};
  box-shadow: 0px 0px 2px ${({ theme: { palette }}) => palette.black};;
`;
