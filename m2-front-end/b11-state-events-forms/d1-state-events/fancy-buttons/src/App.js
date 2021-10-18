import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    // A função abaixo vincula "manualmente" o `this` à nossa função handleSecondButton
    this.handleSecondButton = this.handleSecondButton.bind(this);
  }

  handleFirstButton() {
    return console.log(this); // this não existe aqui
  }

  handleSecondButton() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente e tudo o mais daqui de dentro */
    return console.log(this);
  }

  handleThirdButton = () => {
    /* Arrow functions não necessitam do bind, no entanto são menos performáticas */
    return console.log(this);
  };
  render() {
    return (
      <div className='App'>
        <button onClick={this.handleFirstButton}>No bind</button>
        <button onClick={this.handleSecondButton}>Bind</button>
        <button onClick={this.handleThirdButton}>Arrow function</button>
      </div>
    );
  }
}

export default App;
