import React, {useState} from 'react';
import {map} from 'lodash';
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return(
    <div>
      <SliderStyle {...settings}>
        {quoteItems}
      </SliderStyle>

    </div>
  )
};

const SliderStyle = styled(Slider)`
  width: 80%;
  margin: auto;
  .slick-arrow {
    margin-bottom: 300px;
    margin-top: -60px;
    background-color: #1D4481;
    color: red;
    @media ${screenSize.desktop} {
      margin-top: -130px;
    };
  };
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
    font-size: 56px
  };
`; 

const Author = styled.p`
  font-size: 15px;
  @media ${screenSize.desktop} { 
    font-size: 42px
  };
`; 

const HR = styled.hr`
  width: 20px;
`;

export default Rotator;