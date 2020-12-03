import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Layout from '../components/Layout';
import topographicHero from '../assets/images/topographic-hero.svg';

const NotFoundStyles = styled.section`
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .not-found-content-wrapper {
    display: grid;
    grid-gap: 1rem;

    h1,
    h2 {
      text-align: center;
    }

    a {
      text-align: center;
      color: var(--link-inactive-grey);
      border: 2px solid var(--link-inactive-grey);
      padding: .75rem;
      border-radius: .25rem;
      gap: .5rem;
      text-decoration: none;
      display: block;
      width: fit-content;
      margin: auto;

      &:hover {
        color: #000000B3;
        border-color: #000000B3;
      }
    }
  }

`;

const NotFound = () => {
  return (
    <Layout>
      <NotFoundStyles className="section">
        <div className="not-found-content-wrapper">
          <div className="text-wrapper">
            <h1>
              Whoa there buddy!
            </h1>
            <h2>
              Looks like you're lost.
            </h2>
          </div>
          <Link to="/">
            Take me home!
          </Link>
        </div>
      </NotFoundStyles>
    </Layout>
  )
}

export default NotFound;
