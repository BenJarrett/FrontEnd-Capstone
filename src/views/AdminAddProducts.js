import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import ProductsForm from '../App/components/ProductForm';
import { getProducts } from '../helpers/data/productsData';

function AddProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);
  return (
    <>
      <ProductsForm setProducts={setProducts} products={products} />
    </>
  );
}

export default AddProduct;
