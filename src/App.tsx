import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Form title</h1>
      <form>
        <label>Label</label>
        <input name="text" placeholder='Custom text' />
        <button>My button</button>
      </form>
    </div>
  );
}

export default App;
