import React from 'react';
import {
  Card,
  Button,
  CardTitle,
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
      <Button style={{
        color: 'black', backgroundColor: 'transparent', textAlign: 'center', border: 'transparent',
      }} onClick={() => handleClick(fbKey, 'delete')}><i className="far fa-trash-alt"></i></Button>
    </div>
  );

  return (
        <Card>
          <CardBody>
          <div style={{ textAlign: 'center' }}>
         <CardTitle tag="h5">{name}</CardTitle>
         <hr></hr>
         <CardSubtitle tag="h6" className="mb-2 text-muted">{price}</CardSubtitle>
          </div>
          </CardBody>
         <img width="100%" src={image} className="photo" alt="Card image cap" />
         <CardBody>
         <CardTitle style={{ textAlign: 'center' }} tag="h5">Location</CardTitle>
           <hr></hr>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Asile: {sFAisle}</CardSubtitle>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Bay: {sFBay}</CardSubtitle>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Level: {sFLevel}</CardSubtitle>
         <hr></hr>
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
