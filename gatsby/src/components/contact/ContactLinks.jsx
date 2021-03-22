import React from 'react';
import {
  FiMapPin as LocationPin,
  FiGithub as GitHub,
  FiPhoneCall as Phone,
  FiLinkedin as LinkedIn,
  FiMail as Email,
  FiFileText as Resume
} from 'react-icons/fi';
import styled from 'styled-components';

const ContactLinksStyles = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  a {
    display: grid;
    grid-template-columns: auto auto;
    width: max-content;
    grid-gap: .5rem;
    margin: 0rem 1rem;
    align-items: center;
  }
`;

const ContactLinks = () => (
  <ContactLinksStyles>
    <a
      className="animated-underline"
      href="https://www.google.com/maps/place/Orange+County,+CA/@33.6410077,-118.0496294,10z/data=!3m1!4b1!4m5!3m4!1s0x80dc925c54d5f7cf:0xdea6c3618ff0d607!8m2!3d33.7174708!4d-117.8311428"
      rel="noopener noreferrer"
      target="_blank"
    >
      <LocationPin />
      <span>Orange County</span>
    </a>
    <a
      className="animated-underline"
      href="tel:+19492027141"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Phone />
      <span>949-202-7141</span>
    </a>
    <a
      className="animated-underline"
      href="mailto:kevin.akahoshi@gmail.com"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Email />
      <span>kevin.akahoshi@gmail.com</span>
    </a>
  </ContactLinksStyles>
);

export default ContactLinks;
