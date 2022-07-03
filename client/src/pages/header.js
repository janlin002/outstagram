import React from 'react';
import { AiFillHome, AiOutlineMessage } from 'react-icons/ai';
import { GoDiffAdded } from 'react-icons/go';
import { BiUserCircle } from 'react-icons/bi';

function Headers() {
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
          <a className="navbar-brand" href="/#">
            <AiFillHome />
          </a>
          <a className="navbar-brand" href="/#">
            <AiOutlineMessage />
          </a>
          <a className="navbar-brand" href="/#">
            <GoDiffAdded />
          </a>
          <a className="navbar-brand" href="/#">
            <BiUserCircle />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Headers;
