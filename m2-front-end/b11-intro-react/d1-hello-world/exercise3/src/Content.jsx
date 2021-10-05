import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido',
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
];

function mapArray() {
  return conteudos.map((obj) => {
    return (
      <ul>
        <li>O conteúdo é: {obj.conteudo}</li>
        <li>Status: {obj.status}</li>
        <li>Bloco: {obj.bloco}</li>
      </ul>
    );
  });
}

class Content extends React.Component {
  render() {
    return (
      <div key='key' id='content'>
        {mapArray()}
      </div>
    );
  }
}

export default Content;
