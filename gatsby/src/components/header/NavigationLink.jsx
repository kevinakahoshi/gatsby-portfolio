import React from 'react';
import {
  Link
} from 'react-scroll';

const NavigationLink = ({ to, offset, text, handleClose = null }) => {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={1000}
      onClick={handleClose}
    >
      { text }
    </Link>
  )
}

export default NavigationLink;
