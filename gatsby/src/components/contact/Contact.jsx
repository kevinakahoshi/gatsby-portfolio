import React from 'react';
import styled from 'styled-components';
import {
  FiMapPin as LocationPin
} from 'react-icons/fi';

import Logo from '../shared/Logo';
import SectionContentWrapper from '../shared/SectionContentWrapper';
import ContactLinks from './ContactLinks';
import ContactLogoDividers from './ContactLogoDividers';
import ContactCopyright from './ContactCopyright';


const ContactStyles = styled.section`
  background: var(--white);
  min-height: calc(100vh - 81px);
  display: flex;
  justify-content: center;
  align-items: center;

  .contact-wrapper {
    display: grid;
    grid-gap: 1.5rem;
    text-align: center;

    p {
      margin-bottom: 0;
    }
  }
`;

const Contact = () => {
  return (
    <ContactStyles id="contact" className="section">
      <SectionContentWrapper>
        <div className="contact-wrapper">
          <ContactLogoDividers />
          <ContactLinks />
          <ContactCopyright />
        </div>
      </SectionContentWrapper>
    </ContactStyles>
  )
}

export default Contact;
