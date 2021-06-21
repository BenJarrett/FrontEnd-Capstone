import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import ProudctsCard from '../App/components/ProductCard';
import { getOnSaleProducts } from '../helpers/data/productsData';
import OnSaleProudctsCard from '../App/components/OnSaleProductCard';
// import { useState } from 'react';

function OnSaleProducts({
  admin,
  user
}) {
  const [onSale, setOnSale] = useState([]);
  useEffect(() => {
    getOnSaleProducts().then((response) => setOnSale(response));
  }, []);
  return (
    <div className="this">
    <h1>On Sale!</h1>
      <div className="card-container">
        {onSale.map((productInfo) => (
       <OnSaleProudctsCard
       key={productInfo.firebaseKey}
       firebaseKey={productInfo.firebaseKey}
       image={productInfo.image}
       price={productInfo.price}
       name={productInfo.name}
       setOnSale={setOnSale}
       onSale={onSale}
       admin={admin}
       user={user}
       />
        ))}
       </div>
     </div>
  );
}

OnSaleProducts.propTypes = {
  admin: PropTypes.any,
  user: PropTypes.any
};

export default OnSaleProducts;
