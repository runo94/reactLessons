import { useState } from 'react';

import './App.css';
import Image from '../Image';
import Button from '../Button';
import List from '../List';

const dataList = ['title 1', 'title 2', 'title 3'];


function App() {

  const [done, setDone] = useState(false);

  const handleClick = () => {
    console.log('hello')
    setDone(!done)
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Image
        image="https://pbs.twimg.com/media/FIrNiNHX0AAd-up?format=jpg&name=small"
        myAlt="Ded"
        mytitle="Mazai"
      />
      <p onClick={handleClick}>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <Button
        type="link"
        link="https://reactjs.org"
        targetType="_blank"
        text="Learn React"
      />

      <Button
        handler={handleClick}
        text="Learn React FUN"
      />

      <div style={{width: '200px', height: '100px', backgroundColor: done ? 'green' : 'red'}}>

      </div>

      <List dataList={dataList} />
    </div>
  );
}

export default App;
