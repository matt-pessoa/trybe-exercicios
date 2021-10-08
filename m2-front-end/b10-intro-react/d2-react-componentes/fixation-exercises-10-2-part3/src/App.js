import React from 'react';

class App extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item, index) => {
      console.log('item: ', item);
      return <li key={index}>{item}</li>;
    });
    console.log(items);

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default App;
