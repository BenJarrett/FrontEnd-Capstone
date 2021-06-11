import React, { useState } from 'react';
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
  setProducts

}) => {
  const [product, setProduct] = useState({
    name: name || '',
    image: image || '',
    price: price || '',
    sFAisle: sFAisle || '',
    sFBay: sFBay || '',
    sFLevel: sFLevel || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.firebaseKey) {
      updateProduct(product).then((productArray) => setProducts(productArray));
    } else {
      addProduct(product).then((productArray) => setProducts(productArray));
    }
  };

  return (
    <div className='Form'>
    <Form id='addProductForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>Product Form: </h2>
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
            value={product.sFBay}
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
        <Label for="materialsUsed">Materials Include:</Label>
          <Input
            name='materialsUsed'
            id='materialsUsed'
            value={product.materialsUsed}
            type='text'
            placeholder='Add Materials Used to Create Product'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="salePrice">Sale Price:</Label>
          <Input
            name='salePrice'
            id='salePrice'
            value={product.salePrice}
            type='text'
            placeholder='If the Product is on Sale, What is the Price? '
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="type">Type of Product:</Label>
          <Input
            name='type'
            id='type'
            value={product.type}
            type='text'
            placeholder='What Type of Produc is it?'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="wHAsile">Warehouse Aisle:</Label>
          <Input
            name='wHAsile'
            id='wHAsile'
            value={product.wHAsile}
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
            value={product.wHBwHLevelay}
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
        <FormGroup>
        <Label for="staffPick">Staff Pick?:</Label>
          <Input
            name='staffPick'
            id='staffPick'
            value={product.staffPick}
            type='checkbox'
            placeholder='Is this Product a Staff Pick?'
            onChange={handleInputChange}
          />
        </FormGroup>
      <FormGroup>
        <Label for="onSale">On Sale?:</Label>
          <Input
            name='onSale'
            id='onSale'
            value={product.onSale}
            type='checkbox'
            placeholder='Is this Product Currently on Sale? '
            onChange={handleInputChange}
          />
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
  firebaseKey: PropTypes.string,
  setProducts: PropTypes.string,
};

export default ProductsForm;
