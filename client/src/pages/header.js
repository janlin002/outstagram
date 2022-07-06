import React from 'react'

import { useLocation, Link } from 'react-router-dom'

import { AiOutlineHome } from 'react-icons/ai'
import { GoDiffAdded } from 'react-icons/go'
import { BiUserCircle } from 'react-icons/bi'
import { MdPostAdd } from 'react-icons/md'

function Headers() {
  const { pathname } = useLocation()
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
        <div>
          <Link className="navbar-brand" to="/">
            <AiOutlineHome
              style={pathname === '/' ? { color: 'red' } : ''}
            />
          </Link>
          <Link className="navbar-brand" to="/postItem">
            <MdPostAdd
              style={pathname === '/postItem' ? { color: 'red' } : ''}
            />
          </Link>
          <a className="navbar-brand" href="/#">
            <GoDiffAdded />
          </a>
          <Link className="navbar-brand" to="/userInfo">
            <BiUserCircle
              style={pathname === '/userInfo' ? { color: 'red' } : ''}
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Headers

// icon感覺可以改成頭貼 20px * 20px
// a 改 Link
