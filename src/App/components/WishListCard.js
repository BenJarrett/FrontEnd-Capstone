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
  firebaseKey,
  user,
  name,
  image,
  price,
  sFAisle,
  sFBay,
  sFLevel,
  setWishlists

}) => {
  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'delete':
        deleteWishList(fbKey, user)
          .then(setWishlists);
        break;
      default:
    }
  };
  const deleteCardView = (fbKey) => (
    <div className='userDelete'>
      <Button onClick={() => handleClick(fbKey, 'delete')}><i className="far fa-trash-alt"></i> Delete</Button>
    </div>
  );

  return (
        <Card>
          <CardBody>
         <CardTitle tag="h5">Product Name: {name}</CardTitle>
         <hr></hr>
         <CardSubtitle tag="h6" className="mb-2 text-muted">price: {price}</CardSubtitle>
         </CardBody>
         <img width="100%" src={image} className="photo" alt="Card image cap" />
         <CardBody>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Asile: {sFAisle}</CardSubtitle>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Bay: {sFBay}</CardSubtitle>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Level: {sFLevel}</CardSubtitle>
         { deleteCardView(firebaseKey) }
         </CardBody>
         </Card>
  );
};

WishlistCard.propTypes = {
  firebaseKey: PropTypes.string,
  user: PropTypes.any,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  sFAisle: PropTypes.string,
  sFBay: PropTypes.string,
  sFLevel: PropTypes.string,
  setWishlists: PropTypes.func
};
export default WishlistCard;
