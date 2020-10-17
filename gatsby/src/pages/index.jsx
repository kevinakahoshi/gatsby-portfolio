import React from "react"
import styled from "styled-components"

const HomeStyles = styled.div`
  h1 {
    font-size: 3rem;
  }
`;

export default function Home() {
  return <HomeStyles>
    <h1>Hello World</h1>
  </HomeStyles>
}
