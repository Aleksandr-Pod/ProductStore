import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import './App.css';
import { Section } from './components/Section';
import { Products } from './components/products';
import { Modal } from './components/Modal';
// import { getProducts } from './services';
import { loadProduct } from './Redux/productsSlice';


export const App = () => {
  const {products} = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // const productList = await getProducts();
    // dispatch(productList);
    fetch ('http://localhost:3010/products')
    .then(res => res.json())
    .then(data => {
      console.log("data:", data);
      dispatch(loadProduct(data));
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
