import React from 'react';
import PropTypes from 'prop-types';

/**
 * User
 *
 * This component is in charge of displaying
 * the play svg shape
 *
 * @param {string} color // The shape color.
 *
 * @return {jsx}
 */
const Play = ({ color }) => <path fill={color} d="M6 4l20 12L6 28z" />;

/**
 * PropTypes Validation
 */
const { string } = PropTypes;
Play.propTypes = {
  color: string,
};

/**
 * Default Props
 */
Play.defaultProps = {
  color: 'currentColor',
};

export default Play;
