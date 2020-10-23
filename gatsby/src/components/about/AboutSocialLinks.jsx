import React from 'react';
import styled from 'styled-components';
import {
  FiGithub as GitHub,
  FiPhoneCall as Phone,
  FiLinkedin as LinkedIn,
  FiMail as Email,
  FiFileText as Resume
} from 'react-icons/fi';

const AboutSocialLinksStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: .5rem;
  width: max-content;
  margin: 1rem auto;

  a {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 100%;
    text-align: center;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(0,0,0,.5);
    animation: slide-up .3s;

    &:hover {
      border-color: rgba(0,0,0,.7);
    }
  }

  .social-icon {
    width: 1.5rem;
    height: auto;
  }

  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(-50%);
    }

    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

const AboutSocialLinks = ({ social }) => {
  const processURL = (item) => item.url ? item.url : item.file.asset.url;
  const delay = 0.2;
  const socialIcons = {
    GitHub: <GitHub className="social-icon"  />,
    LinkedIn: <LinkedIn className="social-icon" />,
    Phone: <Phone className="social-icon"  />,
    Email: <Email className="social-icon"  />,
    Resume: <Resume className="social-icon"  />
  }

  const allLinks = social.map((item, index) => (
    <a
      key={item.id}
      title={item.name}
      href={processURL(item)}
      target="_blank"
      rel="noopener noreferrer"
      download={!!item.file}
      style={{ animationDelay: `${index * delay}s` }}
    >
      { socialIcons[item.name] }
    </a>
  ))

  return (
    <AboutSocialLinksStyles>
      { allLinks }
    </AboutSocialLinksStyles>
  )
}

export default AboutSocialLinks;
