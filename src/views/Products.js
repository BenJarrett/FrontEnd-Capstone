import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProudctsCard from '../App/components/ProductCard';
import { getProducts } from '../helpers/data/productsData';

function Products({
  firebaseKey,
  image,
  price,
  name,
  user
}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
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
       user={user}
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
  user: PropTypes.any,
  setProducts: PropTypes.func
};

export default Products;
