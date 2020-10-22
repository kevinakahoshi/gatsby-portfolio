import React from 'react';
import styled from 'styled-components';

const AboutSocialLinksStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: .5rem;

  a {
    height: 1.25rem;
    width: 1.25rem;
    border: 2px solid var(--dark-grey);
    border-radius: 100%;
    text-align: center;
    color: var(--dark-grey);
    text-decoration: none;
  }
`;

const AboutSocialLinks = ({ social }) => {
  const processURL = (item) => item.url ? item.url : item.file.asset.url;

  const allLinks = social.map((item) => (
    <a
      key={item.id}
      title={item.name}
      href={processURL(item)}
      target="_blank"
      rel="noopener noreferrer"
      download={!!item.file}
    >
      { item.name[0] }
    </a>
  ))

  return (
    <AboutSocialLinksStyles>
      { allLinks }
    </AboutSocialLinksStyles>
  )
}

export default AboutSocialLinks;
