import React from 'react';
import './App.css';
import AllQuotes from './Components/Allquotes';
import Rotator from './Components/Rotator';
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom'
import styled from 'styled-components';
import data from './data.json'
import {screenSize} from './ScreenSize';
import Vector from './assets/Vector.png';
import Vector2 from './assets/Vector2.png';

const firstSectionTitle = data[0].section_title
const secondSectionTitle = data[1].section_title
const firstGroup = data[0].quotes
const secondGroup = data[1].quotes

function App() {
  return (
    <BrowserRouter>
      <div>
        <Card>
          <Image 
            src={Vector}
            right={.01}
            top={1.69}
            bottom={58.67}
          />
          <Rotator title={firstSectionTitle}  group={firstGroup} />
          <Link  to='/all-quotes'>
            View All
          </Link>

        </Card>
        <Space/>
        <Card>
          <Image 
            src={Vector2} 
            right={75} 
            bottom={6}
            left={0.1}
          />
          <Rotator title={secondSectionTitle} group={secondGroup} blueFont /> 
        </Card>
        <Switch>
          <Route path='/all-quotes' component={AllQuotes} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

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

const Anchor = styled(Link)`
  padding-top: 20px;
  width: 155px;
  height: 55px;
  cursor: pointer;
`;

export default App;