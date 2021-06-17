import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getWishlist } from '../helpers/data/UserWishListData';
import WishlistCard from '../App/components/WishListCard';

function CurrentList({
  firebaseKey,
  image,
  price,
  name,
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
    <h1>Your List</h1>
      <div className="card-container">
       <WishlistCard
       firebaseKey={firebaseKey}
       image={image}
       price={price}
       name={name}
       user={user}
       setWishlists={setWishlists}
       wishlists={wishlists}
       />
       </div>
     </div>
  );
}

CurrentList.propTypes = {
  firebaseKey: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
  user: PropTypes.any,
};

export default CurrentList;
