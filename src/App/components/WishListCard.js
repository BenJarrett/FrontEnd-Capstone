import React from 'react';
// import { useHistory } from 'react-router-dom';
import {
  Card,
  Button,
  CardTitle,
  // CardLink,
  CardBody,
  CardSubtitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteWishList } from '../../helpers/data/UserWishListData';

const WishlistCard = ({
  user,
  wishlists,
  setWishlists

}) => {
  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'delete':
        deleteWishList(fbKey, user)
          .then(setWishlists);
        break;
      default:
        console.warn('No Items in Wishlist!');
    }
  };
  const deleteCardView = (fbKey) => (
    <div className='userDelete'>
      <Button onClick={() => handleClick(fbKey, 'delete')}><i className="far fa-trash-alt"></i> Delete</Button>
    </div>
  );

  return (
    wishlists.map((productInfo) => (
        <Card
        key={productInfo.firebaseKey}>
          <CardBody>
         <CardTitle tag="h5">Product Name: {productInfo.name}</CardTitle>
         <hr></hr>
         <CardSubtitle tag="h6" className="mb-2 text-muted">price: {productInfo.price}</CardSubtitle>
         </CardBody>
         <img width="100%" src={productInfo.image} className="photo" alt="Card image cap" />
                    <Button style={{ backgroundColor: '#252323', margin: '10px', textAlign: 'left' }} >Add to Favorites</Button>
         <CardBody>
         { deleteCardView(productInfo.firebaseKey) }
         </CardBody>
         </Card>
    ))
  );
};

WishlistCard.propTypes = {
  firebaseKey: PropTypes.string,
  products: PropTypes.array,
  setProducts: PropTypes.func,
  user: PropTypes.any
  // price: PropTypes.string,
  // name: PropTypes.string,
  // image: PropTypes.string,
};
export default WishlistCard;
