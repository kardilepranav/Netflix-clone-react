/* eslint-disable no-unused-vars */
import React from 'react'
import Background from '../assets/login.jpg';
import styled from 'styled-components';

function BackgroundImage() {
  return (
    <Container>
      <img src={Background} alt="background" />
    </Container>
  )
}

export default BackgroundImage

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;