import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Layout from '../components/Layout';
import topographic from '../assets/images/topographic.svg';

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
  background-image: linear-gradient(-45deg, #e64242ef, #e67342ef),
    url(${topographic});
  background-position: center;
  background-size: contain;
  background-repeat: repeat;

  .not-found-content-wrapper {
    display: grid;
    grid-gap: 1rem;

    h1,
    h2 {
      text-align: center;
      color: var(--white);
    }

    a {
      text-align: center;
      color: var(--white);
      border: 2px solid var(--white);
      padding: 0.75rem;
      border-radius: 0.25rem;
      gap: 0.5rem;
      text-decoration: none;
      display: block;
      width: fit-content;
      margin: auto;
    }
  }
`;

const NotFound = () => (
  <Layout>
    <NotFoundStyles className="section">
      <div className="not-found-content-wrapper">
        <div className="text-wrapper">
          <h1>Whoa there buddy!</h1>
          <h2>Looks like you're lost.</h2>
        </div>
        <Link to="/">Take me home!</Link>
      </div>
    </NotFoundStyles>
  </Layout>
);

export default NotFound;
