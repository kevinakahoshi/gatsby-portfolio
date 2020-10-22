import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import SectionContentWrapper from '../shared/SectionContentWrapper';
import SectionHeading from '../shared/SectionHeading';
import AboutBioParagraphs from './AboutBioParagraphs';
import AboutSocialLinks from './AboutSocialLinks';

const AboutStyles = styled.section`
  background: var(--light-grey);

  .about-wrapper {
    display: grid;
    grid-template-columns: var(--columns);
    grid-gap: 1.5rem;

    @media (min-width: 501px) {
      --columns: 1fr 2fr;
    }

    @media (max-width: 500px) {
      --columns: 1fr;
    }
  }
`;

const About = ({ aboutMe }) => {
  const { altText, bio, headshot, social } = aboutMe;

  return (
    <AboutStyles id="about" className="section">
      <SectionContentWrapper>
        <div className="about-wrapper">
          <div className="image-wrapper">
            <Img
              alt={altText}
              fluid={headshot.asset.fluid}
              backgroundColor="var(--light-grey)"
            />
            <AboutSocialLinks social={social} />
          </div>
          <div className="bio-wrapper">
            <SectionHeading>
              About Me
            </SectionHeading>
            <div className="bio-content-wrapper">
              <AboutBioParagraphs bio={bio} />
            </div>
          </div>
        </div>
      </SectionContentWrapper>
    </AboutStyles>
  )
}

export default About;
