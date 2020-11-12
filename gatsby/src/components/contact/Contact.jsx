import React from 'react';
import styled from 'styled-components';
import {
  FiMapPin as LocationPin
} from 'react-icons/fi';

import Logo from '../shared/Logo';
import SectionContentWrapper from '../shared/SectionContentWrapper';

const ContactStyles = styled.section`
  background: var(--white);
  min-height: calc(100vh - 81px);
  display: flex;
  justify-content: center;
  align-items: center;

  .logo-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5rem;
    align-items: center;

    .divider {
      height: 1px;
      width: 100%;
      background: var(--medium-grey);
    }
  }

  a {
    display: grid;
    grid-template-columns: auto auto;
    width: max-content;
    grid-gap: .5rem;
  }
`;

const Contact = () => {
  return (
    <ContactStyles id="contact" className="section">
      <SectionContentWrapper>
        <div className="contact-wrapper">
          <div className="logo-wrapper">
            <div className="divider" />
            <Logo />
            <div className="divider" />
          </div>
          <div className="location-info">
            <a
              target="_blank"
              className="animated-underline"
              href="https://www.google.com/maps/place/Orange+County,+CA/@33.6410077,-118.0496294,10z/data=!3m1!4b1!4m5!3m4!1s0x80dc925c54d5f7cf:0xdea6c3618ff0d607!8m2!3d33.7174708!4d-117.8311428">
              <LocationPin />
              <span>
                Orange County
              </span>
            </a>
          </div>
        </div>
      </SectionContentWrapper>
    </ContactStyles>
  )
}

export default Contact;
