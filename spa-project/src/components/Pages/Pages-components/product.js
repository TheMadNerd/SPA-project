import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../products'


const ProductPage = () => {
  return (
    <>
      <div>Strona produktu</div>
      <Product />
      <Link to="/products">Powrót do listy produktów</Link>
    </>

  );
}

export default ProductPage;