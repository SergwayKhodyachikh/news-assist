import React from 'react';
import Jambo from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import boatImage from '../assets/boatImage.jpg';
const Styled = styled.div`
 .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const Jumbotron = () => {
  return (
    <Styled>
      <Jambo fluid={true} className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h1>welcome</h1>
          <p>learn to code from YouTube videos</p>
        </Container>
      </Jambo>
    </Styled>
  );
};

export default Jumbotron;
