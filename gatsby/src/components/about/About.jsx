import React, { useState } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

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

    @media (min-width: 551px) {
      --columns: 1fr 2fr;

      .image-wrapper h3 {
        display: none;
      }
    }

    @media (max-width: 550px) {
      --columns: 1fr;

      .bio-wrapper h3 {
        display: none;
      }
    }

    .bio-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }
`;

const About = () => {
  const {
    aboutMe: {
      social,
      altText,
      bio,
      headshot
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
        altText
        bio {
          children {
            _key
            text
          }
        }
        headshot {
          asset {
            fluid {
              ...GatsbySanityImageFluid_noBase64
            }
          }
        }
      }
    }
  `);

  return (
    <AboutStyles id="about" className="section">
      <SectionContentWrapper>
        <div className="about-wrapper">
          <div className="image-wrapper">
            <SectionHeading>
              About Me
            </SectionHeading>
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
};

export default About;
