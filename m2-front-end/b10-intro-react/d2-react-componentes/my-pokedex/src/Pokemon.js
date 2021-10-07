import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
      <div className={`card ${this.props.pokemon.type}`}>
        <div className='info'>
          <h2 key='pokemon-name'>{this.props.pokemon.name}</h2>
          <p key='pokemon-type'>{this.props.pokemon.type}</p>
          <p key='pokemon-weight'>
            {this.props.pokemon.averageWeight.value}{' '}
            {this.props.pokemon.averageWeight.measurementUnit}
          </p>
        </div>
        <div className='pok-image'>
          <img
            key='pokemon-image'
            src={this.props.pokemon.image}
            alt={this.props.pokemon.name}
          />
        </div>
      </div>
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
