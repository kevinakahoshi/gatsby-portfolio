import React from "react"
import { graphql } from "gatsby";
import Img from 'gatsby-image';

// Components
import Layout from '../components/Layout';
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from '../components/skills/Skills';
import Tools from "../components/tools/Tools";
import Applications from "../components/applications/Applications";
import Contact from '../components/contact/Contact';
import MenuContext from "../components/context/MenuContext";

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
    projects: allSanityProjectsSection {
      nodes {
        allProjects: projectsSelectionAndOrder {
          altText
          gitHubLink
          id
          liveLink
          mainDescription
          projectName
          shortDescription
          technologiesUsed
          thumbnail {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  const aboutMe = data.aboutMe.nodes[0];
  const skills = data.skills.nodes[0].tech;
  const tools = data.tools.nodes[0].tools;
  const projects = data.projects.nodes[0].allProjects;

  return (
    <Layout>
      <Header />
      <Hero />
      <About aboutMe={aboutMe} />
      <Skills skills={skills} />
      <Tools tools={tools} />
      <Applications projects={projects} />
      <Contact social={aboutMe.social} />
    </Layout>
  )
};

export default Home;
