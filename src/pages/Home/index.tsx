import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 2rem;
    margin: 0;
  }
  span {
    font-size: 1rem;
  }
`;

function Home() {
  return (
    <Wrapper className="animate__animated animate__fadeIn animate__fast">
      <p>Chrome Extension</p>
      <span>With React JS & Typescript</span>
    </Wrapper>
  );
}

export default Home;
