import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getWishlist } from '../helpers/data/UserWishListData';
import WishlistCard from '../App/components/WishListCard';
import WishlistHeader from '../App/components/WishlistHeader';

function CurrentList({
  user
}) {
  const [wishlists, setWishlists] = useState([]);
  useEffect(() => {
    getWishlist(user).then((response) => {
      setWishlists(response);
    });
  }, []);

  return (
    <div className="this">
      <WishlistHeader/>
      <div className="card-container">
      {wishlists.map((productInfo) => (
       <WishlistCard
       key={productInfo.firebaseKey}
       firebaseKey={productInfo.firebaseKey}
       image={productInfo.image}
       price={productInfo.price}
       name={productInfo.name}
       sFAisle={productInfo.sFAisle}
       sFBay={productInfo.sFBay}
       sFLevel={productInfo.sFLevel}
       sFStock={productInfo.sFStock}
       user={user}
       setWishlists={setWishlists}
       wishlists={wishlists}
       />
      ))}
       </div>
     </div>
  );
}

CurrentList.propTypes = {
  user: PropTypes.any,
};

export default CurrentList;
