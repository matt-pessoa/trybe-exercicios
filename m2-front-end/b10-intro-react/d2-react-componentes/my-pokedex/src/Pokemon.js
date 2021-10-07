import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.pokemon.name}</li>
        <li>{this.props.pokemon.type}</li>
        <li>{this.props.pokemon.averageWeight.value}</li>
        <li>{this.props.pokemon.averageWeight.measurementUnit}</li>
        <li>{this.props.pokemon.image}</li>
      </ul>
    );
  }
}

export default Pokemon;
