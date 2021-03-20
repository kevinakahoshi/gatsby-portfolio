import React from 'react';
import {
  Link
} from 'react-scroll';

const NavigationLink = ({
  to,
  offset,
  text,
  handleClose = null,
  customClass = null,
  customInlineStyles = null
}) => (
  <Link
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={-offset}
    duration={1000}
    onClick={handleClose}
    className={customClass}
    style={customInlineStyles}
  >
    { text }
  </Link>
);

export default NavigationLink;
