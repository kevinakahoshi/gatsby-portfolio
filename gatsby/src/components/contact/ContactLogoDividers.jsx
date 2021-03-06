import React from 'react';
import styled from 'styled-components';

import Logo from '../shared/Logo';

const ContactLogoDividersStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  align-items: center;

  .divider {
    height: 1px;
    width: 100%;
    background: var(--medium-grey);
  }
`;

const ContactLogoDividers = () => (
  <ContactLogoDividersStyles>
    <div className="divider" />
      <Logo />
    <div className="divider" />
  </ContactLogoDividersStyles>
);

export default ContactLogoDividers;
