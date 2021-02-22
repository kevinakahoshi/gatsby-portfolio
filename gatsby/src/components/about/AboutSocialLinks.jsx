import React from 'react';
import styled from 'styled-components';
import {
  FiGithub as GitHub,
  FiPhoneCall as Phone,
  FiLinkedin as LinkedIn,
  FiMail as Email,
  FiFileText as Resume
} from 'react-icons/fi';
import { useState } from 'react';
import { SlideIn } from '../../styles/Keyframes';
import { useStaticQuery } from 'gatsby';

const AboutSocialLinksStyles = styled.div`
  overflow: auto;
  min-height: 4.5rem;

  .social-wrapper {
    animation: ${SlideIn} .3s;
    animation-fill-mode: both;
    animation-delay: .3s;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: .5rem;
    width: max-content;
    margin: 1rem auto;
  }

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
    border-color: var(--link-inactive-grey);
    animation: ${SlideIn} .5s;
    animation-fill-mode: both;

    &:hover {
      border-color: var(--link-inactive-hover-grey);
    }
  }

  .social-icon {
    width: 1.5rem;
    height: auto;
  }
`;

const AboutSocialLinks = () => {
  const {
    aboutMe: {
      social
    }
  } = useStaticQuery(graphql`
    query {
      aboutMe: sanityAboutMe {
        social {
          url
          name
          file {
            asset {
              url
            }
          }
          logo {
            asset {
              fluid {
                src
              }
            }
          }
          id
        }
      }
    }
  `);

  const processURL = (item) => item.url ? item.url : item.file.asset.url;
  const [links, setLinks] = useState(null);
  const delay = 0.1;
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
    <AboutSocialLinksStyles
      onAnimationEnd={() => setLinks(allLinks)}>
      <div className="social-wrapper">
        { links }
      </div>
    </AboutSocialLinksStyles>
  )
}

export default AboutSocialLinks;
