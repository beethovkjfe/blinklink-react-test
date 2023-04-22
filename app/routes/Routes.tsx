import React from 'react';
import { Switch } from 'react-router-dom';

import { PublicRoute } from './PublicRoute';
import { pageRoutes } from './config';

export const Routes = (props: any): JSX.Element => {
  return (
    <Switch>
      {pageRoutes.map((route, ind) => (
        <PublicRoute exact {...route} {...props} key={ind} />
      ))}
    </Switch>
  );
};
