import React from 'react';

const AboutBioParagraphs = ({ bio }) => {
  return bio.map((item) => {
    return (
      <p key={item.children[0]._key}>
        { item.children[0].text}
      </p>
    )
  });
}

export default AboutBioParagraphs;
