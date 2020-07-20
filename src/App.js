import React from 'react';
import './App.css';
import Rotator from './Rotator';
import data from './data.json'

const firstGroup = data[0].quotes
console.log('firstGroup', firstGroup[0])

function App() {
  return (
    <div className="App">
      <Rotator group={firstGroup[0]} />
    </div>
  );
}

export default App;