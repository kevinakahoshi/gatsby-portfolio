import { graphql } from "gatsby";
import React from "react"
import styled from "styled-components"
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import Logo from "../components/header/Logo";

export const query = graphql`
  query {
    tech: allSanityTechnology(filter: {currentlyUsing: {eq: true}}, sort: {fields: order}) {
      nodes {
        altText
        displayText
        name
        currentlyUsing
        id
        logo {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
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
    grid-tempalte-rows: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }

  .container-image {
    max-width: 100px;
    display: flex;
    justify-self: center;
    margin: auto;
  }
`;

export default function Home({ data }) {
  // TODO: Decide if the order should be managed within GraphQL or if the order
  // should be managed within the component

  const sortOrder = {
    'JavaScript': null,
    'React.js': null,
    'Vue.js': null,
    'Gatsby.js': null,
    'Node.js': null,
    'Express': null,
    'GraphQL': null,
    'Liquid': null,
    'PostgreSQL': null,
    'MySQL': null,
    'jQuery': null,
    'PHP': null,
    'Material UI': null,
    'HTML5': null,
    'CSS3': null,
    'Bootstrap': null
  }

  const sortedArr = [];

  for (const technology of data.tech.nodes) {
    sortOrder[technology.displayText] = technology;
  }

  for (const item in sortOrder) {
    sortedArr.push(sortOrder[item]);
  }

  const images = sortedArr.map((tech) => (
    <img
      key={tech.id}
      alt={tech.altText}
      src={tech.logo.asset.fluid.src}
      title={tech.altText}
      className="container-image"
    />))

  console.log(images);

  return (
    <Layout>
      <HomeStyles>
        <Logo />
        <div className="image-grid">
          { images }
        </div>
        <Img fluid={data.aboutMe.edges[0].node.headshot.asset.fluid}
          backgroundColor="white" style={{ maxWidth: '300px'}} />
      </HomeStyles>
    </Layout>
  )
}
