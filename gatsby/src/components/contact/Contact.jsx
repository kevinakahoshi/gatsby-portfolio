import React from 'react';
import styled from 'styled-components';
import {
  FiMapPin as LocationPin
} from 'react-icons/fi';

import Logo from '../shared/Logo';
import SectionContentWrapper from '../shared/SectionContentWrapper';
import ContactLinks from './ContactLinks';


const ContactStyles = styled.section`
  background: var(--white);
  min-height: calc(100vh - 81px);
  display: flex;
  justify-content: center;
  align-items: center;

  .contact-wrapper {
    display: grid;
    grid-gap: 1.5rem;

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
          <ContactLinks />
        </div>
      </SectionContentWrapper>
    </ContactStyles>
  )
}

export default Contact;
