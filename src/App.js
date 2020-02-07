import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameComponent from './components/GameComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameComponent/>
      </header>
    </div>
  );
}

export default App;
