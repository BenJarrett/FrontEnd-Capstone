import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from '../views/Home';
import AddProduct from '../views/AdminAddProducts';
import GetProducts from '../views/Products';
import GetFavoriteProducts from '../views/UserFavotires';
import GetOnSaleProducts from '../views/OnSale';
import GetStaff from '../views/Staff';
import GetStaffPicks from '../views/StaffPicks';
import GetUserList from '../views/UserList';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/'
        component={HomePage} />
        <Route path='/add-products' component={AddProduct} />
        <Route path='/all-products' component={GetProducts} />
        <Route path='/favorites' component={GetFavoriteProducts} />
        <Route path='/on-sale' component={GetOnSaleProducts} />
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
