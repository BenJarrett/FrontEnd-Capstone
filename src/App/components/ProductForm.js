import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import { addProduct, updateProduct } from '../../helpers/data/productsData';

const ProductsForm = ({
  name,
  image,
  price,
  sFAisle,
  sFBay,
  sFLevel,
  firebaseKey,
  sFStock,
  onSalePrice,
  wHAisle,
  wHBay,
  wHLevel,
  wHStock,
  staffPick,
  onSale,
  setProducts

}) => {
  const [product, setProduct] = useState({
    name: name || '',
    image: image || '',
    price: price || '',
    sFAisle: sFAisle || '',
    sFBay: sFBay || '',
    sFLevel: sFLevel || '',
    sFStock: sFStock || '',
    onSalePrice: onSalePrice || '',
    wHAisle: wHAisle || '',
    wHBay: wHBay || '',
    wHLevel: wHLevel || '',
    wHStock: wHStock || '',
    onSale: onSale || false,
    staffPick: staffPick || false,
    firebaseKey: firebaseKey || null
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    setProduct((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === 'onSale' ? e.target.checked : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.firebaseKey) {
      updateProduct(product).then(setProducts);
    } else {
      addProduct(product).then(() => {
        history.push('/all-products');
      });
    }
  };

  return (
    <div className='Form'>
    <Form id='addProductForm' autoComplete='off' onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            name='name'
            id='name'
            value={product.name}
            type='text'
            placeholder='Enter The Name of The Product'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="image">Image:</Label>
          <Input
            name='image'
            id='image'
            value={product.image}
            type='url'
            placeholder='Enter a Screenshot URL'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="price">Price:</Label>
          <Input
            name='price'
            id='price'
            value={product.price}
            type='text'
            placeholder='Enter Price of Product'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="sFAisle">Store Front Aisle:</Label>
          <Input
            name='sFAisle'
            id='sFAisle'
            value={product.sFAisle}
            type='text'
            placeholder='Add Store Front Aisle'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="sFBay">Store Front Bay:</Label>
          <Input
            name='sFBay'
            id='sFBay'
            value={product.sFBay}
            type='text'
            placeholder='Add Store Front Bay'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="sFLevel">Store Front Level:</Label>
          <Input
            name='sFLevel'
            id='sFLevel'
            value={product.sFLevel}
            type='text'
            placeholder='Add Store Front Level'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="sFStock">Store Front Stock:</Label>
          <Input
            name='sFStock'
            id='sFStock'
            value={product.sFStock}
            type='text'
            placeholder='How Many are at this Location?'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="onSalePrice">Sale Price:</Label>
          <Input
            name='onSalePrice'
            id='onSalePrice'
            value={product.onSalePrice}
            type='text'
            placeholder='If the Product is on Sale, What is the Price? '
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="wHAisle">Warehouse Aisle:</Label>
          <Input
            name='wHAisle'
            id='wHAisle'
            value={product.wHAisle}
            type='text'
            placeholder='Warehouse Aisle'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="wHBay">Warehouse Bay:</Label>
          <Input
            name='wHBay'
            id='wHBay'
            value={product.wHBay}
            type='text'
            placeholder='Warehouse Bay'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="wHLevel">Warehouse Level:</Label>
          <Input
            name='wHLevel'
            id='wHLevel'
            value={product.wHLevel}
            type='text'
            placeholder='Warehouse Level'
            onChange={handleInputChange}
          />
          <Label for="wHStock">Warehouse Stock:</Label>
          <Input
            name='wHStock'
            id='wHStock'
            value={product.wHStock}
            type='text'
            placeholder='How Many are at this Location?'
            onChange={handleInputChange}
          />
        </FormGroup>
      <FormGroup check>
        <Label check for="onSale">
          <Input
            name='onSale'
            id='onSale'
            checked={product.onSale}
            type='checkbox'
            onChange={handleInputChange}
          /> On Sale?:
          </Label>
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

ProductsForm.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.string,
  sFAisle: PropTypes.string,
  sFBay: PropTypes.string,
  sFLevel: PropTypes.string,
  sFStock: PropTypes.string,
  onSalePrice: PropTypes.string,
  wHAisle: PropTypes.string,
  wHBay: PropTypes.string,
  wHLevel: PropTypes.string,
  wHStock: PropTypes.string,
  onSale: PropTypes.bool,
  staffPick: PropTypes.bool,
  firebaseKey: PropTypes.string,
  setProducts: PropTypes.func
};

export default ProductsForm;
