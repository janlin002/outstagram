import { lazy } from 'react'

const Home = lazy(() => import('Pages/home'))
const UserInfo = lazy(() => import('Pages/userInfo'))
const postItem = lazy(() => import('Pages/postItem'))

const router = [
  {
    path: '/',
    Child: Home,
  },
  {
    path: '/userInfo',
    Child: UserInfo,
  },
  {
    path: '/postItem',
    Child: postItem,
  },
]

export default router
