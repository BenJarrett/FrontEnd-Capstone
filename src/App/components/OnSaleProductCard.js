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

const OnSaleProudctsCard = ({
  firebaseKey,
  onSale,
  setOnSale,
  admin
}) => {
  const [editing, setEditing] = useState(false);
  // const history = useHistory();
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
  return (
    onSale.map((productInfo) => (
        <Card
        key={productInfo.firebaseKey}>
          <CardBody>
         <CardTitle tag="h5">Prduct Name: {productInfo.name}</CardTitle>
         <hr></hr>
         <CardSubtitle tag="h6" className="mb-2 text-muted">price: {productInfo.price}</CardSubtitle>
         </CardBody>
         <img width="100%" src={productInfo.image} className="photo" alt="Card image cap" />
         <CardBody>
         { admin && editView(productInfo.firebaseKey) }
         {
         editing && <ProductsForm
         formTitle='Edit Product'
         setOnSale={setOnSale}
         firebaseKey={productInfo.firebaseKey}
         price={productInfo.price}
         image={productInfo.image}
         name={productInfo.name}
         admin={admin}
         />
         }
         </CardBody>
         </Card>
    ))
  );
};

OnSaleProudctsCard.propTypes = {
  firebaseKey: PropTypes.string,
  onSale: PropTypes.array,
  setOnSale: PropTypes.func,
  price: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  admin: PropTypes.any
};
export default OnSaleProudctsCard;
