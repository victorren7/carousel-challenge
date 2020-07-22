import React from 'react';
import './App.css';
import styled from 'styled-components';
import Rotator from './Rotator';
import data from './data.json'
import Vector from './assets/Vector.png';
import Vector2 from './assets/Vector2.png'
import {screenSize} from './ScreenSize'

const firstGroup = data[0].quotes
const secondGroup = data[1].quotes
console.log('secondGroup', secondGroup.message)

function App() {
  return (
    <div>
      <Card 
        className="App" 
        // marginBottom={70} 
        // desktopMarginBottom={178}
      >
        <Image 
          src={Vector}
          right={.01}
          top={1.69}
          bottom={58.67}
        />
        <Rotator group={firstGroup}/>
      </Card>
      <Space/>
      <Card>
        <Image 
          src={Vector2} 
          right={75} 
          bottom={3}
          left={0.1}
        />
        <Rotator group={secondGroup} blueFont/> 
      </Card>
    </div>
  );
}

const Card = styled.div`
  position: relative;
  @media ${screenSize.desktop} {
    height: 815px;
  };
`;

const Space = styled.div`
  padding: 170px 0;
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
  };
`;

export default App;