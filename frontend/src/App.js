
import { useEffect, useState } from 'react';
import ShoeCull from "./components/shoeCull";
import {updateShoeCull, deleteShoeCull, getAllShoeCull, addShoeCull} from "./utils/HandleApi"
import logo from './images/logo.png';
import image from './images/background.jpg';





function App() {

  const [shoeCull, setShoeCull] = useState([]);
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [shoeCullId, setShoeCullId] = useState("")

  useEffect(() => {
    getAllShoeCull(setShoeCull);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setShoeCullId(_id)
  }
  
  return (
  
    <div className="App"
    
    style={{ backgroundImage:`url(${image})`}}>
      <div className="logo"> <img src={logo} alt="logo" width={700}/>
      </div>
     <div className="container">

      <div className="top">
        <input type="text" placeholder="Add a shoe.." value = { text } onChange ={(e) => setText(e.target.value)}/>

         <div 
            className="add" 
            onClick={isUpdating ? 
              () => updateShoeCull(shoeCullId, text, setShoeCull, setText, setIsUpdating) 
              : () => addShoeCull(text, setText, setShoeCull)}> 
            {isUpdating ? "Update" : "Add"} 
          </div> 

        </div> 

        <div className="list"> 

          {shoeCull.map((item) => <ShoeCull
          key={item._id} 
          text={item.text} 
          updateMode = {() => updateMode(item._id, item.text)} 
          deleteShoeCull = {() => deleteShoeCull(item._id, setShoeCull)} />)} 

        </div>
      </div>
   </div>
    
  );
}

export default App ;
