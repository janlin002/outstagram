import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useLocation, Link, useNavigate } from 'react-router-dom'

import { AiOutlineHome } from 'react-icons/ai'
import { GoDiffAdded } from 'react-icons/go'
import { BiUserCircle } from 'react-icons/bi'
import { MdPostAdd } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'

import Swal from '../util/swal'

import {
  changeLoginStatus,
} from '../redux/actions'

import {
  loginStatus,
} from '../redux/selectors'

function Headers() {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const userLoginStatus = useSelector(loginStatus)

  // TODO 開發完畢要打開
  useEffect(() => {
    if (userLoginStatus === false && pathname !== '/') {
      Swal()
      navigate('/')
    }
  }, [userLoginStatus, pathname])

  const handleLogoutClick = () => {
    dispatch(changeLoginStatus(false))
    navigate('/')
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light ">
      <div className="container-fluid d-flex justify-content-around">
        <div>
          <a className="navbar-brand" href="/#">
            outstagram
          </a>
        </div>
        <form className="d-flex headerInput" role="search">
          <input className="form-control me-2" type="search" placeholder="搜尋" aria-label="Search" />
          {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
        <div className="d-flex">
          <Link className="navbar-brand" to="/home">
            <AiOutlineHome
              style={pathname === '/home' ? { color: 'red' } : ''}
            />
          </Link>
          <Link className="navbar-brand" to="/postItem">
            <MdPostAdd
              style={pathname === '/postItem' ? { color: 'red' } : ''}
            />
          </Link>
          <Link className="navbar-brand" to="/upload-file">
            <GoDiffAdded
              style={pathname === '/upload-file' ? { color: 'red' } : ''}
            />
          </Link>
          <Link className="navbar-brand" to="/userInfo">
            <BiUserCircle
              style={pathname === '/userInfo' ? { color: 'red' } : ''}
            />
          </Link>
          {
            pathname !== '/' && (
              <div
                role="button"
                className="navbar-brand"
                onClick={() => handleLogoutClick()}
                tabIndex={0}
                onKeyDown=""
              >
                <FiLogOut />
              </div>
            )
          }
        </div>
      </div>
    </nav>
  )
}

export default Headers

// icon感覺可以改成頭貼 20px * 20px
