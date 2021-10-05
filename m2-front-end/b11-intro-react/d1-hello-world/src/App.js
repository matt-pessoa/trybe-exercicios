import './App.css';

const Task = (value) => {
  return <li>{value}</li>;
};

const compromissos = ['Aula ao vivo', 'Brincar com o dog', 'Estudar React'];

function everyTask() {
  return compromissos.map((task) => Task(task));
}

function App() {
  return <ul>{everyTask()}</ul>;
}

export default App;
