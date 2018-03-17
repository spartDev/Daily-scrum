import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

/**
 * Radial Progress
 *
 * This component is in charge of displaying
 * the radial progress circle
 *
 * @param {object} theme // The styled component theme
 *
 * @return {jsx}
 */
const RadialProgress = ({ progress, theme: { palette }, width }) => {
  const strokeWidth = 3;
  const center = width / 2;
  const radius = width / 2 - strokeWidth / 2;
  const strokeDasharray = 2 * radius * Math.PI;
  const strokeDashoffset =
    progress > 0 ? strokeDasharray - strokeDasharray / 100 * progress : strokeDasharray;
  const height = width; // We make a perfect circle, so it fits in a square.

  /* eslint-disable no-nested-ternary */
  const switchColor =
    strokeDashoffset <= strokeDasharray / 3
      ? palette.primary
      : strokeDashoffset <= strokeDasharray / 3 * 2 ? palette.amber : palette.deepOrange;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={palette.gray}
        strokeWidth={1}
        strokeDasharray={strokeDasharray}
        strokeDashoffset="0"
        transform={`rotate(270, ${center}, ${center})`}
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={switchColor}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform={`rotate(270, ${center}, ${center})`}
      />
    </svg>
  );
};

/**
 * PropTypes Validation
 */
const { number, object, shape } = PropTypes;
RadialProgress.propTypes = {
  progress: number.isRequired,
  theme: shape({
    palette: object.isRequired,
  }).isRequired,
  width: number.isRequired,
};

export default withTheme(RadialProgress);
