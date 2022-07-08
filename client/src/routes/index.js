import { lazy } from 'react'

const Login = lazy(() => import('Pages/Login'))
const Home = lazy(() => import('Pages/home'))
const UserInfo = lazy(() => import('Pages/userInfo'))
const postItem = lazy(() => import('Pages/postItem'))
const uploadFile = lazy(() => import('Pages/uploadFile'))

const router = [
  {
    path: '/',
    Child: Login,
  },
  {
    path: '/home',
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
  {
    path: '/upload-file',
    Child: uploadFile,
  },
]

export default router
