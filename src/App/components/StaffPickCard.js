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

const StaffPickCard = ({
  firebaseKey,
  setStaffPicks,
  admin,
  name,
  price,
  image

}) => {
  const [editing, setEditing] = useState(false);
  console.warn(firebaseKey);
  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'delete':
        deleteProduct(fbKey)
          .then(setStaffPicks);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('No Staff Picks Set Up!');
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
        <Card>
          <CardBody>
         <CardTitle tag="h5">Product Name: {name}</CardTitle>
         <hr></hr>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Price: {price}</CardSubtitle>
         </CardBody>
         <img width="100%" src={image} className="photo" alt="Card image cap" />
         <CardBody>
         <hr></hr>
         { admin && editView(firebaseKey) }
         {
         editing && <ProductsForm
         formTitle='Edit Staff Picks Form'
         setStaffPicks={setStaffPicks}
         firebaseKey={firebaseKey}
         price={price}
         image={image}
         name={name}
         admin={admin}
         />
         }
         </CardBody>
         </Card>
  );
};

StaffPickCard.propTypes = {
  firebaseKey: PropTypes.string,
  staffPicks: PropTypes.array,
  price: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  admin: PropTypes.any,
  setStaffPicks: PropTypes.func
};
export default StaffPickCard;
