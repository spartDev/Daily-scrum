import React from 'react';
import PropTypes from 'prop-types';

/**
 * User
 *
 * This component is in charge of displaying
 * the stop svg shape
 *
 * @param {string} color // The shape color.
 *
 * @return {jsx}
 */
const Stop = ({ color }) => <path fill={color} d="M4 4h24v24H4z" />;

/**
 * PropTypes Validation
 */
const { string } = PropTypes;
Stop.propTypes = {
  color: string,
};

/**
 * Default Props
 */
Stop.defaultProps = {
  color: 'currentColor',
};

export default Stop;
