/*  GLOBAL CSS
--------------------------------------------------- */

import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import Theme from './theme';

const { palette } = Theme;

const globalCss = () => injectGlobal`

  /* CSS to normalize abnormalities across browsers
  --------------------------------------------------- */
  ${normalize()},

  *,
  *::before,
  *::after {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
    font-size: calc(1em * .625);
  }

  body {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    background: ${palette.white};
    color: ${palette.black};
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
    font-size: 1.4em;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
  }

  img {
    /* Get rid of gap under images by making them display: inline-block; by default */
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
  }

  /* Remove Svg outline */
  svg {
    outline: 0;
  }

  /* Reset <button> styles created by most browsers */
  button {
    appearance: none;
    padding: 0;
    outline: 0;
    line-height: 1.6;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  ul,
  ol,
  dl,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  /*  LINK
  --------------------------------------------------- */

  a {
    color: hsl(0, 0%, 33%);
    line-height: inherit;
    text-decoration: none;
    tap-highlight-color: transparent;

    &:hover,
    &:focus {
      color: hsl(0, 0%, 33%);
      text-decoration: underline;
    }

    img { border: 0; }
  }

  /*  CODE
  --------------------------------------------------- */

  pre,
  code {
    font-family: Consolas, Monaco, "Lucida Console", monospace;
  }

  @import https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css;
`;

export default globalCss;
