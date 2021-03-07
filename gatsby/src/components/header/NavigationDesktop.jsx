import React from 'react';
import styled from 'styled-components';

// Components
import NavigationLink from './NavigationLink';

const NavigationStyles = styled.div`
  @media (min-width: 851px) {
    display: grid;
    grid-template-columns: repeat(5, auto);
    align-items: center;
    justify-content: center;
    grid-gap: 3rem;
  }

  @media (max-width: 850px) {
    display: none;
  }

  a {
    position: relative;
    padding: .5rem 0;
    transition: .3s all;

    &:not(.active) {
      color: var(--link-inactive-grey);
    }

    &:hover {
      color: var(--link-inactive-hover-grey);

      &::after {
        width: 100%;
        transition: .3s all;
      }
    }

    &.active {
      color: var(--link-active-grey);
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

const NavigationDesktop = ({ offset, navigationItems }) => {
  const desktopNavigationLinks = navigationItems.map((navItem) => (
    <NavigationLink
      key={navItem.to}
      to={navItem.to}
      offset={offset}
      text={navItem.text}
    />
  ));

  return (
    <NavigationStyles>
      { desktopNavigationLinks }
    </NavigationStyles>
  );
};

export default NavigationDesktop;
