import React from 'react';

const Table = React.lazy(() => import('./components/dummy/Table'));
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: '/table', name: 'table', component: Table },
  { path: '/table', name: 'table', component: Table },
];

export default routes;
