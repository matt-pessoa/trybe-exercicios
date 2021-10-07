import './App.css';
import data from './data';
import Pokemon from './Pokemon';

function App() {
  return (
    <div className='pokemons'>
      {data.map((obj) => (
        <Pokemon pokemon={obj} />
      ))}
    </div>
  );
}

export default App;
