import { lazy } from 'react'

const Login = lazy(() => import('Pages/Login'))
const Home = lazy(() => import('Pages/home'))
const UserInfo = lazy(() => import('Pages/userInfo'))
const postItem = lazy(() => import('Pages/postItem'))
const uploadFile = lazy(() => import('Pages/uploadFile'))
const setting = lazy(() => import('Pages/settings'))
const CreateUser = lazy(() => import('Pages/createUser'))
const UserControl = lazy(() => import('Pages/userControl'))

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
  {
    path: '/settings',
    Child: setting,
  },
  {
    path: '/create-user',
    Child: CreateUser,
  },
  {
    path: '/user-control',
    Child: UserControl,
  },
]

export default router
