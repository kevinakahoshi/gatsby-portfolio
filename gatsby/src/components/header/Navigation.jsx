import React from 'react';
import {
  Link,
} from 'react-scroll';
import styled from 'styled-components';

const NavigationStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;

  a {
    position: relative;
    padding: .5rem 0;
    transition: .3s all;

    &:not(.active) {
      color: rgba(0,0,0,.5);
    }

    &:hover {
      color: rgba(0,0,0,.7);

      &::after {
        width: 100%;
        transition: .3s all;
      }
    }

    &.active {
      color: rgba(0,0,0,.9);
    }

    &::before,
    &::after  {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      height: 3px;
      width: 100%;
      background-color: transparent;
      z-index: 1;
      display: inline-block;
      transition: .3s all;
    }

    &::after {
      width: 0%;
      background: linear-gradient(-45deg, #e64242, #e67442);
    }
  }
`;

const Navigation = ({ header }) => {
  const offset = -81;

  return (
    <NavigationStyles>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={offset}
        duration={1000}
      >
        About Me
      </Link>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={offset}
        duration={1000}
      >
        Skills
      </Link>
      <Link
        activeClass="active"
        to="tools"
        spy={true}
        smooth={true}
        offset={offset}
        duration={1000}
      >
        Tools
      </Link>
      <Link
        activeClass="active"
        to="applications"
        spy={true}
        smooth={true}
        offset={offset}
        duration={1000}
      >
        Applications
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={offset}
        duration={1000}
      >
        Contact
      </Link>
    </NavigationStyles>
  )
};

export default Navigation;
