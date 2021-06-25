import React, { useEffect, useState } from 'react';
import ProductsForm from '../App/components/ProductForm';
import { getProducts } from '../helpers/data/productsData';
import ProductFormHeader from '../App/components/StaffFormHeader';

function AddProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);
  return (
    <>
    <ProductFormHeader/>
      <ProductsForm setProducts={setProducts} products={products} />
    </>
  );
}

export default AddProduct;
