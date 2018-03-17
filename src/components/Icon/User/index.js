import React from 'react';
import PropTypes from 'prop-types';

/**
 * User
 *
 * This component is in charge of displaying
 * the user svg shape
 *
 * @param {string} color // The shape color.
 *
 * @return {jsx}
 */
const User = ({ color }) => (
  <path
    fill={color}
    d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649C7.216 22.637 2 25.97 2 30h28c0-4.03-5.216-7.364-12-7.918z"
  />
);

/**
 * PropTypes Validation
 */
const { string } = PropTypes;
User.propTypes = {
  color: string,
};

/**
 * Default Props
 */
User.defaultProps = {
  color: 'currentColor',
};

export default User;
