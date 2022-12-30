import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const getAllShoeCull = (setShoeCull) => {
  axios
  .get(baseUrl)
  .then(({ data }) => {
    console.log('data --->', data);
    setShoeCull(data);
  })
}

const addShoeCull = (text, setText, setShoeCull) => {
    axios
    .post(`${baseUrl}/save`,{ text })
    .then((data) => {
        console.log(data);
        setText("");
        getAllShoeCull(setShoeCull)
    })
    .catch((err) =>
    console.log(err))

}

const updateShoeCull = (shoeCullId, text, setShoeCull, setText, setIsUpdating) => { 

  axios 
      .post(`${baseUrl}/update`, { _id: shoeCullId, text }) 
      .then((data) => { 
          setText("") 
          setIsUpdating(false) 
          getAllShoeCull(setShoeCull) 
      }) 
      .catch((err) => console.log(err)) 

} 

const deleteShoeCull = (_id, setShoeCull) => { 

  axios 
      .post(`${baseUrl}/delete`, { _id }) 
      .then((data) => { 
          console.log(data) 
          getAllShoeCull(setShoeCull) 
      }) 
      .catch((err) => console.log(err)) 

} 


export { getAllShoeCull, addShoeCull, updateShoeCull, deleteShoeCull }
