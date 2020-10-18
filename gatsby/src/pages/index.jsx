import { graphql } from "gatsby";
import React from "react"
import styled from "styled-components"
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import Logo from "../components/header/Logo";

export const query = graphql`
  query {
    tech: allSanityTechnology(filter: {currentlyUsing: {eq: true}}) {
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
  const images = data.tech.nodes.map(image => {
    return <img src={image.logo.asset.fluid.src} key={image.id} alt={image.alt} className="container-image" />
  })

  console.log(data.aboutMe);

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
