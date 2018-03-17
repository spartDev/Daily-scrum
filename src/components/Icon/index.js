import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import IconUser from './User';
import IconArrow from './Arrow';
import IconPlay from './Play';
import IconSettings from './Settings';
import IconStop from './Stop';

/* eslint-disable react/prefer-stateless-function */

/**
 * Icon
 *
 * This component is in charge of displaying
 * a svg Icon
 *
 * @param {node} children // The icon shape.
 * @param {string} color // The icon color.
 * @param {string} size // The icon size.
 *
 * @return {jsx}
 */
class Icon extends Component {
  /**
   * PropTypes Validation
   */
  static propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
    theme: PropTypes.shape({
      palette: PropTypes.object.isRequired,
    }).isRequired,
    size: PropTypes.oneOf(['small', 'default', 'large']),
  };
  /**
   * Default Props
   */
  static defaultProps = {
    size: 'default',
    color: 'currentColor',
  };

  /**
   * A Icon displays a set of related icon
   * in a structured way.
   */
  static Arrow = IconArrow;
  static Play = IconPlay;
  static Settings = IconSettings;
  static Stop = IconStop;
  static User = IconUser;

  render() {
    const { children, color, size, theme } = this.props;

    return (
      <svg
        width={theme.size[size]}
        height={theme.size[size]}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        {React.Children.map(children, child => React.cloneElement(child, { color }))}
      </svg>
    );
  }
}

export default withTheme(Icon);
