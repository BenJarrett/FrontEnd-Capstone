import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from '../views/Home';
import AddProduct from '../views/AdminAddProducts';
import GetFavoriteProducts from '../views/UserFavotires';
// import GetStaff from '../views/Staff';
// import GetStaffPicks from '../views/StaffPicks';
import Products from '../views/Products';
import OnSaleProducts from '../views/OnSale';
import ChosenStaffPicks from '../views/StaffPicks';
import CurrentList from '../views/UserList';
import Staff from '../views/Staff';

export default function Routes({
  user,
  admin
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
        component={HomePage} />
        <Route path='/add-products' component={AddProduct} />
        <Route exact path='/all-products' component={() => <Products
        user={user}
        admin={admin}
      /> } />
        <Route path='/favorites' component={GetFavoriteProducts} />
        <Route path='/on-sale' component={OnSaleProducts} />
        <Route path='/staff' component={() => <Staff
        admin={admin}
        /> }/>
        <Route path='/staff-picks' component={ChosenStaffPicks} />
        <Route exact path='/user-list' component={() => <CurrentList
        user={user}
      /> } />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any
};
