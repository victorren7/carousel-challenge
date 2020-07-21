import React from 'react';
import {map} from 'lodash';
import styled from 'styled-components';
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import next from './assets/next.svg';
import back from './assets/back.svg';

const Rotator = ({group}) => {
  
  return(
    <div>
      <CarouselStyle 
        arrows 
        infinite
        // plugins={[
        //   {
        //     resolve: arrowsPlugin,
        //     options: {
        //       arrowLeftDisabled:<button><img src={back} /></button>,
        //       arrowLeft: <button><img src={back} /></button>,
        //       arrowRight: <button><img src={next}/></button>,
        //       arrowRightDisabled: <button><img src={back} /></button>,

        //       addArrowClickHandler: true,
        //     }
        //   }
        // ]}
      >
        {map({group}, (quote, index) => {
          return (
            <Container key={index}>
              <Wrapper>
                <Text fontSize={72}>
                  {quote.message}
                </Text>
                <HR />
                <Text fontSize={56}>
                  {quote.attribution}
                </Text>  
              </Wrapper> 
            </Container>
          )
        })}
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
width: 1130px;
text-align: center;
`;
const Wrapper = styled.div`
  position: relative
`;

const Text = styled.p`
  font-size: ${props => props.fontSize ? props.fontSize : 16}px;
`; 

const HR = styled.hr`
  width: 20px;
`;



export default Rotator;