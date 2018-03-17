import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider, { Rail, Handles, Tracks } from 'react-compound-slider';

/**
 * Slider
 *
 * This component is in charge of displaying
 * an slider
 *
 * @param {string} className // Classes needed by styled component.
 * @param {array} domain // Providing the min and max values for the slider [min, max].
 * @param {function} onChange // Function called with the values when interaction stops.
 * @param {number} step // The step value for the slider.
 * @param {bool} trackLeft // Control whether the left most track is included in the tracks array.
 * @param {bool} trackRight // Control whether the right most track is included in the tracks array.
 * @param {array} values // Slider values, you can supply one for a value slider, two for a range slider.
 *
 * @return {jsx}
 */

const UiSlider = ({ className, domain, onChange, step, trackLeft, trackRight, values }) => (
  <Slider
    className={className}
    domain={domain}
    onChange={onChange}
    step={step}
    mode={2}
    values={values}
  >
    <Rail>{({ getRailProps }) => <StyledRail {...getRailProps()} />}</Rail>
    <Handles>
      {({ handles, getHandleProps }) => (
        <div>
          {handles.map(handle => (
            <Handle
              key={handle.id}
              handle={handle}
              {...getHandleProps(handle.id)}
              style={{ left: `${handle.percent}%` }}
            />
          ))}
        </div>
      )}
    </Handles>
    <Tracks left={trackLeft} right={trackRight}>
      {({ tracks, getTrackProps }) => (
        <div>
          {tracks.map(({ id, source, target }) => (
            <Track
              key={id}
              source={source}
              target={target}
              {...getTrackProps()}
              style={{ left: `${source.percent}%`, width: `${target.percent - source.percent}%` }}
            />
          ))}
        </div>
      )}
    </Tracks>
  </Slider>
);

/**
 * PropTypes Validation
 */
const { array, bool, func, number, string } = PropTypes;
UiSlider.propTypes = {
  className: string,
  domain: array,
  onChange: func,
  trackLeft: bool,
  trackRight: bool,
  step: number,
  values: array.isRequired,
};

/**
 * Default Props
 */
UiSlider.defaultProps = {
  className: '',
  domain: [0, 100],
  onChange: () => {},
  trackLeft: false,
  trackRight: false,
  step: 1,
};

const size = 1.5;

const StyledRail = styled.div`
  position: absolute;
  width: 100%;
  height: 0.2rem;
  border-radius: 2px;
  background: ${({ theme }) => theme.palette.gray};
`;
StyledRail.displayName = 'Rail';

const Handle = styled.div`
  position: absolute;
  top: 50%;
  width: ${size}rem;
  height: ${size}rem;
  z-index: 2;
  border-radius: 50%;
  text-align: center;
  transform: translate3d(-${size / 2}rem, -50%, 0);
  background: ${({ theme }) => theme.palette.primary};
  border: 1px solid ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 2px hsl(0, 0%, 60%);
  cursor: pointer;
`;
Handle.displayName = 'Handle';

const Track = styled.div`
  position: absolute;
  height: 0.2rem;
  z-index: 1;
  background: ${({ theme }) => theme.palette.primary};
  border-radius: 2px;
  cursor: pointer;
`;
Track.displayName = 'Track';

export default styled(UiSlider)`
  position: relative;
  width: 100%;
  height: 0.2rem;
`;
