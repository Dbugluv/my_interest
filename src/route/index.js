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
import PicDetailPage from '../pages/PicDetailPage'

const routeMap = [
  {
    path: '/personal/albums',
    component: OwnerHomePage,
    exact: true,
  },
  {
    path: '/',
    component: LoginHint,
    exact: true,
  },
  {
    path: '/personal/picList/:albumId',
    component: AlbumShowPage,
    exact: true,
  },
  {
    path: '/personal/PicDetail/:picId',
    component: PicDetailPage,
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