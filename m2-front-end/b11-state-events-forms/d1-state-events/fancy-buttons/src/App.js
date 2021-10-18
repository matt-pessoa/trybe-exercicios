import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: Math.floor(Math.random() * 101),
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSub = this.handleSub.bind(this);
    this.handleDouble = this.handleDouble.bind(this);
    this.handleHalve = this.handleHalve.bind(this);
  }

  handleAdd() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  handleSub() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  handleDouble() {
    this.setState((prevState) => ({
      count: prevState.count * 2,
    }));
  }

  handleHalve() {
    this.setState((prevState) => ({
      count: prevState.count / 2,
    }));
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleSub}>Subtract</button>
        <button onClick={this.handleDouble}>Double</button>
        <button onClick={this.handleHalve}>Halve</button>
      </div>
    );
  }
}

export default App;
