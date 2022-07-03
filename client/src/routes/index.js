import { lazy } from 'react';

const Home = lazy(() => import('Pages/home'));

const router = [
  {
    path: '/',
    Child: Home,
  },
];

export default router;
