import React from 'react';
import logo from './images/logo.png';
import './App.css';



function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="Logo" />
     
     <div className="container">
      <div className="top">
        <input type="text" placeholder="Add a shoe..." />
      </div>
     </div>
    </div>
  );
}

export default App;
