import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProudctsCard from '../App/components/ProductCard';
import { getProducts } from '../helpers/data/productsData';
// import { useState } from 'react';

function Products({
  firebaseKey,
  image,
  price,
  name,
}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);
  return (
    <div className="this">
    <h1>Products</h1>
      <div className="card-container">
       <ProudctsCard
       firebaseKey={firebaseKey}
       image={image}
       price={price}
       name={name}
       setProducts={setProducts}
       products={products}
       />
       </div>
     </div>
  );
}

Products.propTypes = {
  firebaseKey: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
  products: PropTypes.array,
  setProducts: PropTypes.func
};

export default Products;
