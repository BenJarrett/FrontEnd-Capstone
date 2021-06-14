import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from '../views/Home';
import AddProduct from '../views/AdminAddProducts';
import GetFavoriteProducts from '../views/UserFavotires';
import GetStaff from '../views/Staff';
import GetStaffPicks from '../views/StaffPicks';
import GetUserList from '../views/UserList';
import Products from '../views/Products';
import OnSaleProducts from '../views/OnSale';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/'
        component={HomePage} />
        <Route path='/add-products' component={AddProduct} />
        <Route path='/all-products' component={Products} />
        <Route path='/favorites' component={GetFavoriteProducts} />
        <Route path='/on-sale' component={OnSaleProducts} />
        <Route path='/staff' component={GetStaff} />
        <Route path='/staff-picks' component={GetStaffPicks} />
        <Route path='/user-list' component={GetUserList} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  admin: PropTypes.any
};
