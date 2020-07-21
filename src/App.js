import React from 'react';
import './App.css';
import styled from 'styled-components';
import Rotator from './Rotator';
import data from './data.json'
import Vector from './assets/Vector.png';
import Vector2 from './assets/Vector2.png'
import {map} from 'lodash';

const firstGroup = data[0].quotes
const secondGroup = data[1].quotes
console.log(data[0].quotes)
console.log(map(firstGroup, 'message', 'attribution'))

function App() {
  return (
    <div>
      <Card className="App">
        <Image 
          src={Vector}
          left={67.88} 
          top={1.69}
          bottom={58.67}
        />
          {/* <Rotator group={map(firstGroup, 'message')} /> */}
        <Rotator group={firstGroup[0]} />
      </Card>
      <Card>
        <Image 
          src={Vector2} 
          right={67} 
          top={49.2}
          bottom={11.62}
        />
        <Rotator group={secondGroup[0]}/> 
      </Card>
    </div>
  );
}

const Card = styled.div`
  position: relative;
   height: 100vh;
`;

const Image = styled.img`
  position: absolute;
  left: ${prop => prop.left ? prop.left : 0}%;
  right: ${prop => prop.right ? prop.right : 0}%;
  top: ${prop => prop.top ? prop.top : 0}%;
  bottom: ${prop => prop.bottom ? prop.bottom : 0}%;
  height: 860px;
`;

export default App;