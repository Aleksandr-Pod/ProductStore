import axios from 'axios';

export const getProducts = () => {
  axios.get('http://localhost:3010/products')
  .then(res => res.data)
  .catch(err => console.log(err));
}

export const addProducts = () => {
  axios.post('http://localhost:3010/products')
  .then(res => res.data)
  .catch(err => console.log(err));
}