import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleSecondButton = this.handleSecondButton.bind(this);
  }

  handleFirstButton() {
    return console.log(this); // this não existe aqui
  }

  handleSecondButton() {
    return console.log(this); // é possível chamar o this neste caso, pois ele está ligado pelo constructor
  }

  handleThirdButton() {
    return console.log('Third button');
  }
  render() {
    return (
      <div className='App'>
        <button onClick={this.handleFirstButton}>First button</button>
        <button onClick={this.handleSecondButton}>Second button</button>
        <button onClick={this.handleThirdButton}>Third button</button>
      </div>
    );
  }
}

export default App;
