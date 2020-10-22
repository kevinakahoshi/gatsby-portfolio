import React from 'react';
import styled from 'styled-components';

const SectionContentWrapperStyles = styled.div`
  max-width: 1170px;
  margin: auto;
`;

const SectionContentWrapper = ({ children }) => {
  return (
    <SectionContentWrapperStyles>
      { children }
    </SectionContentWrapperStyles>
  )
}

export default SectionContentWrapper;
