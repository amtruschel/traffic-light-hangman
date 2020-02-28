import React from 'react';
import './App.css';
import GameComponent from './components/GameComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="site-title">traffic light hangman</h1>
        <GameComponent/>
      </header>
    </div>
  );
}

export default App;
