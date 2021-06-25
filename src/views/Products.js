import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProudctsCard from '../App/components/ProductCard';
import { getProducts } from '../helpers/data/productsData';
import AllProductsHeader from '../App/components/AllProductsHeader';

function Products({
  user,
  admin
}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <div className="this">
      <AllProductsHeader/>
      <div className="card-container">
      {products.map((productInfo) => (
       <ProudctsCard
       key={productInfo.firebaseKey}
       firebaseKey={productInfo.firebaseKey}
       productId={productInfo.firebaseKey}
       image={productInfo.image}
       price={productInfo.price}
       name={productInfo.name}
       sFAisle={productInfo.sFAisle}
       sFBay={productInfo.sFBay}
       sFLevel={productInfo.sFLevel}
       sFStock={productInfo.sFStock}
       wHAisle={productInfo.wHAisle}
       onSale={productInfo.onSale}
       onSalePrice={productInfo.onSalePrice}
       user={user}
       admin={admin}
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
  admin: PropTypes.any,
};

export default Products;
