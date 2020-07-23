import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import data from './data.json'
import {screenSize} from './utils/ScreenSize';
import Vector from './assets/Vector.png';
import Vector2 from './assets/Vector2.png';
import Carousel from './Components/Carousel';

const firstSectionTitle = data[0].section_title
const secondSectionTitle = data[1].section_title
export const firstGroup = data[0].quotes
export const secondGroup = data[1].quotes

class App extends Component {
  
  render() {
    return (
      <div>
        <Card>
          <Image 
            src={Vector}
            right={.01}
            top={1.69}
            bottom={58.67}
          />
          <Carousel title={firstSectionTitle}  group={firstGroup} />
            <LinkStyle to='/all-quotes'>
              VIEW ALL
            </LinkStyle>
        </Card>
        <Space/>
        <Card>
          <Image 
            src={Vector2} 
            right={75} 
            bottom={6}
            left={0.1}
          />
          <Carousel title={secondSectionTitle} group={secondGroup} blueFont /> 
        </Card>
      </div>
    );
  };
};

const Card = styled.div`
  position: relative;
  @media ${screenSize.desktop} {
    height: 815px;
  };
`;

const Space = styled.div`
  padding: 90px 0;
  @media ${screenSize.desktop} {
    padding: 170px 0;
  };
`;

const Image = styled.img`
  position: absolute;
  left: ${prop => prop.left ? prop.left : null}%;
  right: ${prop => prop.right ? prop.right : null}%;
  top: ${prop => prop.top ? prop.top : null}%;
  bottom: ${prop => prop.bottom ? prop.bottom : null}%;
  height: 400px;
  @media ${screenSize.desktop} {
    height: 800px;
    bottom: ${prop => prop.desktopBottom ? prop.desktopBottom : null}%;
  };
`;

const LinkStyle = styled(Link)`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100px;
  height: 35px;
  font-size: 13px;
  margin: 50px auto 0;
  border-radius: 3px;
  background-color: #000;
  color: #fff;
  @media ${screenSize.desktop} {
    width: 130px;
    height: 55px;
    font-size: 18px;
  };
`;

export default App;