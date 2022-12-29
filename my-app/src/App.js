import React from 'react';
import logo from './images/logo.png';
import image from './images/background.jpg';
import './App.css';




function App() {
  return (
  
    <div className="App"
    style={{ backgroundImage:`url(${image})`}}>
      <img className="logo" src={logo} alt="Logo"/>
     
     <div className="container">
      <div className="top">
        <input type="text" placeholder="Add a shoe.." />

          <div className="add">Add</div>
      </div>
      <div className="list">
        <div className="shoeCull">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App ;
