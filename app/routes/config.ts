import { HomePage, CountryPage } from 'pages';

export const pageRoutes = [
  { path: '/', component: HomePage },
  { path: '/country/:code', component: CountryPage }
];
