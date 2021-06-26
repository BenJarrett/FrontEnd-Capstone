import React, { useState } from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardBody,
  CardSubtitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteProduct } from '../../helpers/data/productsData';
import ProductsForm from './ProductForm';
import WishlistForm from './WishListPopUp';

const OnSaleProudctsCard = ({
  firebaseKey,
  user,
  admin,
  name,
  price,
  image,
  sFAisle,
  sFBay,
  wHAisle,
  sFStock,
  wHBay,
  wHLevel,
  wHStock,
  sFLevel,
  onSalePrice,
  onSale,
  productId,
  setOnSale,
}) => {
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'delete':
        deleteProduct(fbKey)
          .then(setOnSale);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'add-to-wishlist':
        setAdding((prevState) => !prevState);
        break;
      default:
        console.warn('No Products on Sale');
    }
  };
  const editView = (fbKey) => (
    <div className="admin-button">
      <Button style={{
        color: 'black', backgroundColor: 'transparent', textAlign: 'center', border: 'transparent',
      }} onClick={() => handleClick(fbKey, 'delete')}><i className="far fa-trash-alt"></i></Button>
      <Button style={{ color: 'black', backgroundColor: 'transparent', border: 'transparent' }} onClick={() => handleClick(fbKey, 'edit')}>
        {editing ? 'Close Form' : <i className="fas fa-user-edit"></i>
}
      </Button>
    </div>
  );
  const userView = (fbKey) => (
    <div className='add-wishlist'>
      <Button style={{ color: 'black', backgroundColor: 'transparent', border: 'transparent' }}
       onClick={() => handleClick(fbKey, 'add-to-wishlist')}><i className="fas fa-plus"></i></Button>
    </div>
  );
  return (
        <Card>
          <CardBody>
          <div style={{ textAlign: 'center' }}>
         <CardTitle tag="h5">{name}</CardTitle>
         <hr></hr>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Original Price: {price}</CardSubtitle>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Sale Price: {onSalePrice}</CardSubtitle>
          </div>
         </CardBody>
         <img width="100%" src={image} className="photo" alt="Card image cap" />
         <CardBody>
         <CardTitle style={{ textAlign: 'center' }} tag="h5">Location</CardTitle>
         <hr></hr>
         <div style={{ textAlign: 'center' }}>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Asile: {sFAisle}</CardSubtitle>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Bay: {sFBay}</CardSubtitle>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Level: {sFLevel}</CardSubtitle>
         <hr></hr>
         </div>

         { admin && editView(firebaseKey) }
         { user && userView(firebaseKey) }

         {
         editing && <ProductsForm
         formTitle='Edit Product'
         setOnSale={setOnSale}
         firebaseKey={firebaseKey}
         price={price}
         image={image}
         name={name}
         sFAisle={sFAisle}
         sFBay={sFBay}
         onSale={onSale}
         sFLevel={sFLevel}
         sFStock={sFStock}
         onSalePrice={onSalePrice}
         wHAisle={wHAisle}
         wHBay={wHBay}
         wHLevel={wHLevel}
         wHStock={wHStock}
         admin={admin}

         />
         }
         {
         adding && <WishlistForm
         formTitle='Add To Wishlist'
         setOnSale={setOnSale}
         firebaseKey={firebaseKey}
         productId={productId}
         price={price}
         image={image}
         name={name}
         onSalePrice={onSalePrice}
         sFAisle={sFAisle}
         sFBay={sFBay}
         sFLevel={sFLevel}
         user={user}
         />
         }
         </CardBody>
         </Card>
  );
};

OnSaleProudctsCard.propTypes = {
  firebaseKey: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  sFAisle: PropTypes.string,
  sFBay: PropTypes.string,
  sFLevel: PropTypes.string,
  sFStock: PropTypes.string,
  onSalePrice: PropTypes.string,
  onSale: PropTypes.bool,
  wHAisle: PropTypes.string,
  wHBay: PropTypes.string,
  wHLevel: PropTypes.string,
  wHStock: PropTypes.string,
  admin: PropTypes.any,
  user: PropTypes.any,
  productId: PropTypes.string,
  setOnSale: PropTypes.func,
};
export default OnSaleProudctsCard;
