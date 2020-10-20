import React from 'react';
import styled from 'styled-components';

const AboutStyles = styled.section`
  background: var(--light-grey);
`;

const About = () => {
  return (
    <AboutStyles id="about" className="section">
      <div className="about-image"></div>
      <div className="about-text">
        <h1>About Me</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aut excepturi asperiores magni eius. Nostrum doloribus, exercitationem minima dolorum accusamus aliquam hic quo eius, similique, eum sint error repellendus neque?</p>
        <p>Fugit, molestiae labore! Et eaque odit reprehenderit fuga molestiae sit porro minus illum ab? Optio a non reiciendis voluptatem fugit officiis quas tempore enim soluta. Tenetur repellat numquam facere cupiditate!</p>
        <p>Enim iusto quaerat ipsam est illo, aliquid doloremque mollitia facere nemo eius incidunt sit, tempora voluptas dolores quod porro autem minima cumque id ad nesciunt! Quas doloremque nulla ea animi?</p>
      </div>
    </AboutStyles>
  )
}

export default About;
