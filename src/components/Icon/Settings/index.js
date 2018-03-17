import React from 'react';
import PropTypes from 'prop-types';

/**
 * User
 *
 * This component is in charge of displaying
 * the settings svg shape
 *
 * @param {string} color // The shape color.
 *
 * @return {jsx}
 */
const Settings = ({ color }) => (
  <path
    fill={color}
    d="M14 4v-.5c0-.825-.675-1.5-1.5-1.5h-5C6.675 2 6 2.675 6 3.5V4H0v4h6v.5c0 .825.675 1.5 1.5 1.5h5c.825 0 1.5-.675 1.5-1.5V8h18V4H14zM8 8V4h4v4H8zm18 5.5c0-.825-.675-1.5-1.5-1.5h-5c-.825 0-1.5.675-1.5 1.5v.5H0v4h18v.5c0 .825.675 1.5 1.5 1.5h5c.825 0 1.5-.675 1.5-1.5V18h6v-4h-6v-.5zM20 18v-4h4v4h-4zm-6 5.5c0-.825-.675-1.5-1.5-1.5h-5c-.825 0-1.5.675-1.5 1.5v.5H0v4h6v.5c0 .825.675 1.5 1.5 1.5h5c.825 0 1.5-.675 1.5-1.5V28h18v-4H14v-.5zM8 28v-4h4v4H8z"
  />
);

/**
 * PropTypes Validation
 */
const { string } = PropTypes;
Settings.propTypes = {
  color: string,
};

/**
 * Default Props
 */
Settings.defaultProps = {
  color: 'currentColor',
};

export default Settings;
