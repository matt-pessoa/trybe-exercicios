import React from 'react';
import './App.css';

function handleFirstButton() {
  return console.log('First button');
}

function handleSecondButton() {
  return console.log('Second button');
}

function handleThirdButton() {
  return console.log('Third button');
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <button onClick={handleFirstButton}>First button</button>
        <button onClick={handleSecondButton}>Second button</button>
        <button onClick={handleThirdButton}>Third button</button>
      </div>
    );
  }
}

export default App;
