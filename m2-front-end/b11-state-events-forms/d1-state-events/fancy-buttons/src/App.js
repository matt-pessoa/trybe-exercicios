import React from 'react';
import './App.css';

function handleClick() {
  return console.log('Clicked');
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Clicked!',
    };
  }
  render() {
    return (
      <div className='App'>
        <button onClick={handleClick}>Click me!</button>
      </div>
    );
  }
}

export default App;
