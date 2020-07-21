import React, {useState} from 'react';
import {map} from 'lodash';
import styled from 'styled-components';
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {screenSize} from './ScreenSize'
import next from './assets/next.svg';
import back from './assets/back.svg';

function Rotator({group, blueFont}) {

  const quotes = Array.from(group)
  const quoteItems = quotes.map((quote, index) =>
    <Container key={index}>
      <Wrapper>
        <Message style={{color: blueFont && '#0E4EF3'}}>
          {quote.message}
        </Message>
        <HR/>
        <Author>
          {quote.attribution}
        </Author>  
      </Wrapper> 
    </Container>
  );

  return(
    <div>
      <CarouselStyle 
        arrows 
        infinite
      >
        {quoteItems}
      </CarouselStyle>

    </div>
  )
};

const CarouselStyle = styled(Carousel)`
  width: 90%;
  margin: auto;
`;

const Container = styled.div`
  display: grid;
  text-align: center;
`;
const Wrapper = styled.div`
  position: relative
`;

const Message = styled.p`
  font-size: 20px;
  @media ${screenSize.desktop} { 
    font-size: 72px
  };
`; 

const Author = styled.p`
  font-size: 15px;
  @media ${screenSize.desktop} { 
    font-size: 56px
  };
`; 

const HR = styled.hr`
  width: 20px;
`;

export default Rotator;