import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import App from '../App'
import LoginHint from '../pages/LoginHint'
import OwnerHomePage from '../pages/OwnerHomePage'
import AlbumShowPage from '../pages/AlbumShowPage'

const routeMap = [
  {
    path: '/',
    component: OwnerHomePage,
    exact: true,
  },
  {
    path: '/loginHint',
    component: LoginHint,
    exact: true,
  },
  {
    path: '/AlbumShowPage:albumId',
    component: AlbumShowPage,
    exact: true,
  },
]

const routes = () => (
  <Switch>
    {routeMap.map((item) => (
      <Route key={item.path} path={item.path} component={item.component} exact={item.exact} />
    ))}
    <Redirect from="*" to={`/404`} />
  </Switch>
)

export default routes