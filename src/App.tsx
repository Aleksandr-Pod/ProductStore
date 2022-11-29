import { useState, useEffect } from 'react';
import './App.css';
import { Section } from './components/Section';
import { Products } from './components/products';
import { Modal } from './components/Modal';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch ('http://localhost:3010/products')
    .then(res => res.json())
    .then(data => {
      console.log("data:", data);
      setProducts(data);
    })
    .catch(err => console.log(err));
  }, []);

  const handleAddProduct = () => {
    console.log("add product");
    setShowModal(true);
  }
  
  const handleOverlayClick = (evt: { target: any; currentTarget: any; }) => {
    if (evt.target === evt.currentTarget) setShowModal(false);
  }
  
  const handleEsc = (evt: { code: string }) => {
    if (evt.code === 'Escape') setShowModal(false)
  }
  
  return (
    <div>
      <Section title="Products Store">
        <button className="addProdBtn" onClick={handleAddProduct}>+</button>
        <Products products={products}/>
      </Section>
      {showModal && <Modal handleOverlayClick={handleOverlayClick} onEsc={handleEsc}/>}
    </div>
  );
}
