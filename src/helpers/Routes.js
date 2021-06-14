import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from '../views/Home';
import AddProduct from '../views/AdminAddProducts';
import GetProducts from '../views/Products';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/'
        component={HomePage} />
        <Route path='/add-products' component={AddProduct} />
        <Route path='/all-products' component={GetProducts} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  admin: PropTypes.any
};
