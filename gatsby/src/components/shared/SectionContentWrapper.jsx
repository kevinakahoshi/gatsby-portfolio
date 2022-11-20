import React from 'react';
import styled from 'styled-components';

const SectionContentWrapperStyles = styled.div`
  max-width: 1140px;
  margin: auto;
`;

const SectionContentWrapper = ({ children }) => (
  <SectionContentWrapperStyles>{children}</SectionContentWrapperStyles>
);

export default SectionContentWrapper;
