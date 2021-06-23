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
    <div>
      <Button style={{
        color: 'black', backgroundColor: 'transparent', margin: '10px', textAlign: 'left', border: 'transparent',
      }} onClick={() => handleClick(fbKey, 'delete')}><i className="far fa-trash-alt"></i></Button>
      <Button style={{ color: 'black', backgroundColor: 'transparent', border: 'transparent' }} onClick={() => handleClick(fbKey, 'edit')}>
        {editing ? 'Close Form' : <i className="fas fa-user-edit"></i>

}
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
         </CardBody>
         <img width="100%" src={image} className="photo" alt="Card image cap" />
         <CardBody>
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
         />
         }
          {
         adding && <WishlistForm
         formTitle='Add To Wishlist'
         setProducts={setProducts}
         firebaseKey={firebaseKey}
         productId={productId}
         price={price}
         image={image}
         name={name}
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
  productId: PropTypes.string,
  setProducts: PropTypes.func,
};
export default ProudctsCard;
