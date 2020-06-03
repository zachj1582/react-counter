import React from 'react';
import './App.css';
import Counter from './Components/Counter';

function App() {

  window.addEventListener('load', ()=> document.querySelector('body').classList.add('loaded'))

  return (
    <div className="App">
      <header className="App-header">
        <h2>Ticker</h2>
      </header>
      <Counter/>
    </div>
  );
}

export default App;
