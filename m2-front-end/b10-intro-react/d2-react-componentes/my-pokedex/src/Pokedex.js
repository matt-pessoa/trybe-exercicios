import React from 'react';
import Pokemon from './Pokemon';
import data from './data';

class Pokedex extends React.Component {
  render() {
    return (
      <section className='pokedex'>
        <h1>Pokedex</h1>
        <div>
          {data.map((obj, index) => (
            <Pokemon key={index} pokemon={obj} />
          ))}
        </div>
      </section>
    );
  }
}

export default Pokedex;
