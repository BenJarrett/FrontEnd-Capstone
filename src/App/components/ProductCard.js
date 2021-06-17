import React, { useState } from 'react';
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
import { deleteProduct } from '../../helpers/data/productsData';
import ProductsForm from './ProductForm';
import WishlistForm from './WishListPopUp';

const ProudctsCard = ({
  user,
  products,
  setProducts,
}) => {
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  // const history = useHistory();
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
    products.map((productInfo) => (
        <Card
        key={productInfo.firebaseKey}>
          <CardBody>
         <CardTitle tag="h5">Product Name: {productInfo.name}</CardTitle>
         <hr></hr>
         <CardSubtitle tag="h6" className="mb-2 text-muted">price: {productInfo.price}</CardSubtitle>
         </CardBody>
         <img width="100%" src={productInfo.image} className="photo" alt="Card image cap" />
                    <Button style={{ backgroundColor: '#252323', margin: '10px', textAlign: 'left' }} >Add to List</Button>
                    <Button style={{ backgroundColor: '#252323', margin: '10px', textAlign: 'left' }} >Add to Favorites</Button>
         <CardBody>
         { editView(productInfo.firebaseKey) }
         { user && userView(productInfo.firebaseKey) }

         {
         editing && <ProductsForm
         formTitle='Edit Product'
         setProducts={setProducts}
         firebaseKey={productInfo.firebaseKey}
         price={productInfo.price}
         image={productInfo.image}
         name={productInfo.name}
         />
         }
          {
         adding && <WishlistForm
         formTitle='Add To Wishlist'
         setProducts={setProducts}
         firebaseKey={productInfo.firebaseKey}
         price={productInfo.price}
         image={productInfo.image}
         name={productInfo.name}
         user={user}
         />
         }
         </CardBody>
         </Card>
    ))
  );
};

ProudctsCard.propTypes = {
  firebaseKey: PropTypes.string,
  products: PropTypes.array,
  setProducts: PropTypes.func,
  user: PropTypes.any
  // price: PropTypes.string,
  // name: PropTypes.string,
  // image: PropTypes.string,
};
export default ProudctsCard;
