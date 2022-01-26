import { useState } from 'react';
import Form from '../Form';
import ToDoList from '../ToDoList';

import './App.css';

function App() {

  const [toDo, setToDo] = useState([])
  const [done, setDone] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (e.target.task.value.length > 0) {
      setToDo([
        ...toDo,
        {
          "id": toDo.length + 1,
          "task": e.target.task.value,
          "date": new Date(),
          "status": 'todo'
        }
      ])
    }

    e.target.reset()
  }

  const handleMove = (e, item) => {
    e.preventDefault();
    setDone([...done, item]);
    toDo.splice(toDo.indexOf(item), 1);
  }

  const handleDelete = (e, item) => {
    e.preventDefault();
    setToDo(toDo.filter(elem => elem.id !== item.id));
  }

  console.log('done', done);
  console.log('todo', toDo);

  return (
    <div className="app">
      <Form handleClick={handleAdd} />
      <ToDoList data={toDo} handleMove={handleMove} handleDelete={handleDelete} />
    </div>
  );
}

export default App;