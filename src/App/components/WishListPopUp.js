import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  // FormGroup,
  // Label,
  // Input,
  Button
} from 'reactstrap';
import { addProductToWishList } from '../../helpers/data/UserWishListData';

const WishlistForm = ({
  user,
  name,
  image,
  price,
  sFAisle,
  sFBay,
  sFLevel,
  firebaseKey,

}) => {
  const [wishlist, setWishlist] = useState({
    name: name || '',
    image: image || '',
    price: price || '',
    sFAisle: sFAisle || '',
    sFBay: sFBay || '',
    sFLevel: sFLevel || '',
    uid: user.uid || null,
    firebaseKey: firebaseKey || null

  });

  // const handleInputChange = (e) => {
  //   setProduct((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProductToWishList(wishlist, user)
      .then((productArray) => {
        setWishlist(productArray);
      });
  };

  return (
    <div className='wishlist-form'>
    <Form
    id='wishlist-form'
    autoComplete='off'
    onSubmit={handleSubmit}
    >
        <h2>Add item to wishlist?</h2>
        <Button type='submit'>Add</Button>
      </Form>
    </div>
  );
};

WishlistForm.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.string,
  sFAisle: PropTypes.string,
  sFBay: PropTypes.string,
  sFLevel: PropTypes.string,
  user: PropTypes.any,
  firebaseKey: PropTypes.string,
  setProducts: PropTypes.func
};

export default WishlistForm;
