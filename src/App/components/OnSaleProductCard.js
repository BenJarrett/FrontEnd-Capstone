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
  sFLevel,
  onSalePrice,
  productId,
  setOnSale,
}) => {
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  console.warn(firebaseKey);
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
        console.warn('No Projects');
    }
  };
  const editView = (fbKey) => (
    <div>
      <Button style={{ backgroundColor: '#252323', margin: '10px', textAlign: 'left' }} onClick={() => handleClick(fbKey, 'delete')}>Delete Product</Button>
      <Button style={{ backgroundColor: '#70798C' }} onClick={() => handleClick(fbKey, 'edit')}>
        {editing ? 'Close Form' : 'Edit Product'}
      </Button>
    </div>
  );
  const userView = (fbKey) => (
    <div className='add-wishlist'>
      <Button
       onClick={() => handleClick(fbKey, 'add-to-wishlist')}> Add To Wishlist</Button>
    </div>
  );
  return (
        <Card>
          <CardBody>
         <CardTitle tag="h5">Product Name: {name}</CardTitle>
         <hr></hr>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Price: {price}</CardSubtitle>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Sale Price: {onSalePrice}</CardSubtitle>

         </CardBody>
         <img width="100%" src={image} className="photo" alt="Card image cap" />
         <CardBody>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Asile: {sFAisle}</CardSubtitle>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Bay: {sFBay}</CardSubtitle>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Level: {sFLevel}</CardSubtitle>

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
         sFLevel={sFLevel}
         onSalePrice={onSalePrice}
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
  onSalePrice: PropTypes.string,
  admin: PropTypes.any,
  user: PropTypes.any,
  productId: PropTypes.string,
  setOnSale: PropTypes.func,
};
export default OnSaleProudctsCard;
