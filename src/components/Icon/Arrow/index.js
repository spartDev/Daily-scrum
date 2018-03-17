import React from 'react';
import PropTypes from 'prop-types';

/**
 * Arrow
 *
 * This component is in charge of displaying
 * the arrow svg shape
 *
 * @param {string} color // The shape color.
 *
 * @return {jsx}
 */
const Arrow = ({ color }) => (
  <path
    fill={color}
    d="M19.414 27.414l10-10a2 2 0 0 0 0-2.828l-10-10a2 2 0 1 0-2.828 2.828L23.172 14H4a2 2 0 1 0 0 4h19.172l-6.586 6.586c-.39.39-.586.902-.586 1.414s.195 1.024.586 1.414a2 2 0 0 0 2.828 0z"
  />
);

/**
 * PropTypes Validation
 */
const { string } = PropTypes;
Arrow.propTypes = {
  color: string,
};

/**
 * Default Props
 */
Arrow.defaultProps = {
  color: 'currentColor',
};

export default Arrow;
