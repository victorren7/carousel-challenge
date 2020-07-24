import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {screenSize} from '../utils/ScreenSize';
import SvgBack from '../assets/SvgBack';
import SvgNext from '../assets/SvgNext';

function Carousel({group, blueFont, title}) {

  const quotes = Array.from(group)
  const quoteItems = quotes.map((quote, index) =>
    <Container key={index}>
      <Grid>
        <Title>
          {title.toUpperCase()}
        </Title>
        <Wrapper>
          <Message style={{color: blueFont && '#0E4EF3'}}>
            {quote.message}
          </Message>
          <HR/>
          <Author>
            {quote.attribution}
          </Author>  
        </Wrapper> 
      </Grid>
    </Container>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidecount: 4,
    prevArrow: <SvgBack/>,
    nextArrow: <SvgNext/>
  };

  return(
    <div>
      <SliderStyle {...settings}>
        {quoteItems}
      </SliderStyle>
    </div>
  );
};

const SliderStyle = styled(Slider)`
  width: 85%;
  margin: auto;
  .slick-dots {
    bottom: -3%;
  };
  .slick-arrow {
    margin-bottom: 300px;
    margin-top: -60px;
    // background-color: trans;
    @media ${screenSize.desktop} {
      margin-top: -130px;
    };
  };
`;

const Container = styled.div`
  display: grid;
  text-align: center;
  margin-top: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  @media ${screenSize.desktop} { 
    grid-gap: 45px;
  };
`

const Wrapper = styled.div`
  display: grid;
  position: relative;
  margin: auto;
  grid-gap: 10px;
  @media ${screenSize.desktop} { 
    width: 95%;
    grid-gap: 40px;

  };
`;

const Title = styled.p`
  font-size: 12px;
  @media ${screenSize.desktop} { 
    font-size: 20px
  };
`;

const Message = styled.p`
  font-size: 25px;
  @media ${screenSize.desktop} { 
    font-size: 56px;
    width: 90%;
    margin: auto;
  };
`; 

const Author = styled.p`
  font-size: 18px;
  @media ${screenSize.desktop} { 
    font-size: 35px;
    width: 60%;
    margin: auto;
  };
`; 

const HR = styled.hr`
  width: 20px;
`;

export default Carousel;