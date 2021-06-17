import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProudctsCard from '../App/components/ProductCard';
import { getProducts } from '../helpers/data/productsData';

function Products({
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
    <h1>All Products</h1>
      <div className="card-container">
      {products.map((productInfo) => (
       <ProudctsCard
       key={productInfo.firebaseKey}
       firebaseKey={productInfo.firebaseKey}
       productId={productInfo.firebaseKey}
       image={productInfo.image}
       price={productInfo.price}
       name={productInfo.name}
       user={user}
       setProducts={setProducts}
       products={products}
       />
      ))}
       </div>
     </div>
  );
}

Products.propTypes = {
  user: PropTypes.any,

};

export default Products;
