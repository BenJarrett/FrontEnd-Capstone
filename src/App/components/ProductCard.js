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

const ProudctsCard = ({
  firebaseKey,
  user,
  name,
  image,
  price,
  sFAisle,
  sFBay,
  sFLevel,
  sFStock,
  onSalePrice,
  wHAsile,
  wHBay,
  wHLevel,
  wHStock,
  admin,
  productId,
  setProducts,
}) => {
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);

  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'delete':
        deleteProduct(fbKey)
          .then(setProducts);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'add-to-wishlist':
        setAdding((prevState) => !prevState);
        break;
      default:
        console.warn('No Projects');
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
         <CardTitle tag="h5">{name}</CardTitle>
         <hr></hr>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Price: {price}</CardSubtitle>
         </CardBody>
         <img width="100%" src={image} className="photo" alt="Card image cap" />
         <CardBody>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Aisle: {sFAisle}</CardSubtitle>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Bay: {sFBay}</CardSubtitle>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Level: {sFLevel}</CardSubtitle>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Stock: {sFStock}</CardSubtitle>
         <hr></hr>
         { admin && editView(firebaseKey) }
         { user && userView(firebaseKey) }

         {
         editing && <ProductsForm
         formTitle='Edit Product'
         setProducts={setProducts}
         firebaseKey={firebaseKey}
         price={price}
         image={image}
         name={name}
         sFAisle={sFAisle}
         sFBay={sFBay}
         sFLevel={sFLevel}
         sFStock={sFStock}
         onSalePrice={onSalePrice}
         wHAsile={wHAsile}
         wHBay={wHBay}
         wHLevel={wHLevel}
         wHStock={wHStock}
         />
         }
          {
         adding && <WishlistForm
         formTitle='Add To Wishlist'
         setProducts={setProducts}
         firebaseKey={firebaseKey}
         productId={productId}
         price={price}
         onSalePrice={onSalePrice}
         image={image}
         name={name}
         sFAisle={sFAisle}
         sFBay={sFBay}
         sFLevel={sFLevel}
         sFStock={sFStock}
         user={user}
         />
         }
         </CardBody>
         </Card>
  );
};

ProudctsCard.propTypes = {
  firebaseKey: PropTypes.string,
  user: PropTypes.any,
  admin: PropTypes.any,
  price: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  sFAisle: PropTypes.string,
  sFBay: PropTypes.string,
  sFLevel: PropTypes.string,
  sFStock: PropTypes.string,
  onSalePrice: PropTypes.string,
  wHAsile: PropTypes.string,
  wHBay: PropTypes.string,
  wHLevel: PropTypes.string,
  wHStock: PropTypes.string,
  productId: PropTypes.string,
  setProducts: PropTypes.func,
};
export default ProudctsCard;
