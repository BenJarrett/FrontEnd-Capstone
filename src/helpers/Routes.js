import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from '../views/Home';

export default function Routes({
  admin
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
        component={() => <HomePage admin={admin}
        />} />
</Switch>
    </div>
  );
}

Routes.propTypes = {
  admin: PropTypes.any
};
