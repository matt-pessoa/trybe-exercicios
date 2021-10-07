import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
      <ul>
        <li key='pokemon-name'>{this.props.pokemon.name}</li>
        <li key='pokemon-type'>{this.props.pokemon.type}</li>
        <li key='pokemon-weight'>
          {this.props.pokemon.averageWeight.value}{' '}
          {this.props.pokemon.averageWeight.measurementUnit}
        </li>
        <li key='pokemon-image'>{this.props.pokemon.image}</li>
      </ul>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.number,
  measurementUnit: PropTypes.string,
  image: PropTypes.string,
};

export default Pokemon;
