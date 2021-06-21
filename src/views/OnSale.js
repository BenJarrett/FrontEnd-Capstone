import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import ProudctsCard from '../App/components/ProductCard';
import { getOnSaleProducts } from '../helpers/data/productsData';
import OnSaleProudctsCard from '../App/components/OnSaleProductCard';
// import { useState } from 'react';

function OnSaleProducts({
  firebaseKey,
  image,
  price,
  name,
}) {
  const [onSale, setOnSale] = useState([]);
  useEffect(() => {
    getOnSaleProducts().then((response) => setOnSale(response));
  }, []);
  return (
    <div className="this">
    <h1>Products</h1>
      <div className="card-container">
       <OnSaleProudctsCard
       firebaseKey={firebaseKey}
       image={image}
       price={price}
       name={name}
       setOnSale={setOnSale}
       onSale={onSale}
       />
       </div>
     </div>
  );
}

OnSaleProducts.propTypes = {
  firebaseKey: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
  products: PropTypes.array,
  setProducts: PropTypes.func
};

export default OnSaleProducts;
