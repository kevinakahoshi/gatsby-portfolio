import React from 'react';

const AboutBioParagraphs = ({ bio }) => bio.map((item) => (
    <p key={item.children[0]._key}>
      { item.children[0].text}
    </p>
  ));

export default AboutBioParagraphs;
