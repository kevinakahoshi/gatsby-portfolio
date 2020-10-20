import React from 'react';
import {
  Link
} from 'react-scroll';

const NavigationLink = ({ to, offset, text }) => {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={1000}
    >
      { text }
    </Link>
  )
}

export default NavigationLink;
