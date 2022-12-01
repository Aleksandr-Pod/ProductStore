import axios from 'axios';
import { IProduct } from '../interfaces';

export const getProducts = () => {
  axios.get('http://localhost:3010/products')
  .then( res => res.data )
  .catch( err => console.log(err) );
}

export const addProducts = (data: IProduct) => {
  axios.post('http://localhost:3010/products', {data})
  .then(res => res.data )
  .catch(err => console.log(err));
}