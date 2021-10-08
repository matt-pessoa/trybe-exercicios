import React from 'react';
import Pokemon from './Pokemon';
import data from './data';
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    return (
      <section className='pokedex'>
        <div className='container'>
          <header>
            <h1>Pokédex</h1>
          </header>

          <div className='pokemons'>
            {data.map((obj, index) => (
              <Pokemon key={index} pokemon={obj} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Pokedex;
