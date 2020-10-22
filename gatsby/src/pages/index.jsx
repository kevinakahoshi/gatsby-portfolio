import React from "react"
import { graphql } from "gatsby";
import styled from "styled-components"

// Components
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from '../components/skills/Skills';
import Tools from "../components/tools/Tools";
import Contact from '../components/contact/Contact';
import Applications from "../components/applications/Applications";

export const query = graphql`
  query {
    aboutMe: allSanityAboutMe {
      nodes {
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
    skills: allSanityTechnologiesSection {
      nodes {
        tech: technologiesSelectionAndOrder {
          name
          id
          displayText
          altText
          logo {
            asset {
              fluid {
                src
              }
            }
          }
        }
      }
    }
    tools: allSanityToolsSection {
      nodes {
        tools: toolsSelectionAndOrder {
          name
          id
          displayText
          altText
          logo {
            asset {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`;

const HomeStyles = styled.div`
  h1 {
    font-size: 3rem;
  }

  .image-grid {
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }

  .container-image {
    max-width: 100px;
    display: flex;
    justify-self: center;
    margin: auto;
  }

  .test-div {
    min-height: 100vh;
    border: 2px solid var(--dark-grey);
  }
`;

const Home = ({ data }) => {
  const aboutMe = data.aboutMe.nodes[0];
  const skills = data.skills.nodes[0].tech;
  const tools = data.tools.nodes[0].tools;

  return (
    <Layout>
      <HomeStyles>
        <Header />
        <Hero />
        <About
          aboutMe={aboutMe}
        />
        <Skills
          skills={skills}
        />
        <Tools
          tools={tools}
        />
        <Applications />
        <Contact />
      </HomeStyles>
    </Layout>
  )
};

export default Home;
