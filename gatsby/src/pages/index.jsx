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
    skills: allSanityTechnologiesSection {
      nodes {
        technologiesSelectionAndOrder {
          id
          logo {
            asset {
              fluid {
                src
              }
            }
          }
          name
          altText
          displayText
        }
      }
    }
    aboutMe: allSanityAboutMe {
      edges {
        node {
          headshot {
            asset {
              fluid {
                ...GatsbySanityImageFluid_noBase64
              }
              id
            }
          }
          altText
          bio {
            children {
              text
              _key
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
  const skills = data.skills.nodes[0].technologiesSelectionAndOrder;

  return (
    <Layout>
      <HomeStyles>
        <Header />
        <Hero />
        <About />
        <Skills
          skills={skills} />
        <Tools />
        <Applications />
        <Contact />
        <Img fluid={data.aboutMe.edges[0].node.headshot.asset.fluid}
          backgroundColor="white" style={{ maxWidth: '300px'}} />
      </HomeStyles>
    </Layout>
  )
};

export default Home;
