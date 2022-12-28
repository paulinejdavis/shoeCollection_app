import React from 'react';
import logo from './images/logo.png';
import image from './images/background.jpg';
import './App.css';



function App() {
  return (
  
    <div className="App">
        <div className="image" style={{ backgroundImage:`url(${image})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
      <img className="logo" src={logo} alt="Logo" />
     
     <div className="container">
      <div className="top">
        <input type="text" placeholder="Add a shoe..." />
       
      </div>
      </div>
     </div>
    </div>
  );
}

export default App ;
