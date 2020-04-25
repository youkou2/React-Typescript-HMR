import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App1: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const onClick = () => {
    setCount(p => p + 1);
    console.log('Edited !!!');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={onClick}>My Counter : {count}</button>
      </header>
    </div>
  );
}

export default hot(App);
