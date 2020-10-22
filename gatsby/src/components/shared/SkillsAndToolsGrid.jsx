import React from 'react';
import styled from 'styled-components';

const SkillsAndToolsGridStyles = styled.div`
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: var(--columns);

    @media (min-width: 851px) {
      --columns: 1fr 1fr 1fr 1fr;
    }

    @media (max-width: 850px) and (min-width: 501px) {
      --columns: 1fr 1fr 1fr;
    }

    @media (max-width: 500px) {
      --columns: 1fr 1fr;
    }
  }
`;

const SkillsAndToolsGrid = ({ children }) => {
  return (
    <SkillsAndToolsGridStyles>
      { children }
    </SkillsAndToolsGridStyles>
  )
}

export default SkillsAndToolsGrid;
