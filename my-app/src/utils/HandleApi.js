import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const getAllShoeCull = (setShoeCull) => {
  axios
  .get(baseUrl)
  .then(({data}) => {
    console.log('data -->', data);
    setShoeCull(data);
  })
}

const addShoeCull = (shoeCull, setShoeCull) => {
    axios
    .post(baseUrl, shoeCull)
    .then(({data}) => {
        console.log('data -->', data);
        setShoeCull(data);
    })
}


export default getAllShoeCull, addShoeCull;