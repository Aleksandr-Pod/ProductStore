import { Section } from './components/Section';
import { Products } from './components/products';
import { useState, useEffect } from 'react';
import './App.css';

export const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch ('http://localhost:3010/products')
    .then(res => res.json())
    .then(data => {
      console.log("data:", data);
      setProducts(data);
    })
    .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <Section title="Products Store">
        <button type='button' onClick={handleAddProduct}>+</button>
        <Products products={products}/>
      </Section>
    </div>
  );
}

const handleAddProduct = () => {
  console.log("add product");
}